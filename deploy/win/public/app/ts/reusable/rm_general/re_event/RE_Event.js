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
define(["require", "exports", "../../../../../app/ts/abstract/am_general/ae_event/AE_EventRequestType", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, amGeneralEventRequestType, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RE_Event = /** @class */ (function (_super) {
            __extends(RE_Event, _super);
            //----------- constructor 
            function RE_Event() {
                var _this = _super.call(this) || this;
                _this._evtId = 0;
                _this._receiver = null;
                _this._sender = null;
                _this._crtTargetIdx = 0;
                _this._eventInfo = 0;
                _this._eventRequest = amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_None;
                return _this;
            }
            //-----------------------------
            RE_Event.prototype.copy = function (srcEvent) {
                //super.copy(srcEvent);
                this._evtId = srcEvent.getEventId();
                this._receiver = srcEvent.getReceiver();
                this._sender = srcEvent.getTargetAddress();
                this._crtTargetIdx = srcEvent.getCrtTargetIdx();
                this._eventInfo = srcEvent.getEventInfo();
                this._eventRequest = srcEvent.getEventRequest();
                return 0;
            };
            //---------------------------
            RE_Event.prototype.getEventId = function () {
                return this._evtId;
            };
            //-----------------------------
            RE_Event.prototype.setEventId = function (evtId) {
                this._evtId = evtId;
            };
            //---------------------------
            RE_Event.prototype.getTargetAddress = function () {
                return this._targetAddress;
            };
            //-----------------------------
            RE_Event.prototype.setTargetAddress = function (targetAddress) {
                this._targetAddress = targetAddress;
            };
            //---------------------------
            RE_Event.prototype.getCrtTargetIdx = function () {
                return this._crtTargetIdx;
                ;
            };
            //-----------------------------
            RE_Event.prototype.setCrtTargetIdx = function (crtTargetIdx) {
                this._crtTargetIdx = crtTargetIdx;
            };
            //---------------------------
            RE_Event.prototype.getReceiver = function () {
                return this._receiver;
            };
            //-----------------------------
            RE_Event.prototype.setReceiver = function (receiver) {
                this._receiver = receiver;
            };
            //---------------------------
            RE_Event.prototype.getSender = function () {
                return this._sender;
            };
            //-----------------------------
            RE_Event.prototype.setSender = function (sender) {
                this._sender = sender;
            };
            //------------------------------
            RE_Event.prototype.getEventInfo = function () {
                this._eventInfo;
            };
            //------------------------------------
            RE_Event.prototype.setEventInfo = function (eventInfo) {
                this._eventInfo = eventInfo;
            };
            //--------------------------------
            RE_Event.prototype.getEventRequest = function () {
                return this._eventRequest;
            };
            //-------------------------------
            RE_Event.prototype.setEventRequest = function (eventRequest) {
                this._eventRequest = eventRequest;
            };
            return RE_Event;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.RE_Event = RE_Event;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_Event.js.map