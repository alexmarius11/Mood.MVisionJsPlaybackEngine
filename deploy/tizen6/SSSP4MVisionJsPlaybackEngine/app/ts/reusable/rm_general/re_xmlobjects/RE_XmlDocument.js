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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RE_XmlDocument = /** @class */ (function (_super) {
            __extends(RE_XmlDocument, _super);
            //----------- constructor 
            function RE_XmlDocument() {
                var _this = _super.call(this) || this;
                _this._nativeXmlDocument = null;
                return _this;
            }
            //-----------------------------
            RE_XmlDocument.prototype.setNativeXmlDocument = function (nativeXmlObject) {
                this._nativeXmlDocument = nativeXmlObject;
            };
            //-----------------------------
            RE_XmlDocument.prototype.getNativeXmlDocument = function () {
                return this._nativeXmlDocument;
            };
            return RE_XmlDocument;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.RE_XmlDocument = RE_XmlDocument;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_XmlDocument.js.map