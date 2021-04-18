class Plugin {
    ComplianceType: string;
    BlockingEnabled: boolean;
    optOutExternalLink: string;
}
export class CookieCategory {
    CategoyHeading: string;
    IsMandatory: boolean;
    CategoyText: string;
    PluginList: Array<Plugin>;
}
