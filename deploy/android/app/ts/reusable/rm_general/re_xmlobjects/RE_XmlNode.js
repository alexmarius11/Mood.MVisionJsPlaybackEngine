"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var RE_XmlNode = (function (_super) {
        __extends(RE_XmlNode, _super);
        function RE_XmlNode() {
            var _this = _super.call(this) || this;
            _this._nativeXmlNode = null;
            return _this;
        }
        RE_XmlNode.prototype.setNativeXmlNode = function (nativeXmlNode) {
            this._nativeXmlNode = nativeXmlNode;
        };
        RE_XmlNode.prototype.getNativeXmlNode = function () {
            return this._nativeXmlNode;
        };
        return RE_XmlNode;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.RE_XmlNode = RE_XmlNode;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_XmlNode.js.map