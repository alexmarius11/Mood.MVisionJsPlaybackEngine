//import { fstat } from "fs";
//import { PlaybackInterfaces } from "./IPlaybackEngineConfigurator";
//var path = "file://internal/external/StartupConfig.json";
//var path = "file://developer/apps/usr/palm/applications/com.moodmedia.app.firstapp/StartupConfig.json";
//var path = "http://127.0.0.1:9080/external/usb/2/2.jpg";
define(["require", "exports", "../../app/js/native/nm_transversalservices/n_sdk_webos/cordova.webos.js", "../../app/js/native/nm_transversalservices/n_sdk_webos/storage.js"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rmod_filereader;
    (function (rmod_filereader) {
        //var path = "file://usb:2/StartupConfig.json";
        var FileReader = /** @class */ (function () {
            function FileReader() {
            }
            FileReader.prototype.ReadFile = function (filePath) {
                this.ReadFileInternal(filePath, function (result) {
                    console.log(result);
                });
            };
            FileReader.prototype.ReadFileInternal = function (filePath, callback) {
                var option = {
                    path: filePath,
                    position: 0,
                    encoding: "utf8"
                };
                function successCbReadFile(cbObject) {
                    callback(cbObject.data);
                }
                function failureCbReadFile(cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    //console.log("failed to read file " + errorCode + " " + errorText);
                }
                var storage = new Storage();
                storage.readFile(successCbReadFile, failureCbReadFile, option);
            };
            FileReader.prototype.ParseJsonFile = function (filePath) {
                this.ReadFileInternal(filePath, function (result) {
                    console.log("inside parse json file");
                    console.log(JSON.parse(result));
                });
            };
            return FileReader;
        }());
        rmod_filereader.FileReader = FileReader;
        //let fileReader = new FileReader();
        //var fileContent = fileReader.ReadFile(path);
        //fileReader.ParseJsonFile(path);
        //console.log(fileContent);
        function fileExists(filePath) {
            var option = {
                path: filePath,
                position: 0,
                encoding: "utf8"
            };
            var storage = new Storage();
            function successCbReadFile(cbObject) {
                if (cbObject.exists)
                    console.log("file exists");
                else
                    console.log("file is missing");
            }
            function failureCbReadFile(cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("file is missing " + errorCode + " " + errorText);
            }
            storage.exists(successCbReadFile, failureCbReadFile, option);
            getStorageInfo();
        }
        function listFilesTest(filepath) {
            var storage = new Storage();
            var list_onSuccessCb = function (cbObject) {
                var files = cbObject.files;
                for (var i = 0; i < files.length; ++i) {
                    console.log(files[i]);
                    console.log(files[i].path);
                }
            };
            var list_onFailureCb = function (cbObject) {
                console.log("Failed to get list files. Path : " + filepath);
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                var errorMessage = "Error Code [" + errorCode + "]: " + errorText;
                console.log(errorMessage);
            };
            var list_option = {
                path: filepath
            };
            storage.listFiles(list_onSuccessCb, list_onFailureCb, list_option);
        }
        function getStorageInfo() {
            var successCb = function (cbObject) {
                var free = cbObject.free;
                var total = cbObject.total;
                var used = cbObject.used;
                var externals = cbObject.externalMemory;
                console.log("Free: " + free + "kilobytes");
                console.log("Used: " + used + "kilobytes");
                console.log("Total: " + total + "kilobytes");
                for (var uri in externals) {
                    var external = externals[uri];
                    console.log("base uri: " + uri); // e.g. usb:1
                    console.log("Free: " + external.free + "kilobytes");
                    console.log("Used: " + external.used + "kilobytes");
                    console.log("Total: " + external.total + "kilobytes");
                }
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
            };
            var storage = new Storage();
            storage.getStorageInfo(successCb, failureCb);
        }
    })(rmod_filereader = exports.rmod_filereader || (exports.rmod_filereader = {}));
});
//# sourceMappingURL=FileReader.js.map