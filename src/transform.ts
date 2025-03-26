import type { IComponentMetadata } from './type';
import * as fs from 'node:fs';
import OpenAI from 'openai';
import { buttonMeta } from './components/button';
import { validateMetadata } from './validateMetadata';

export class AITransformer {
    private openai: OpenAI;
    private typeContent: string;
    private systemPrompt: string;
    private model: string;

    constructor(params: { apiKey: string, baseURL: string, model: string, typeFilePath: string }) {
        this.openai = new OpenAI({
            apiKey: params.apiKey,
            baseURL: params.baseURL,
        });

        this.model = params.model;

        this.typeContent = fs.readFileSync(params.typeFilePath, 'utf-8');
        this.systemPrompt = this.createSystemPrompt();
    }

    private createSystemPrompt(): string {
        return `你是一个专业的前端组件文档分析专家。你的任务是生成高质量的组件描述数据，用于组件库的文档生成和模型微调。

分析要求：
1. 数据完整性：
   - 确保每个字段都有明确且独特的描述，避免重复或模板化的内容
   - 属性描述要体现该属性的特点和使用注意事项
   - 场景描述要具体且实用，覆盖不同的业务场景

2. 数据质量：
   - 描述文本应专业、准确，使用领域术语
   - 每个场景都要包含具体的业务价值和实现目标
   - 属性关系要反映实际开发中的最佳实践
   - 避免过于笼统或无意义的描述

3. 微调优化：
   - 属性描述要包含类型信息和使用示例
   - 事件描述要包含触发条件和处理建议
   - 场景描述要包含实现思路和注意事项
   - 组件关系要体现架构设计的考虑

4. 类型定义精确性：
   - 严格遵循 PropTypeDefinition 类型定义
   - 对于 oneOf 类型，确保 items 数组中每个选项都有 name、title 和 usage
   - 对于 oneOfType、arrayOf、exact、shape 等复合类型，确保 value 字段符合类型定义
   - 事件参数和暴露方法的参数必须包含 name、type 和 description

5. 输出规范：
   - componentName：符合命名规范的组件名，通常以 F 开头
   - title：准确反映组件功能的中文标题
   - description：完整的功能描述，包含核心特性和适用场景
   - scenarios：至少 5 个具体的业务场景，每个场景包含场景描述、实现思路和注意事项
   - parent：详细的父组件约束，包括 types 和 restrictions
   - children：子组件的类型限制，可以是具体组件名或正则表达式
   - propRelations：完整的属性依赖关系，包括 source、target 和 effect
   - props：详细的属性配置，包含 name、title、propType、description 和 defaultValue
   - events：事件定义，包含 name、description 和 parameters
   - slots：插槽用途，包含 name、description、required 和 scope
   - exposes：方法接口，包含 name、description 和 parameters

6. 注意事项：
   - 插槽名称优先使用默认值的名称
   - 当属性配置的类型是 "JSSlot" 或 "type": "JSSlot" 时，此属性应被视为插槽，必须放在 slots 中，不能出现在 props 中
   - 对于复合类型的属性，确保类型嵌套结构正确
   - 对于事件和方法参数，确保类型描述准确且有实际意义

IComponentMetadata接口定义：
${this.typeContent}

button组件参考格式：
${JSON.stringify(buttonMeta, null, 2)}

注意：请直接返回 JSON 格式的数据，不要包含任何 Markdown 代码块标记或其他格式化内容。`;
    }

    public async transform(componentContent: string, componentName: string, maxRetries = 3): Promise<IComponentMetadata> {
        let currentRetry = 0;
        let userPrompt = `请根据以下组件内容生成组件描述：
${componentContent}`;

        while (currentRetry < maxRetries) {
            try {
                console.log(`🔄 开始转换组件 ${componentName}${currentRetry > 0 ? `(第${currentRetry + 1}次尝试)` : ''}...`);

                const completion = await this.openai.chat.completions.create({
                    messages: [
                        { role: 'system', content: this.systemPrompt },
                        { role: 'user', content: userPrompt },
                    ],
                    model: this.model,
                });

                const result = completion.choices[0]?.message?.content;
                console.log(`✨ AI 接口返回内容：\n${result}`);
                if (!result) {
                    throw new Error('AI 接口未返回有效内容');
                }

                console.log(`✨ AI 接口返回成功，正在解析响应内容...`);
                const metadata = JSON.parse(result);

                // 验证生成的元数据
                console.log(`✔️ 正在验证组件 ${componentName} 元数据的完整性...`);
                const validationResult = validateMetadata(metadata, componentName);

                if (!validationResult.valid) {
                    console.error(`❌ 组件 ${componentName} 验证失败:`);
                    validationResult.errors.forEach(error => console.error(`  • ${error}`));

                    if (currentRetry < maxRetries - 1) {
                        userPrompt = `${userPrompt}\n\n上一次生成的内容验证失败，请重新生成，错误信息：${validationResult.errors.join('\n')}`;
                        currentRetry++;
                        continue;
                    }
                    throw new Error(`元数据验证失败: ${validationResult.errors.join(', ')}`);
                }

                console.log(`✅ 组件 ${componentName} 验证通过`);
                return metadata;
            }
            catch (error) {
                if (currentRetry === maxRetries - 1) {
                    throw new Error(`组件处理失败(重试${maxRetries}次): ${error instanceof Error ? error.message : String(error)}`);
                }
                currentRetry++;
            }
        }

        throw new Error('未能成功转换组件');
    }
}
