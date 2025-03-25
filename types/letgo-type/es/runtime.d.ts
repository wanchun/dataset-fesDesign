/**
 * 国际化相关 API
 */
export interface IntlApi {
    /**
     * 返回语料字符串
     * @param i18nKey 语料的标识符
     * @param params 可选，是用来做模版字符串替换
     */
    t: (key: string, params?: Record<string, string>) => string;
    /**
     * 返回当前环境语言
     */
    getLocale: () => string;
    /**
     * 设置当前环境语言
     * @param locale 环境语言
     */
    setLocale: (locale: string) => void;
}
//# sourceMappingURL=runtime.d.ts.map