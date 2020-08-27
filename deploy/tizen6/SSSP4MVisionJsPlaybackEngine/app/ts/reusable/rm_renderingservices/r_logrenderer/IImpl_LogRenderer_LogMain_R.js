define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var IImpl_LogRenderer_LogMain_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_LogRenderer_LogMain_R(owner) {
                this._owner = owner;
            }
            //-----------------------------
            //  Log file functions
            //-----------------------------
            //---------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.action_createLogRenderer = function () {
                var strDisplayLogRenderer = '<hr><center>' +
                    '<div>' +
                    '<div><h3>Display Log Messages' + //</div>'+
                    //'<div>' +
                    ' Log File: <input readonly id="idLogFileStorage" value="' + this._owner._fileInfo.getStorage() + '"/>'
                    + '<input readonly id="idLogFilePath" value="' + this._owner._fileInfo.getPath() + '"/>'
                    + '<input readonly id="idLogFileName" value="' + this._owner._fileInfo.getName() + '"/> </h3>' +
                    '</div>' +
                    '<div><textarea  id="log.renderer.msg" rows="10" cols="200" style="font-size: 10px;"> ' +
                    '</textarea></div>' +
                    //'<img width="30%" src=\'http://127.0.0.1:9080/external/usb/2/' + filePath + fileName + '\'>' +
                    '<div>' +
                    '<button type="button" onclick="javascript:global_SDKRenderer.eraseLogRenderer();">Clear Log Messages</button>' +
                    '<button type="button" onclick="javascript:global_SDKRenderer.hideLogRenderer();">Close Log Messages</button>' +
                    //'<button type="button" onclick="javascript:global_SDKRenderer.viewLogFile();">View Full Log File</button>' +
                    '</div>' +
                    '</div>' +
                    '</center></hr>';
                document.getElementById("log.renderer").innerHTML = strDisplayLogRenderer;
                //document.getElementById("log.renderer").style.visibility = "hidden";
            };
            //---------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.action_displayLogRenderer = function () {
                //document.getElementById("log.renderer").style.visibility = "visible";
                this.action_createLogRenderer();
            };
            //---------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.action_hideLogRenderer = function () {
                //document.getElementById("log.renderer").style.visibility = "hidden";
                document.getElementById("log.renderer").innerHTML = "";
            };
            //---------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.action_eraseLogRenderer = function () {
                document.getElementById("log.renderer.msg").innerHTML = "";
            };
            //---------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.action_viewLogFile = function () {
            };
            //---------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.action_closeViewLogFile = function () {
            };
            //---------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.render_notify_log = function (context) {
                var elemLogRendererMsg = document.getElementById("log.renderer.msg");
                if (elemLogRendererMsg !== null)
                    elemLogRendererMsg.innerHTML += context._result;
            };
            //---------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.action_log = function (logMsgLevel, logMsg, callback) {
                var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
                var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
                context.setRemoteCallback(false);
                this._owner._aTargetLog._iLogMain.log(logMsgLevel, logMsg, error, context, callback);
                //var callbackLog = function callbackLog(ctx)
                //{
                //var a = 1;
                //}
                //context.setRemoteCallback(true);
                //aLogService._iLogMain.log( 4, "clientNodejs"+ "\t\t" + "Starts System Configuration Application : ok", error, context, callbackLog);          
            };
            //---------------------------------------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.logStartAction = function (logMsg) {
                var errorLog = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
                var contextLog = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var owner = this._owner;
                var callbackLog = function callbackLog(ctx) {
                    owner._iLogMainRenderer.render_notify_log(ctx);
                };
                //contextLog.setRemoteCallback(true);
                owner._aTargetLog._iLogMain.log(4, logMsg, errorLog, contextLog, callbackLog);
            };
            //---------------------------------------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.logEndAction = function (logMsg, context) {
                var errorLog = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
                var contextLog = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var owner = this._owner;
                var callbackLog = function callbackLog(ctx) {
                    owner._iLogMainRenderer.render_notify_log(ctx);
                };
                //contextLog.setRemoteCallback(true);
                if ((context._error === null) || (context._error._id == 0))
                    owner._aTargetLog._iLogMain.log(4, logMsg + " - ok", errorLog, contextLog, callbackLog);
                else
                    owner._aTargetLog._iLogMain.log(2, logMsg + " - error : " + context._error._msg, errorLog, contextLog, callbackLog);
            };
            //=====================================================================
            //---------------------------------------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.render_home = function () {
                this.render_mainmenu(null);
            };
            //---------------------------------------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.render_mainmenu = function (context) {
                var storageName = "";
                var folderName = "";
                document.getElementById("sdk.filesystem-renderer.mainmenu").innerHTML
                    =
                        '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFile(\'' + storageName + '\',\'' + folderName + '\');">New File</button>'
                            + '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFolder(\'' + storageName + '\',\'' + folderName + '\');">New Folder</button>';
            };
            //---------------------------------------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.action_eraseAll = function () {
            };
            //---------------------------------------------------------------
            IImpl_LogRenderer_LogMain_R.prototype.action_eraseAllOpenDialogPanels = function () {
            };
            return IImpl_LogRenderer_LogMain_R;
        }());
        rm_renderingservices.IImpl_LogRenderer_LogMain_R = IImpl_LogRenderer_LogMain_R;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=IImpl_LogRenderer_LogMain_R.js.map