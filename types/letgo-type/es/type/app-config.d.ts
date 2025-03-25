import { IPublicTypeAppLayout, IPublicTypeAppTheme } from '..';
export interface IPublicTypeAppConfig {
    /**
     * 默认语言配置，不填则为 navigator.language
     */
    defaultLocale?: string;
    sdkVersion?: string;
    historyMode?: string;
    targetRootID?: string;
    layout?: IPublicTypeAppLayout;
    theme?: IPublicTypeAppTheme;
    [key: string]: any;
}
//# sourceMappingURL=app-config.d.ts.map