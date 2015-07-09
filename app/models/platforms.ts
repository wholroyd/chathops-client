export class Platform {

    type: PlatformType;
    name: string;
    path: string;

    usernameOrKey: string;
    passwordOrSecret: string;

    token: string;
    tokenRefresh: string;
    tokenExpiration: string;

    constructor(type: PlatformType, name: string, path: string, usernameOrKey: string, passwordOrSecret: string) {
        this.type = type;
        this.name = name;
        this.path = path;
        this.usernameOrKey = usernameOrKey;
        this.passwordOrSecret = passwordOrSecret;
    }

    public setToken(token: string, tokenRefresh: string, tokenExpiration: string) {
        this.token = token;
        this.tokenRefresh = tokenRefresh;
        this.tokenExpiration = tokenExpiration;
    }
}

export enum PlatformType {
    Slack,
    Gitter,
    FlowDock,
    HipChat,
    Jabbr,
    SocialText
}
