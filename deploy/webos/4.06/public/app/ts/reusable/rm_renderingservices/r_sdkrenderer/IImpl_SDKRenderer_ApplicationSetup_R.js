define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var IImpl_SDKRenderer_ApplicationSetup_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDKRenderer_ApplicationSetup_R(owner) {
                this._owner = owner;
            }
            //---------------------------------------------------------------
            IImpl_SDKRenderer_ApplicationSetup_R.prototype.render_home = function () {
                this.render_mainmenu(null);
            };
            //---------------------------------------------------------------
            IImpl_SDKRenderer_ApplicationSetup_R.prototype.render_mainmenu = function (context) {
                var storageName = "";
                var folderName = "";
                document.getElementById("sdk.filesystem-renderer.mainmenu").innerHTML
                    =
                        '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFile(\'' + storageName + '\',\'' + folderName + '\');">New File</button>'
                            + '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFolder(\'' + storageName + '\',\'' + folderName + '\');">New Folder</button>';
            };
            //---------------------------------------------------------------
            IImpl_SDKRenderer_ApplicationSetup_R.prototype.action_eraseAll = function () {
            };
            //---------------------------------------------------------------
            IImpl_SDKRenderer_ApplicationSetup_R.prototype.action_eraseAllOpenDialogPanels = function () {
            };
            return IImpl_SDKRenderer_ApplicationSetup_R;
        }());
        rm_renderingservices.IImpl_SDKRenderer_ApplicationSetup_R = IImpl_SDKRenderer_ApplicationSetup_R;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=IImpl_SDKRenderer_ApplicationSetup_R.js.map