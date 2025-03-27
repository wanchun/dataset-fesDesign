import { basicPropValueList } from './type';

/**
 * 验证组件元数据是否符合IComponentMetadata接口定义
 * @param metadata 待验证的组件元数据
 * @param componentName 组件名称，用于错误提示
 * @returns 验证结果，包含是否通过验证和错误信息
 */
export function validateMetadata(metadata: any, componentName: string): { valid: boolean, errors: string[] } {
    const errors: string[] = [];

    // 验证基本字段
    validateRequiredFields(metadata, errors);

    // 验证props字段
    validateProps(metadata, errors);

    // 验证events字段
    validateEvents(metadata, errors);

    // 验证slots字段
    validateSlots(metadata, errors);

    // 验证exposes字段
    validateExposes(metadata, errors);

    // 验证scenarios字段
    validateScenarios(metadata, errors);

    // 验证parent字段
    validateParent(metadata, errors);

    // 验证propRelations字段
    validatePropRelations(metadata, errors);

    return {
        valid: errors.length === 0,
        errors: errors.map(error => `[${componentName}] ${error}`),
    };
}

/**
 * 验证必填字段
 */
function validateRequiredFields(metadata: any, errors: string[]): void {
    // 检查必填字段是否存在
    const requiredFields = ['title', 'componentName', 'description', 'props'];
    for (const field of requiredFields) {
        if (!metadata[field]) {
            errors.push(`缺少必填字段: ${field}`);
        }
    }

    // 检查title和componentName是否为字符串
    if (metadata.title && typeof metadata.title !== 'string') {
        errors.push('title必须是字符串');
    }

    if (metadata.componentName && typeof metadata.componentName !== 'string') {
        errors.push('componentName必须是字符串');
    }

    if (metadata.description && typeof metadata.description !== 'string') {
        errors.push('description必须是字符串');
    }
}

/**
 * 验证props字段
 */
function validateProps(metadata: any, errors: string[]): void {
    if (!metadata.props)
        return;

    if (!Array.isArray(metadata.props)) {
        errors.push('props必须是数组');
        return;
    }

    for (let i = 0; i < metadata.props.length; i++) {
        const prop = metadata.props[i];
        // 检查必填字段
        if (!prop.name) {
            errors.push(`props[${i}]缺少必填字段: name`);
        }

        if (!prop.title) {
            errors.push(`props[${i}]缺少必填字段: title`);
        }

        if (!prop.valueType) {
            errors.push(`props[${i}]缺少必填字段: valueType`);
        }
        else {
            // 验证propType的格式
            validatePropType(prop.valueType, `props[${i}].valueType`, errors);
        }
    }
}

/**
 * 验证propType字段
 */
function validatePropType(propType: any, path: string, errors: string[]): void {
    // 如果是基础类型
    if (typeof propType === 'string') {
        const basicTypes = basicPropValueList;
        if (!basicTypes.includes(propType)) {
            errors.push(`${path}不是有效的基础类型，有效值为: ${basicTypes.join(', ')}`);
        }
        return;
    }

    // 如果是复杂类型
    if (typeof propType !== 'object' || propType === null) {
        errors.push(`${path}必须是字符串或对象`);
        return;
    }

    // 检查type字段
    if (!propType.type) {
        errors.push(`${path}缺少必填字段: type`);
        return;
    }

    // 根据不同类型进行验证
    switch (propType.type) {
        case 'oneOf':
            validateOneOfType(propType, path, errors);
            break;
        case 'oneOfType':
            validateOneOfTypeType(propType, path, errors);
            break;
        case 'arrayOf':
            validateArrayOfType(propType, path, errors);
            break;
        case 'exact':
            validateExactType(propType, path, errors);
            break;
        case 'shape':
            validateShapeType(propType, path, errors);
            break;
        case 'func':
            validateFuncType(propType, path, errors);
            break;
        default:
            errors.push(`${path}.type不是有效的类型，有效值为: oneOf, oneOfType, arrayOf, exact, shape, func`);
    }
}

/**
 * 验证oneOf类型
 */
function validateOneOfType(propType: any, path: string, errors: string[]): void {
    if (!propType.items) {
        errors.push(`${path}缺少必填字段: items`);
        return;
    }

    if (!Array.isArray(propType.items)) {
        errors.push(`${path}.items必须是数组`);
        return;
    }

    for (let i = 0; i < propType.items.length; i++) {
        const item = propType.items[i];
        if (!item.name) {
            errors.push(`${path}.items[${i}]缺少必填字段: name`);
        }

        if (!item.title) {
            errors.push(`${path}.items[${i}]缺少必填字段: title`);
        }
    }
}

/**
 * 验证oneOfType类型
 */
function validateOneOfTypeType(propType: any, path: string, errors: string[]): void {
    if (!propType.value) {
        errors.push(`${path}缺少必填字段: value`);
        return;
    }

    if (!Array.isArray(propType.value)) {
        errors.push(`${path}.value必须是数组`);
        return;
    }

    for (let i = 0; i < propType.value.length; i++) {
        validatePropType(propType.value[i], `${path}.value[${i}]`, errors);
    }
}

/**
 * 验证arrayOf类型
 */
function validateArrayOfType(propType: any, path: string, errors: string[]): void {
    if (!propType.value) {
        errors.push(`${path}缺少必填字段: value`);
        return;
    }

    validatePropType(propType.value, `${path}.value`, errors);
}

/**
 * 验证exact类型
 */
function validateExactType(propType: any, path: string, errors: string[]): void {
    if (!propType.value) {
        errors.push(`${path}缺少必填字段: value`);
        return;
    }

    if (!Array.isArray(propType.value)) {
        errors.push(`${path}.value必须是数组`);
        return;
    }

    for (let i = 0; i < propType.value.length; i++) {
        const prop = propType.value[i];
        if (!prop.name) {
            errors.push(`${path}.value[${i}]缺少必填字段: name`);
        }

        if (!prop.title) {
            errors.push(`${path}.value[${i}]缺少必填字段: title`);
        }

        if (!prop.valueType) {
            errors.push(`${path}.value[${i}]缺少必填字段: propType`);
        }
        else {
            validatePropType(prop.valueType, `${path}.value[${i}].propType`, errors);
        }
    }
}

/**
 * 验证shape类型
 */
function validateShapeType(propType: any, path: string, errors: string[]): void {
    if (!propType.value) {
        errors.push(`${path}缺少必填字段: value`);
        return;
    }

    if (!Array.isArray(propType.value)) {
        errors.push(`${path}.value必须是数组`);
        return;
    }

    for (let i = 0; i < propType.value.length; i++) {
        const prop = propType.value[i];
        if (!prop.name) {
            errors.push(`${path}.value[${i}]缺少必填字段: name`);
        }

        if (!prop.title) {
            errors.push(`${path}.value[${i}]缺少必填字段: title`);
        }

        if (!prop.valueType) {
            errors.push(`${path}.value[${i}]缺少必填字段: propType`);
        }
        else {
            validatePropType(prop.valueType, `${path}.value[${i}].propType`, errors);
        }
    }

    // 验证required字段
    if (propType.required && !Array.isArray(propType.required)) {
        errors.push(`${path}.required必须是数组`);
    }
}

/**
 * 验证events字段
 */
function validateEvents(metadata: any, errors: string[]): void {
    if (!metadata.events)
        return;

    if (!Array.isArray(metadata.events)) {
        errors.push('events必须是数组');
        return;
    }

    for (let i = 0; i < metadata.events.length; i++) {
        const event = metadata.events[i];
        // 检查必填字段
        if (!event.name) {
            errors.push(`events[${i}]缺少必填字段: name`);
        }

        // 验证parameters字段
        if (event.parameters) {
            if (!Array.isArray(event.parameters)) {
                errors.push(`events[${i}].parameters必须是数组`);
                continue;
            }

            for (let j = 0; j < event.parameters.length; j++) {
                const param = event.parameters[j];
                if (!param.name) {
                    errors.push(`events[${i}].parameters[${j}]缺少必填字段: name`);
                }

                if (!param.type) {
                    errors.push(`events[${i}].parameters[${j}]缺少必填字段: type`);
                }
            }
        }
    }
}

/**
 * 验证slots字段
 */
function validateSlots(metadata: any, errors: string[]): void {
    if (!metadata.slots)
        return;

    if (!Array.isArray(metadata.slots)) {
        errors.push('slots必须是数组');
        return;
    }

    for (let i = 0; i < metadata.slots.length; i++) {
        const slot = metadata.slots[i];
        // 检查必填字段
        if (!slot.name) {
            errors.push(`slots[${i}]缺少必填字段: name`);
        }
    }
}

/**
 * 验证exposes字段
 */
function validateExposes(metadata: any, errors: string[]): void {
    if (!metadata.exposes)
        return;

    if (!Array.isArray(metadata.exposes)) {
        errors.push('exposes必须是数组');
        return;
    }

    for (let i = 0; i < metadata.exposes.length; i++) {
        const expose = metadata.exposes[i];
        // 检查必填字段
        if (!expose.name) {
            errors.push(`exposes[${i}]缺少必填字段: name`);
        }

        // 验证parameters字段
        if (expose.parameters) {
            if (!Array.isArray(expose.parameters)) {
                errors.push(`exposes[${i}].parameters必须是数组`);
                continue;
            }

            for (let j = 0; j < expose.parameters.length; j++) {
                const param = expose.parameters[j];
                if (!param.name) {
                    errors.push(`exposes[${i}].parameters[${j}]缺少必填字段: name`);
                }

                if (!param.type) {
                    errors.push(`exposes[${i}].parameters[${j}]缺少必填字段: type`);
                }
            }
        }
    }
}

/**
 * 验证scenarios字段
 */
function validateScenarios(metadata: any, errors: string[]): void {
    if (!metadata.scenarios)
        return;

    if (!Array.isArray(metadata.scenarios)) {
        errors.push('scenarios必须是数组');
        return;
    }

    // 检查scenarios数量是否足够
    if (metadata.scenarios.length < 5) {
        errors.push(`scenarios数量不足，至少需要5个，当前只有${metadata.scenarios.length}个`);
    }

    // 检查每个scenario是否为字符串
    for (let i = 0; i < metadata.scenarios.length; i++) {
        if (typeof metadata.scenarios[i] !== 'string') {
            errors.push(`scenarios[${i}]必须是字符串`);
        }
    }
}

/**
 * 验证parent字段
 */
function validateParent(metadata: any, errors: string[]): void {
    if (!metadata.parent)
        return;

    if (typeof metadata.parent !== 'object' || metadata.parent === null) {
        errors.push('parent必须是对象');
        return;
    }

    // 验证types字段
    if (metadata.parent.types) {
        if (!Array.isArray(metadata.parent.types)) {
            errors.push('parent.types必须是数组');
        }
        else {
            for (let i = 0; i < metadata.parent.types.length; i++) {
                if (typeof metadata.parent.types[i] !== 'string') {
                    errors.push(`parent.types[${i}]必须是字符串`);
                }
            }
        }
    }

    // 验证restrictions字段
    if (metadata.parent.restrictions) {
        if (!Array.isArray(metadata.parent.restrictions)) {
            errors.push('parent.restrictions必须是数组');
            return;
        }

        for (let i = 0; i < metadata.parent.restrictions.length; i++) {
            const restriction = metadata.parent.restrictions[i];
            if (!restriction.parent) {
                errors.push(`parent.restrictions[${i}]缺少必填字段: parent`);
            }

            if (!restriction.description) {
                errors.push(`parent.restrictions[${i}]缺少必填字段: description`);
            }
        }
    }
}

/**
 * 验证func类型
 */
function validateFuncType(propType: any, path: string, errors: string[]): void {
    // 验证parameters字段
    if (propType.parameters) {
        if (!Array.isArray(propType.parameters)) {
            errors.push(`${path}.parameters必须是数组`);
            return;
        }

        for (let i = 0; i < propType.parameters.length; i++) {
            const param = propType.parameters[i];
            if (!param.name) {
                errors.push(`${path}.parameters[${i}]缺少必填字段: name`);
            }

            if (!param.type) {
                errors.push(`${path}.parameters[${i}]缺少必填字段: type`);
            }
        }
    }

    // 验证returnType字段
    if (propType.returnType) {
        validatePropType(propType.returnType, `${path}.returnType`, errors);
    }
}

/**
 * 验证propRelations字段
 */
function validatePropRelations(metadata: any, errors: string[]): void {
    if (!metadata.propRelations)
        return;

    if (!Array.isArray(metadata.propRelations)) {
        errors.push('propRelations必须是数组');
        return;
    }

    for (let i = 0; i < metadata.propRelations.length; i++) {
        const relation = metadata.propRelations[i];
        // 检查必填字段
        if (!relation.source) {
            errors.push(`propRelations[${i}]缺少必填字段: source`);
        }

        if (!relation.target) {
            errors.push(`propRelations[${i}]缺少必填字段: target`);
        }
        else {
            // target可以是字符串或字符串数组
            if (typeof relation.target !== 'string' && !Array.isArray(relation.target)) {
                errors.push(`propRelations[${i}].target必须是字符串或字符串数组`);
            }

            if (Array.isArray(relation.target)) {
                for (let j = 0; j < relation.target.length; j++) {
                    if (typeof relation.target[j] !== 'string') {
                        errors.push(`propRelations[${i}].target[${j}]必须是字符串`);
                    }
                }
            }
        }

        if (!relation.effect) {
            errors.push(`propRelations[${i}]缺少必填字段: effect`);
        }

        // 验证notes字段
        if (relation.notes) {
            if (!Array.isArray(relation.notes)) {
                errors.push(`propRelations[${i}].notes必须是数组`);
            }
            else {
                for (let j = 0; j < relation.notes.length; j++) {
                    if (typeof relation.notes[j] !== 'string') {
                        errors.push(`propRelations[${i}].notes[${j}]必须是字符串`);
                    }
                }
            }
        }
    }
}
