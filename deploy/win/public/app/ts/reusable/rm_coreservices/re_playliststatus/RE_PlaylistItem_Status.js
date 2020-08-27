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
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_Status = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_Status, _super);
            //----------------
            function RE_PlaylistItem_Status() {
                var _this = _super.call(this) || this;
                _this._diagram = null;
                _this._containerDiagram = null;
                _this._statusName = "";
                _this._debug = false;
                return _this;
            }
            //-----------------------
            RE_PlaylistItem_Status.prototype.reset = function () {
            };
            //-----------------------
            RE_PlaylistItem_Status.prototype.reset2 = function () {
            };
            //---------------------------
            RE_PlaylistItem_Status.prototype.getStatusName = function () {
                return this._statusName;
            };
            //------------------------
            RE_PlaylistItem_Status.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                return 0;
            };
            //--------------------
            // set/get properties
            //--------------------
            //-----------------------
            RE_PlaylistItem_Status.prototype.setDiagram = function (diagram) {
                this._diagram = diagram;
            };
            //----------------
            RE_PlaylistItem_Status.prototype.getDiagram = function () {
                return this._diagram;
            };
            //----------------
            RE_PlaylistItem_Status.prototype.getContainerDiagram = function () {
                if (this._diagram.getOwner().isContainer())
                    return this._diagram;
                return null;
            };
            //---------------------
            RE_PlaylistItem_Status.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            };
            //---------------------
            RE_PlaylistItem_Status.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            };
            //---------------------
            RE_PlaylistItem_Status.prototype.postEvent = function (eventId, receiver, targetAddress, iCrtTargetIdx, eventQueue, error, context, callback) {
                var aEvent = this._aSrvLocator._iEntityCreation.createDefaultEvent(error);
                aEvent.setReceiver(receiver);
                aEvent.setEventId(eventId);
                aEvent.setTargetAddress(targetAddress);
                aEvent.setCrtTargetIdx(iCrtTargetIdx);
                this.getDiagram().prepareEvent(aEvent, eventQueue, error, context, callback);
                eventQueue.push(aEvent);
            };
            //---------------------
            RE_PlaylistItem_Status.prototype.createEvent = function (eventId, receiver, targetAddress, iCrtTargetIdx, eventQueue, error, context, callback) {
                var aEvent = this._aSrvLocator._iEntityCreation.createDefaultEvent(error);
                aEvent.setReceiver(receiver);
                aEvent.setEventId(eventId);
                aEvent.setTargetAddress(targetAddress);
                aEvent.setCrtTargetIdx(iCrtTargetIdx);
                this.getDiagram().prepareEvent(aEvent, eventQueue, error, context, callback);
                //eventQueue.push(aEvent);
                return aEvent;
            };
            //======================
            RE_PlaylistItem_Status.prototype.ignoreEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (callback != null) {
                    if (error != null) {
                        context.setError(error);
                        //--- to do logError(error);
                    }
                    context.setError(error);
                    callback(context);
                }
            };
            //======================
            RE_PlaylistItem_Status.prototype.returnWithCallback = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (callback != null) {
                    if (error != null) {
                        context.setError(error);
                        //--- to do logError(error);
                    }
                    context.setError(error);
                    callback(context);
                }
            };
            //----------------------------------
            RE_PlaylistItem_Status.prototype.formatDate = function (date) {
                var year = date.getFullYear(), month = date.getMonth() + 1, // months are zero indexed
                day = date.getDate(), hour = date.getHours(), minute = date.getMinutes(), second = date.getSeconds(), hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
                minuteFormatted = minute < 10 ? "0" + minute : minute, secondsFormatted = second < 10 ? "0" + second : second, morning = hour < 12 ? "am" : "pm";
                return month + "/" + day + "/" + year + " " + hourFormatted + ":" +
                    minuteFormatted + ":" + secondsFormatted + morning;
            };
            //------------------------------------------------------
            RE_PlaylistItem_Status.prototype.rpad = function (inpString, padString, length) {
                var res = inpString;
                while (res.length < length)
                    res = res + padString;
                return res;
            };
            //------------------------
            RE_PlaylistItem_Status.prototype.traceString = function () {
                var rzParent = this.getDiagram().getFirstParentWithARenderingZone();
                var str2 = null;
                if (rzParent != null) {
                    str2 = rzParent.getPlaylistItemTypeName()
                        + " " + rzParent.getLogic().getOwnerIdxAsChild()
                        + " " + rzParent.getPlaylistItemId()
                        + " \"" + rzParent.getPlaylistItemName() + "\"";
                }
                var str1 = this.formatDate(new Date()) + " -  " + this.getStatusName()
                    + " " + this.rpad(this.getDiagram().getOwner().getPlaylistItemTypeName(), " ", 20)
                    + " " + this.getDiagram().getOwner().getLogic().getOwnerIdxAsChild()
                    + " " + this.getDiagram().getOwner().getPlaylistItemId()
                    + " " + this.rpad("\"" + this.getDiagram().getOwner().getPlaylistItemName() + "\"", " ", 32);
                if (str2 != null)
                    return str1 + " -- in -- " + str2;
                return str1;
            };
            //------------------------
            RE_PlaylistItem_Status.prototype.trace = function (traceId, selectId, prefixMessage, sufixMessage) {
                if (this._debug == true) {
                    if (traceId == 1)
                        return this.trace_01(traceId, selectId, prefixMessage, sufixMessage);
                }
            };
            RE_PlaylistItem_Status.prototype.trace_01 = function (traceId, selectId, prefixMessage, sufixMessage) {
                var str1 = this.formatDate(new Date()) + " -  " + prefixMessage + " -  " //+ this.getStatusName() 
                    + " " + this.rpad(this.getDiagram().getOwner().getPlaylistItemTypeName(), " ", 20)
                    + " " + this.getDiagram().getOwner().getLogic().getOwnerIdxAsChild()
                    + " " + this.getDiagram().getOwner().getPlaylistItemId()
                    + " " + this.rpad("\"" + this.getDiagram().getOwner().getPlaylistItemName() + "\"", " ", 32) + " -  " + sufixMessage;
                console.log(str1);
                //var htm:HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById(selectId);
                //htm.innerHTML = str1 + "\r\n" + htm.innerHTML; 
            };
            //------------------------
            RE_PlaylistItem_Status.prototype.traceAll = function (selectId) {
                this.traceInListBox(selectId);
            };
            //------------------------
            RE_PlaylistItem_Status.prototype.traceInListBox = function (selectId) {
                if (this._debug == true) {
                    console.log(this.traceString());
                    //var htm:HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById(selectId);
                    //htm.innerHTML = this.traceString() + "\r\n" + htm.innerHTML; 
                }
            };
            return RE_PlaylistItem_Status;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_coreservices.RE_PlaylistItem_Status = RE_PlaylistItem_Status;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_Status.js.map