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
    var R_FileInfo = (function (_super) {
        __extends(R_FileInfo, _super);
        function R_FileInfo() {
            var _this = _super.call(this) || this;
            _this._fileName = null;
            _this._path = null;
            _this._storage = null;
            _this._type = null;
            _this._size = 0;
            ;
            _this._creationDate = null;
            _this._lastModifiedDate = null;
            _this._lastAccessedDate = null;
            _this._urlFileName = null;
            _this._urlPath = null;
            _this._urlStorage = null;
            return _this;
        }
        R_FileInfo.prototype.reset = function () {
            this._fileName = null;
            this._path = null;
            this._storage = null;
            this._type = null;
            this._size = 0;
            ;
            this._creationDate = null;
            this._lastModifiedDate = null;
            this._lastAccessedDate = null;
            this._urlFileName = null;
            this._urlPath = null;
            this._urlStorage = null;
        };
        R_FileInfo.prototype.copy = function (src) {
            this._fileName = src.getName();
            this._path = src.getPath();
            this._storage = src.getStorage();
            this._type = src.getType();
            this._size = src.getSize();
            this._creationDate = src.getCreatedDate();
            this._lastModifiedDate = src.getLastModifiedDate();
            this._lastAccessedDate = src.getLastAccessedDate();
            this._urlFileName = src.getUrlName();
            this._urlPath = src.getUrlPath();
            this._urlStorage = src.getUrlStorage();
            return 0;
        };
        R_FileInfo.prototype.setName = function (fileName) {
            this._fileName = fileName;
        };
        R_FileInfo.prototype.getName = function () {
            return this._fileName;
        };
        R_FileInfo.prototype.getFullName = function () {
            return this._storage + this._path + this._fileName;
        };
        R_FileInfo.prototype.setPath = function (filePath) {
            this._path = filePath;
        };
        R_FileInfo.prototype.getPath = function () {
            return this._path;
        };
        R_FileInfo.prototype.getFullPath = function () {
            return this._storage + this._path;
        };
        R_FileInfo.prototype.setStorage = function (storage) {
            this._storage = storage;
        };
        R_FileInfo.prototype.getStorage = function () {
            return this._storage;
        };
        R_FileInfo.prototype.setType = function (fileType) {
            this._type = fileType;
        };
        R_FileInfo.prototype.getType = function () {
            return this._type;
        };
        R_FileInfo.prototype.setSize = function (size) {
            this._size = size;
        };
        R_FileInfo.prototype.getSize = function () {
            return this._size;
        };
        R_FileInfo.prototype.setCreatedDate = function (fileCreationDate) {
            this._creationDate = fileCreationDate;
        };
        R_FileInfo.prototype.getCreatedDate = function () {
            return this._creationDate;
        };
        R_FileInfo.prototype.setLastModifiedDate = function (lastModifiedDate) {
            this._lastModifiedDate = lastModifiedDate;
        };
        R_FileInfo.prototype.getLastModifiedDate = function () {
            return this._lastModifiedDate;
        };
        R_FileInfo.prototype.setLastAccessedDate = function (lastAccessedDate) {
            this._lastAccessedDate = lastAccessedDate;
        };
        R_FileInfo.prototype.getLastAccessedDate = function () {
            return this._lastAccessedDate;
        };
        R_FileInfo.prototype.setUrlName = function (urlFileName) {
            this._urlFileName = urlFileName;
        };
        R_FileInfo.prototype.getUrlName = function () {
            return this._urlFileName;
        };
        R_FileInfo.prototype.setUrlPath = function (urlPath) {
            this._urlPath = urlPath;
        };
        R_FileInfo.prototype.getUrlPath = function () {
            return this._urlPath;
        };
        R_FileInfo.prototype.setUrlStorage = function (urlStorage) {
            this._urlStorage = urlStorage;
        };
        R_FileInfo.prototype.getUrlStorage = function () {
            return this._urlStorage;
        };
        R_FileInfo.prototype.getFullUrlName = function () {
            return this._urlStorage + this._urlPath + this._urlFileName;
        };
        return R_FileInfo;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_FileInfo = R_FileInfo;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_FileInfo.js.map