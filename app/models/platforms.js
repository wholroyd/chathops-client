var Platforms;
(function (Platforms) {
    var Platform = (function () {
        function Platform(type, name, path, usernameOrKey, passwordOrSecret) {
            this.type = type;
            this.name = name;
            this.path = path;
            this.usernameOrKey = usernameOrKey;
            this.passwordOrSecret = passwordOrSecret;
        }
        Platform.prototype.setToken = function (token, tokenRefresh, tokenExpiration) {
            this.token = token;
            this.tokenRefresh = tokenRefresh;
            this.tokenExpiration = tokenExpiration;
        };
        return Platform;
    })();
    Platforms.Platform = Platform;
    (function (PlatformType) {
        PlatformType[PlatformType["Slack"] = 0] = "Slack";
        PlatformType[PlatformType["Gitter"] = 1] = "Gitter";
        PlatformType[PlatformType["FlowDock"] = 2] = "FlowDock";
        PlatformType[PlatformType["HipChat"] = 3] = "HipChat";
        PlatformType[PlatformType["Jabbr"] = 4] = "Jabbr";
        PlatformType[PlatformType["SocialText"] = 5] = "SocialText";
    })(Platforms.PlatformType || (Platforms.PlatformType = {}));
    var PlatformType = Platforms.PlatformType;
})(Platforms || (Platforms = {}));
//# sourceMappingURL=platforms.js.map