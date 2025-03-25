import { LLMProviderOptions } from '@webank/aide-core';
export interface IAiConfig {
    autocomplete: LLMProviderOptions & {
        modelKind: string;
    };
    chat: LLMProviderOptions;
}
//# sourceMappingURL=ai.d.ts.map