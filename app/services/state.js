/*
    The purpose of this class is to keep the 'state' of the application saved to a local file or cookie. This includes
    but is not limited to: configured platforms, their keys/secrets/credentials, and other related settings. The concept
    is to use the data stored here to return the application to the previous running state based on what was stored here
    in the prior session.
 */
var State = (function () {
    function State() {
        this.loaded = false;
        this.loaded = true;
    }
    State.prototype.getAll = function () {
        return;
    };
    State.prototype.setSelectedUser = function () {
        return;
    };
    State.prototype.getSelectedUser = function () {
        return;
    };
    return State;
})();
exports.State = State;
//# sourceMappingURL=state.js.map