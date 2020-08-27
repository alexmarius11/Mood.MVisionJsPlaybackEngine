define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var R_Entity = /** @class */ (function () {
            //----------- constructor 
            function R_Entity() {
                this._entityId = 0;
                this._entityName = "";
                this._instanceId = 0;
                this._instanceName = "";
                this._aSrvContainer = null;
                this._aSrvLocator = null;
                this._aSrvLog = null;
            }
            //---------------------------
            R_Entity.prototype.getEntityId = function () {
                return this._entityId;
            };
            //---------------------------
            R_Entity.prototype.getEntityName = function () {
                return this._entityName;
            };
            //-----------------------------
            R_Entity.prototype.setEntityIdAndEntityName = function (entityId, entityName) {
                this._entityId = entityId;
                this._entityName = entityName;
            };
            //-----------------------------
            R_Entity.prototype.setEntityId = function (entityId) {
                this._entityId = entityId;
            };
            //------------------------------
            R_Entity.prototype.setEntityName = function (entityName) {
                this._entityName = entityName;
            };
            //------------------------------
            R_Entity.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                this._aSrvContainer = aSrvContainer;
                this._aSrvLocator = aSrvLocator;
                this._aSrvLog = aSrvLog;
                return 0;
            };
            //-------------------------------
            R_Entity.prototype.init = function (aConfig, error, context, callback) {
            };
            return R_Entity;
        }());
        rm_general.R_Entity = R_Entity;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_Entity.js.map