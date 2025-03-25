import { IPublicTypeJSExpression } from '..';
export interface IPublicTypeI18nData {
    type: 'i18n';
    /**
     * i18n 结构中字段的 key 标识符
     */
    key: string;
    /**
     * 语料为字符串模板时的变量内容
     */
    params?: Record<string, string | number | IPublicTypeJSExpression>;
}
//# sourceMappingURL=i18n-data.d.ts.map