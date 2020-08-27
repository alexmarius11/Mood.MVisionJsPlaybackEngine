define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var IImpl_LogRenderer_LogConfig_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_LogRenderer_LogConfig_R(owner) {
                this._owner = owner;
            }
            //---------------------------------------------------------------
            IImpl_LogRenderer_LogConfig_R.prototype.setFileInfo = function (fileInfo, fileUrlInfo) {
                this._owner.setFileInfo(fileInfo, fileUrlInfo);
            };
            //---------------------------------------------------------------
            IImpl_LogRenderer_LogConfig_R.prototype.render_home = function () {
                this.render_mainmenu(null);
            };
            //---------------------------------------------------------------
            IImpl_LogRenderer_LogConfig_R.prototype.render_mainmenu = function (context) {
                var storageName = "";
                var folderName = "";
                document.getElementById("sdk.filesystem-renderer.mainmenu").innerHTML
                    =
                        '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFile(\'' + storageName + '\',\'' + folderName + '\');">New File</button>'
                            + '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFolder(\'' + storageName + '\',\'' + folderName + '\');">New Folder</button>';
            };
            //---------------------------------------------------------------
            IImpl_LogRenderer_LogConfig_R.prototype.action_eraseAll = function () {
            };
            //---------------------------------------------------------------
            IImpl_LogRenderer_LogConfig_R.prototype.action_eraseAllOpenDialogPanels = function () {
            };
            return IImpl_LogRenderer_LogConfig_R;
        }());
        rm_renderingservices.IImpl_LogRenderer_LogConfig_R = IImpl_LogRenderer_LogConfig_R;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=IImpl_LogRenderer_LogConfig_R.js.map