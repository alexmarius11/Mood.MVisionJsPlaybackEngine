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
var rm_renderingservices;
(function (rm_renderingservices) {
    var RE_HtmlZone = (function (_super) {
        __extends(RE_HtmlZone, _super);
        function RE_HtmlZone() {
            var _this = _super.call(this) || this;
            _this._iCrtIndex = 0;
            _this._isFree = true;
            _this._htmlZoneDiv = null;
            _this._htmlVideos = new Array(2);
            _this._htmlVideos[0] = null;
            _this._htmlVideos[1] = null;
            _this._htmlVideoStreams = new Array(2);
            _this._htmlVideoStreams[0] = null;
            _this._htmlVideoStreams[1] = null;
            _this._htmlImages = new Array(2);
            _this._htmlImages[0] = null;
            _this._htmlImages[1] = null;
            _this._htmlPages = new Array(2);
            _this._htmlPages[0] = null;
            _this._htmlPages[1] = null;
            _this._htmlRects = new Array(2);
            _this._htmlRects[0] = null;
            _this._htmlRects[1] = null;
            return _this;
        }
        RE_HtmlZone.prototype.reset = function () {
            this._iCrtIndex = 0;
            this._isFree = true;
        };
        RE_HtmlZone.prototype.isFree = function () {
            return this._isFree;
        };
        RE_HtmlZone.prototype.setIsFree = function (isFree) {
            this._isFree = isFree;
        };
        RE_HtmlZone.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            if ((error != null) && (error.isError())) {
                return 1;
            }
            return 0;
        };
        RE_HtmlZone.prototype.initHtml = function (divId, error) {
            this._htmlZoneDiv = document.getElementById(divId);
            this._htmlVideos[0] = document.getElementById(divId + "video01");
            this._htmlVideos[1] = document.getElementById(divId + "video02");
            this._htmlVideoStreams[0] = document.getElementById(divId + "stream01");
            this._htmlVideoStreams[1] = document.getElementById(divId + "stream02");
            this._htmlImages[0] = document.getElementById(divId + "img01");
            this._htmlImages[1] = document.getElementById(divId + "img02");
            this._htmlPages[0] = document.getElementById(divId + "html01");
            this._htmlPages[1] = document.getElementById(divId + "html02");
            this._htmlRects[0] = document.getElementById(divId + "rect01");
            this._htmlRects[1] = document.getElementById(divId + "rect02");
            ;
        };
        RE_HtmlZone.prototype.setHtmlZoneDiv = function (htmlZoneDiv) {
            this._htmlZoneDiv = htmlZoneDiv;
        };
        RE_HtmlZone.prototype.getHtmlZoneDiv = function () {
            return this._htmlZoneDiv;
        };
        RE_HtmlZone.prototype.setHtmlImage = function (idx, htmlImage) {
            this._htmlImages[idx] = htmlImage;
        };
        RE_HtmlZone.prototype.getHtmlImage = function (idx) {
            return this._htmlImages[idx];
        };
        RE_HtmlZone.prototype.setHtmlVideo = function (idx, htmlImage) {
            this._htmlVideos[idx] = htmlImage;
        };
        RE_HtmlZone.prototype.getHtmlVideo = function (idx) {
            return this._htmlVideos[idx];
        };
        RE_HtmlZone.prototype.setHtmlVideoStream = function (idx, htmlVideoStream) {
            this._htmlVideoStreams[idx] = htmlVideoStream;
        };
        RE_HtmlZone.prototype.getHtmlVideoStream = function (idx) {
            return this._htmlVideoStreams[idx];
        };
        RE_HtmlZone.prototype.setHtmlRect = function (idx, htmlRect) {
            this._htmlRects[idx] = htmlRect;
        };
        RE_HtmlZone.prototype.getHtmlRect = function (idx) {
            return this._htmlRects[idx];
        };
        RE_HtmlZone.prototype.setHtmlPage = function (idx, htmlPage) {
            this._htmlPages[idx] = htmlPage;
        };
        RE_HtmlZone.prototype.getHtmlPage = function (idx) {
            return this._htmlPages[idx];
        };
        return RE_HtmlZone;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_HtmlZone = RE_HtmlZone;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_HtmlZone.js.map