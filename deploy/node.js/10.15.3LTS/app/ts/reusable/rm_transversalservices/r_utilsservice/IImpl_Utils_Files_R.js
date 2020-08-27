"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_Utils_Files_R = (function () {
        function IImpl_Utils_Files_R(owner) {
            this._owner = owner;
        }
        IImpl_Utils_Files_R.prototype.getFileUrl = function (fileStorage, fileFolder, fileName, startFolder, startUrlFolder) {
            var fileUrl = "";
            fileUrl = startUrlFolder.getStorage() + fileFolder + fileName;
            return fileUrl;
        };
        IImpl_Utils_Files_R.prototype.formatFileSize = function (pBytes, pDigits, pUnits) {
            if (isNaN(pBytes))
                return "undefined";
            if (pBytes == 0)
                return '0 Bytes';
            if (pBytes == 1)
                return '1 Byte';
            if (pBytes == -1)
                return '-1 Byte';
            var bytes = Math.abs(pBytes);
            if (pUnits && pUnits.toLowerCase() && pUnits.toLowerCase() == 'si') {
                var orderOfMagnitude = Math.pow(10, 3);
                var abbreviations = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            }
            else {
                var orderOfMagnitude = Math.pow(2, 10);
                var abbreviations = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            }
            var i = Math.floor(Math.log(bytes) / Math.log(orderOfMagnitude));
            var result = (bytes / Math.pow(orderOfMagnitude, i));
            if (pBytes < 0) {
                result *= -1;
            }
            if (result >= 99.995 || i == 0) {
                return result.toFixed(0) + ' ' + abbreviations[i];
            }
            else {
                return result.toFixed(pDigits) + ' ' + abbreviations[i];
            }
        };
        IImpl_Utils_Files_R.prototype.addSlashToFolderNameIfNeeded = function (folderName) {
            if (folderName === null)
                return folderName;
            if (folderName.length == 0)
                return "";
            if (folderName == "/")
                return folderName;
            if (folderName.charAt(folderName.length - 1) == "/")
                return folderName;
            var folderNameWithSlash = folderName + "/";
            return folderNameWithSlash;
        };
        IImpl_Utils_Files_R.prototype.getFileExtension = function (fileName) {
            if (fileName === null)
                return "";
            if (fileName.length == 0)
                return "";
            var dotIdx = fileName.lastIndexOf(".");
            if (dotIdx == -1)
                return "";
            var extension = fileName.substr(dotIdx, fileName.length - dotIdx);
            if (extension == fileName)
                return "";
            return extension;
        };
        IImpl_Utils_Files_R.prototype.getFileContentType = function (fileExt) {
            if (fileExt === null)
                return "text?";
            if (fileExt.length == 0)
                return "text?";
            var lFileExt = fileExt.toLowerCase();
            if (lFileExt == ".png")
                return "image";
            if (lFileExt == ".gif")
                return "image";
            if (lFileExt == ".jpg")
                return "image";
            if (lFileExt == ".jpeg")
                return "image";
            if (lFileExt == ".tiff")
                return "image";
            if (lFileExt == ".tif")
                return "image";
            if (lFileExt == ".bmp")
                return "image";
            if (lFileExt == ".mp4")
                return "video";
            if (lFileExt == ".mkv")
                return "video";
            if (lFileExt == ".mp3")
                return "audio";
            if (lFileExt == ".m3u8")
                return "videostream";
            if (lFileExt == ".m3u")
                return "stream";
            if (lFileExt == ".js")
                return "javascript";
            if (lFileExt == ".json")
                return "json";
            if (lFileExt == ".mp3")
                return "audio";
            if (lFileExt == ".audio")
                return "audio";
            if (lFileExt == ".zip")
                return "archive";
            if (lFileExt == ".gzip")
                return "archive";
            if (lFileExt == ".rar")
                return "archive";
            if (lFileExt == ".exe")
                return "exe";
            if (lFileExt == ".dll")
                return "binary";
            if (lFileExt == ".bin")
                return "binary";
            if (lFileExt == ".so")
                return "binary";
            if (lFileExt == ".sys")
                return "binary";
            if (lFileExt == ".doc")
                return "msdoc";
            if (lFileExt == ".docx")
                return "msdoc";
            if (lFileExt == ".xls")
                return "msexcel";
            if (lFileExt == ".xlsx")
                return "msexcel";
            if (lFileExt == ".pdf")
                return "pdf";
            if (lFileExt == ".csv")
                return "csv";
            return "";
        };
        IImpl_Utils_Files_R.prototype.getParentFolderName = function (folderName) {
            if (folderName === null)
                return "";
            if (folderName.length == 0)
                return "";
            var folderNameWithoutEndSlash = "";
            if (folderName.charAt(folderName.length - 1) == "/")
                folderNameWithoutEndSlash = folderName.substr(0, folderName.length - 1);
            else
                folderNameWithoutEndSlash = folderName;
            if (folderNameWithoutEndSlash == "")
                return "";
            var slashIdx = folderNameWithoutEndSlash.lastIndexOf("/");
            if (slashIdx == -1)
                return "";
            var parentFolderName = folderNameWithoutEndSlash.substr(0, slashIdx);
            if (parentFolderName == folderNameWithoutEndSlash)
                return "";
            return parentFolderName;
        };
        IImpl_Utils_Files_R.prototype.readFileFromUrl = function (urlStorageName, urlFolderName, urlFileName, localStorageName, localFolderName, localFileName, error, context, callback) {
            var strFileUrl = urlStorageName + urlFolderName + urlFileName;
            try {
                var xhttp = new XMLHttpRequest();
                var self = this;
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            var fileContent = xhttp.responseText;
                            context.setResult(fileContent);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                        else {
                        }
                    }
                };
                xhttp.onerror = function () {
                    console.log('Error 7702: error getting xml file content of the file ' + strFileUrl);
                    context.setError(error);
                    context.setObjectResult(null);
                    if (context.getError() != null)
                        context.getError().setError(7702, 'Error reading content of the file ' + strFileUrl);
                    if (callback != null)
                        callback(context);
                    return;
                };
                xhttp.open("GET", strFileUrl, true);
                xhttp.send();
            }
            catch (e) {
                console.log('Error 7701. Error catching reading content of the file ' + strFileUrl);
                context.setError(error);
                context.setObjectResult(null);
                if (context.getError() != null)
                    context.getError().setError(7701, 'Error catching reading content of the file ' + strFileUrl);
                if (callback != null)
                    callback(context);
                return;
            }
        };
        return IImpl_Utils_Files_R;
    }());
    rm_transversalservices.IImpl_Utils_Files_R = IImpl_Utils_Files_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_Utils_Files_R.js.map