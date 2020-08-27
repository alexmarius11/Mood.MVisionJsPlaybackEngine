"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var IImpl_SDKRenderer_FileSystem_R = (function () {
        function IImpl_SDKRenderer_FileSystem_R(owner) {
            this._owner = owner;
            this._startFolder = null;
            this._startUrlFolder = null;
            this._startUrlDomainFolder = null;
            this._aHardwareSettings = null;
            this._aOpeningHours = null;
        }
        IImpl_SDKRenderer_FileSystem_R.prototype.setStartFolder = function (startFolder, startUrlFolder, startUrlDomainFolder) {
            this._startFolder = startFolder;
            this._startUrlFolder = startUrlFolder;
            this._startUrlDomainFolder = startUrlDomainFolder;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_home = function () {
            this.render_mainmenu(this._startFolder.getStorage(), this._startFolder.getPath());
            this.action_getFileList(this._startFolder.getStorage(), this._startFolder.getPath());
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_allfilesystem = function (context) {
            this.render_mainmenu(context._objectResult._storage, context._objectResult._path);
            this.render_file_list(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_mainmenu = function (storageName, folderName) {
            document.getElementById("sdk.filesystem-renderer.mainmenu").innerHTML
                =
                    '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFile(\'' + storageName + '\',\'' + folderName + '\');">New File</button>'
                        + '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFolder(\'' + storageName + '\',\'' + folderName + '\');">New Folder</button>'
                        + '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayDownloadFile(\'' +
                        'https://sample-videos.com/img/Sample-jpg-image-200kb.jpg\',\'' + storageName + '\',\'' + folderName + '\',\'Sample-jpg-image-200kb.jpg\');">Download File</button>' +
                        '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayLogRenderer();">Display Log Messages</button>' +
                        '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayHardwareSettings();">Display HardwareSettings</button>' +
                        '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayOpeningHours();">Display OpeningHours</button>';
            ;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseAllOpenDialogPanels = function () {
            this.action_eraseDisplayNewFolder();
            this.action_eraseDisplayFile();
            this.action_eraseDisplayDeleteFile();
            this.action_eraseDisplayCopyFile();
            this.action_eraseDisplayMoveFile();
            this.action_eraseDisplayDownloadFile();
            this.action_eraseDisplayUploadFile();
            this.action_eraseDisplayUnzipFile();
            this.action_eraseDisplayZipFile();
            this.action_eraseDisplayDeleteFolder();
            this.action_eraseDisplayCopyFolder();
            this.action_eraseDisplayMoveFolder();
            this.action_eraseDisplayZipFolder();
            this.erase_display_imageFile();
            this.erase_display_videoFile();
            this.erase_display_streamFile();
            this.action_eraseDisplayComputeAndSaveShaFile();
            this.action_closeHardwareSettings();
            this.action_closeOpeningHours();
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_getFileList = function (storageName, folderName) {
            this.action_eraseAllOpenDialogPanels();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var folderName2 = this._owner._aUtilsService._iUtilsFiles.addSlashToFolderNameIfNeeded(folderName);
            this._owner._aSDKJsTV._iSDKFileSystem.getFileList2(storageName, folderName2, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_file_list = function (context) {
            console.log("ctx: ", context);
            var strFileSystem = "";
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var aDateTime = this._owner._aServiceLocator._iEntityCreation.createDefaultDateTime(error);
            var format = "dd/LL/yyyy HH:mm:ss";
            var locale = "default";
            var strCreationDate = "";
            var strFileContentType = "";
            strFileSystem += "<hr><center><table width='80%'>" +
                "<tr width='100%' >" +
                '<td width="4%"><b><input type="checkbox" value="" ng-model="FM.selectAll"></b></td>' +
                '<td width="4%"><b>Type</b></td>' +
                '<td width="20%"><b>Name</b></td>' +
                '<td width="4%"><b>Ext</b></td>' +
                '<td width="4%"><b>Content</b></td>' +
                '<td width="10%"><b>Size</b></td>' +
                '<td width="16%"><b>Creation Date</b></td>' +
                '<td width="4%"><b>Delete</b></td>' +
                '<td width="4%"><b>Copy</b></td>' +
                '<td width="4%"><b>Move</b></td>' +
                '<td width="4%"><b>Unzip</b></td>' +
                '<td width="4%"><b>Zip</b></td>' +
                '<td width="4%"><b>Upload</b></td>' +
                '<td width="4%"><b>Sha</b></td>' +
                '</tr>';
            var fList = context._arrayResult;
            var parentFolder = this._owner._aUtilsService._iUtilsFiles.getParentFolderName(context._objectResult._path);
            var strFileExt = "";
            strFileSystem += '<tr style="nth-child(even) {background: #CCC};nth-child(odd){background: #FFF}" width="100%" class="sortable" ng-repeat="file in FM.curFiles | orderBy:\'folder\'">' +
                '<td width="4%"><input type="checkbox" value="{{file.name}}" ng-model="file.selected"></td>' +
                '<td width="4%">' + 'folder' + '</td>' +
                '<td width="20%"><a href="javascript:global_SDKRenderer.displayFolderFileList(\'' + context._objectResult._storage + '\',\'' + parentFolder + '/\' )" >'
                + ' .. ' + '</a></td> ' +
                '<td width="4%"><small>' + strFileExt + '</small></td>' +
                '<td width="4%"><small>' + strFileContentType + '</small></td>' +
                '<td width="10%"><small>' + '0' + '</small></td>' +
                '<td width="16%">' + '</td>' +
                '<td width="4%">' + '</td>' +
                '<td width="4%">' + '</td>' +
                '<td width="4%">' + '</td>' +
                '<td width="4%">' + '</td>' +
                '<td width="4%">' + '</td>' +
                '<td width="4%">' + '</td>' +
                '<td width="4%">' + '</td>' +
                '</tr>';
            var displayDeleteCmd = "";
            var displayCopyCmd = "";
            var displayMoveCmd = "";
            var displayZipCmd = "";
            var displayUnzipCmd = "";
            var displayUploadCmd = "";
            var displayShaCmd = "";
            var fileSize = "";
            var displayCmd = "";
            for (var i = 0; i < fList.length; i++) {
                if (fList[i]._type == "file") {
                    strCreationDate = this._owner._aUtilsService._iUtilsDateTime.formatDateTimeFromISO(fList[i]._creationDate, format, locale);
                    strFileExt = this._owner._aUtilsService._iUtilsFiles.getFileExtension(fList[i]._fileName);
                    strFileContentType = this._owner._aUtilsService._iUtilsFiles.getFileContentType(strFileExt);
                    ;
                    fileSize = this._owner._aUtilsService._iUtilsFiles.formatFileSize(fList[i]._size, 2, "iec");
                    if (strFileContentType == "image")
                        displayCmd = '<a href="javascript:global_SDKRenderer.start_display_imageFile(\'' + fList[i]._storage + '\',\'' + fList[i]._path + '\',\''
                            + fList[i]._fileName + '\' )" >' + fList[i]._fileName + '</a>';
                    else if (strFileContentType == "video")
                        displayCmd = '<a href="javascript:global_SDKRenderer.start_display_videoFile(\'' + fList[i]._storage + '\',\'' + fList[i]._path + '\',\''
                            + fList[i]._fileName + '\' )" >' + fList[i]._fileName + '</a>';
                    else if (strFileContentType == "stream")
                        displayCmd = '<a href="javascript:global_SDKRenderer.start_display_streamFile(\'' + fList[i]._storage + '\',\'' + fList[i]._path + '\',\''
                            + fList[i]._fileName + '\' )" >' + fList[i]._fileName + '</a>';
                    else
                        displayCmd = '<a href="javascript:global_SDKRenderer.displayFile(\'' + fList[i]._storage + '\',\'' + fList[i]._path + '\',\''
                            + fList[i]._fileName + '\' )" >' + fList[i]._fileName + '</a>';
                    displayDeleteCmd = '<a href="javascript:global_SDKRenderer.displayDeleteFile(\'' + fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\')">'
                        + '<small>Delete</small></a>';
                    displayCopyCmd = '<a href="javascript:global_SDKRenderer.displayCopyFile(\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\',\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '_copy\'' + ');" >' + '<small>Copy</small>' + '</a>';
                    displayMoveCmd = '<a href="javascript:global_SDKRenderer.displayMoveFile(\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\',\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '_move\'' + ');" >' + '<small>Move</small>' + '</a>';
                    displayZipCmd = '<a href="javascript:global_SDKRenderer.displayZipFile(\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\',\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '.zip\'' + ');" >' + '<small>Zip</small>' + '</a>';
                    displayUnzipCmd = '<a href="javascript:global_SDKRenderer.displayUnzipFile(\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\',\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\');" >' + '<small>Unzip</small>' + '</a>';
                    displayUploadCmd = '<a href="javascript:global_SDKRenderer.displayUploadFile(\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\',\'' +
                        "http://flash.ro/jsp/upload/UploadFile.jsp" + '\',\'' + '' + '\',\'' + '' + '\' );" >' + '<small>Upload</small>' + '</a>';
                    displayShaCmd = '<a href="javascript:global_SDKRenderer.displayComputeAndSaveShaFile(\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\',\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '.sha\'' + ');" >' + '<small>Sha</small>' + '</a>';
                    strFileSystem += '<tr width="100%" class="sortable" ng-repeat="file in FM.curFiles | orderBy:\'folder\'">' +
                        '<td width="4%"><input type="checkbox" value="{{file.name}}" ng-model="file.selected"></td>' +
                        '<td width="4%">' + fList[i]._type + '</td>' +
                        '<td width="20%">' + displayCmd + '</td> ' +
                        '<td width="4%"><small>' + strFileExt + '</small></td>' +
                        '<td width="4%"><small>' + strFileContentType + '</small></td>' +
                        '<td width="10%"><small>' + fileSize + '</small></td>' +
                        '<td width="16%"><small>' + strCreationDate + '</small></td>' +
                        '<td width="4%">' + displayDeleteCmd + '</td> ' +
                        '<td width="4%">' + displayCopyCmd + '</td> ' +
                        '<td width="4%">' + displayMoveCmd + '</td> ' +
                        '<td width="4%">' + displayUnzipCmd + '</td>' +
                        '<td width="4%">' + displayZipCmd + '</td> ' +
                        '<td width="4%">' + displayUploadCmd + '</td>' +
                        '<td width="4%">' + displayShaCmd + '</td>' +
                        '</tr>';
                }
                else {
                    strCreationDate = this._owner._aUtilsService._iUtilsDateTime.formatDateTimeFromISO(fList[i]._creationDate, format, locale);
                    strFileExt = "";
                    strFileContentType = "";
                    fileSize = fList[i]._size;
                    displayDeleteCmd = '<a href="javascript:global_SDKRenderer.displayDeleteFolder(\'' + fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '\' )" >'
                        + '<small>Delete</small>' + '</a>';
                    displayCopyCmd = '<a href="javascript:global_SDKRenderer.displayCopyFolder(\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '\',\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '_copy\'' + ')" >'
                        + '<small>Copy</small>' + '</a>';
                    displayMoveCmd = '<a href="javascript:global_SDKRenderer.displayMoveFolder(\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '\',\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '_move\'' + ')" >'
                        + '<small>Move</small>' + '</a>';
                    displayUnzipCmd = '';
                    displayZipCmd = '<a href="javascript:global_SDKRenderer.displayZipFolder(\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '\',\'' +
                        fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + 'archive.zip\'' + ')" >'
                        + '<small>Zip</small>' + '</a>';
                    displayUploadCmd = '';
                    displayShaCmd = '';
                    strFileSystem += '<tr width="100%" class="sortable" ng-repeat="file in FM.curFiles | orderBy:\'folder\'">' +
                        '<td width="4%"><input type="checkbox" value="{{file.name}}" ng-model="file.selected"></td>' +
                        '<td width="4%">' + fList[i]._type + '</td>' +
                        '<td width="20%"><a href="javascript:global_SDKRenderer.displayFolderFileList(\'' + fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '/\' )" >'
                        + fList[i]._fileName + '</a></td> ' +
                        '<td width="4%"><small>' + strFileExt + '</small></td>' +
                        '<td width="4%"><small>' + strFileContentType + '</small></td>' +
                        '<td width="10%"><small>' + fileSize + '</small></td>' +
                        '<td width="16%"><small>' + strCreationDate + '</small></td>' +
                        '<td width="4%">' + displayDeleteCmd + '</td> ' +
                        '<td width="4%">' + displayCopyCmd + '</td> ' +
                        '<td width="4%">' + displayMoveCmd + '</td> ' +
                        '<td width="4%">' + displayUnzipCmd + '</td>' +
                        '<td width="4%">' + displayZipCmd + '</td>' +
                        '<td width="4%">' + displayUploadCmd + '</td>' +
                        '<td width="4%">' + displayShaCmd + '</td>' +
                        '</tr>';
                }
            }
            strFileSystem +=
                "</table></center><hr>";
            var strCurrentFolder = '<center><h4>Current Folder: ' + context._objectResult._storage + context._objectResult._path + '</h4></center>';
            document.getElementById("sdk.filesystem-renderer.filelist").innerHTML = strCurrentFolder + strFileSystem;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayFile = function (storageName, folderName, fileName) {
            this.action_eraseAllOpenDialogPanels();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aSDKJsTV._iSDKFileSystem.readTextFile2(storageName, folderName, fileName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayNewFile = function (storageName, folderName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(storageName);
            fileInfo.setPath(folderName);
            fileInfo.setName("NewFile.txt");
            context.setResult("");
            context.setObjectResult(fileInfo);
            this.render_text_file(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_text_file = function (context) {
            var fileContent = context._result;
            var fileName = context._objectResult._fileName;
            var fileStorage = context._objectResult._storage;
            var filePath = context._objectResult._path;
            var strDisplayFile = '<hr><center>' +
                '<div>' +
                '<div><h3>Display File</h3></div>' +
                '<div>' +
                '<h4>File: <input id="idFileStorage" value="' + fileStorage + '"/>'
                + '<input id="idFilePath" value="' + filePath + '"/>'
                + '<input id="idFileName" value="' + fileName + '"/> </h4>' +
                '</div>' +
                '<div id="display-file-body"><textarea id="idFileContent" rows="12" cols="160">' +
                fileContent +
                '</textarea></div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayFile();">Close</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.saveFile(document.getElementById(\'idFileStorage\').value, document.getElementById(\'idFilePath\').value, document.getElementById(\'idFileName\').value, document.getElementById(\'idFileContent\').value  );">Save</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.displayfile").innerHTML = strDisplayFile;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayFile = function () {
            document.getElementById("sdk.filesystem-renderer.displayfile").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_saveFile = function (storageName, folderName, fileName, fileContent) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_saveFile\t\tstart save text file : " + storageName + folderName + fileName);
            this._owner._aSDKJsTV._iSDKFileSystem.writeTextFile2(storageName, folderName, fileName, fileContent, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_writeTextFile2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_saveFile\t\tend save text file : "
                + context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayDeleteFile = function (storageName, folderName, fileName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(storageName);
            fileInfo.setPath(folderName);
            fileInfo.setName(fileName);
            context.setResult("");
            context.setObjectResult(fileInfo);
            this.render_displayDeleteFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_displayDeleteFile = function (context) {
            var fileName = context._objectResult._fileName;
            var fileStorage = context._objectResult._storage;
            var filePath = context._objectResult._path;
            var strDisplayDeleteFile = '<hr><center>' +
                '<div>' +
                '<div><h3>Delete File</h3></div>' +
                '<div>' +
                '<h4>Are you sure to delete the file: <input readonly id="idDelFileStorage" value="' + fileStorage + '"/>'
                + '<input readonly id="idDelFilePath" value="' + filePath + '"/>'
                + '<input readonly id="idDelFileName" value="' + fileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayDeleteFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.deleteFile(document.getElementById(\'idDelFileStorage\').value, document.getElementById(\'idDelFilePath\').value, document.getElementById(\'idDelFileName\').value );">Delete File</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-deletefile").innerHTML = strDisplayDeleteFile;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayDeleteFile = function () {
            document.getElementById("sdk.filesystem-renderer.display-deletefile").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_deleteFile = function (storageName, folderName, fileName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_deletefile\t\tstart delete file : " + storageName + folderName + fileName);
            this._owner._aSDKJsTV._iSDKFileSystem.removeFile2(storageName, folderName, fileName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_deleteFile2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_deleteFile\t\tend delete file : "
                + context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayCopyFile = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(srcStorageName);
            fileInfo.setPath(srcFolderName);
            fileInfo.setName(srcFileName);
            context.setResult("");
            context.setObjectResult(fileInfo);
            var fileInfo2 = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo2.setStorage(dstStorageName);
            fileInfo2.setPath(dstFolderName);
            fileInfo2.setName(dstFileName);
            context.setObject2Result(fileInfo2);
            this.render_copyFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_copyFile = function (context) {
            var srcStorageName = context._objectResult._storage;
            var srcFolderName = context._objectResult._path;
            var srcFileName = context._objectResult._fileName;
            var dstStorageName = context._object2Result._storage;
            var dstFolderName = context._object2Result._path;
            var dstFileName = context._object2Result._fileName;
            var strDisplayCopyFile = '<hr><center>' +
                '<div>' +
                '<div><h3>Copy File</h3></div>' +
                '<div>' +
                '<h4>Source File: <input id="idCopyFileSrcStorageName" value="' + srcStorageName + '"/>'
                + '<input id="idCopyFileSrcFolderName"  value="' + srcFolderName + '"/>'
                + '<input id="idCopyFileSrcFileName"    value="' + srcFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<h4>Destination File: <input id="idCopyFileDstStorageName" value="' + dstStorageName + '"/>'
                + '<input id="idCopyFileDstFolderName" value="' + dstFolderName + '"/>'
                + '<input id="idCopyFileDstFileName"   value="' + dstFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayCopyFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.copyFile(' +
                'document.getElementById(\'idCopyFileSrcStorageName\').value, document.getElementById(\'idCopyFileSrcFolderName\').value, document.getElementById(\'idCopyFileSrcFileName\').value,' +
                'document.getElementById(\'idCopyFileDstStorageName\').value, document.getElementById(\'idCopyFileDstFolderName\').value, document.getElementById(\'idCopyFileDstFileName\').value' +
                ');">Copy File</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-copyfile").innerHTML = strDisplayCopyFile;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayCopyFile = function () {
            document.getElementById("sdk.filesystem-renderer.display-copyfile").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_copyFile = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_copyfile\t\tstart copy file : "
                + srcStorageName + srcFolderName + srcFileName + " to "
                + dstStorageName + dstFolderName + dstFileName);
            this._owner._aSDKJsTV._iSDKFileSystem.copyFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_copyFile2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_copyFile\t\tend copy file : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayMoveFile = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(srcStorageName);
            fileInfo.setPath(srcFolderName);
            fileInfo.setName(srcFileName);
            context.setResult("");
            context.setObjectResult(fileInfo);
            var fileInfo2 = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo2.setStorage(dstStorageName);
            fileInfo2.setPath(dstFolderName);
            fileInfo2.setName(dstFileName);
            context.setObject2Result(fileInfo2);
            this.render_moveFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_moveFile = function (context) {
            var srcStorageName = context._objectResult._storage;
            var srcFolderName = context._objectResult._path;
            var srcFileName = context._objectResult._fileName;
            var dstStorageName = context._object2Result._storage;
            var dstFolderName = context._object2Result._path;
            var dstFileName = context._object2Result._fileName;
            var strDisplayMoveFile = '<hr><center>' +
                '<div>' +
                '<div><h3>Move File</h3></div>' +
                '<div>' +
                '<h4>Source File: <input id="idMoveFileSrcStorageName" value="' + srcStorageName + '"/>'
                + '<input id="idMoveFileSrcFolderName"  value="' + srcFolderName + '"/>'
                + '<input id="idMoveFileSrcFileName"    value="' + srcFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<h4>Destination File: <input id="idMoveFileDstStorageName" value="' + dstStorageName + '"/>'
                + '<input id="idMoveFileDstFolderName" value="' + dstFolderName + '"/>'
                + '<input id="idMoveFileDstFileName"   value="' + dstFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayMoveFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.moveFile(' +
                'document.getElementById(\'idMoveFileSrcStorageName\').value, document.getElementById(\'idMoveFileSrcFolderName\').value, document.getElementById(\'idMoveFileSrcFileName\').value,' +
                'document.getElementById(\'idMoveFileDstStorageName\').value, document.getElementById(\'idMoveFileDstFolderName\').value, document.getElementById(\'idMoveFileDstFileName\').value' +
                ');">Move File</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-movefile").innerHTML = strDisplayMoveFile;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayMoveFile = function () {
            document.getElementById("sdk.filesystem-renderer.display-movefile").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_moveFile = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_movefile\t\tstart move file : "
                + srcStorageName + srcFolderName + srcFileName + " to "
                + dstStorageName + dstFolderName + dstFileName);
            this._owner._aSDKJsTV._iSDKFileSystem.moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_moveFile2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_moveFile\t\tend move file : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayDownloadFile = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(remoteUrlName);
            fileInfo.setPath("");
            fileInfo.setName("");
            context.setResult("");
            context.setObjectResult(fileInfo);
            var fileInfo2 = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo2.setStorage(dstStorageName);
            fileInfo2.setPath(dstFolderName);
            fileInfo2.setName(dstFileName);
            context.setObject2Result(fileInfo2);
            this.render_downloadFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_downloadFile = function (context) {
            var remoteUrlName = context._objectResult._storage;
            var dstStorageName = context._object2Result._storage;
            var dstFolderName = context._object2Result._path;
            var dstFileName = context._object2Result._fileName;
            var strDisplayDownloadFile = '<hr><center>' +
                '<div>' +
                '<div><h3>Download File</h3></div>' +
                '<div>' +
                '<h4>Url: <input id="idDownloadRemoteUrlName" value="' + remoteUrlName + '" size="60" maxlength="512"/></h4>' +
                '</div>' +
                '<div>' +
                '<h4>Destination File:' +
                '<input id="idDownloadDstStorageName" value="' + dstStorageName + '"/>'
                + '<input id="idDownloadDstFolderName" value="' + dstFolderName + '"/>'
                + '<input id="idDownloadDstFileName" value="' + dstFileName + '"/></h4>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayDownloadFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.downloadFile(' +
                'document.getElementById(\'idDownloadRemoteUrlName\').value, document.getElementById(\'idDownloadDstStorageName\').value,' +
                'document.getElementById(\'idDownloadDstFolderName\').value, document.getElementById(\'idDownloadDstFileName\').value);">Download File</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-downloadfile").innerHTML = strDisplayDownloadFile;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayDownloadFile = function () {
            document.getElementById("sdk.filesystem-renderer.display-downloadfile").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_downloadFile = function (srcUrlFullName, dstStorageName, dstFolderName, dstFileName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_downloadfile\t\tstart download file from: "
                + srcUrlFullName + " to "
                + dstStorageName + dstFolderName + dstFileName);
            this._owner._aSDKJsTV._iSDKFileSystem.downloadFile2(srcUrlFullName, dstStorageName, dstFolderName, dstFileName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_downloadFile2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_downloadFile\t\tend download file : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayUploadFile = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(srcStorageName);
            fileInfo.setPath(srcFolderName);
            fileInfo.setName(srcFileName);
            context.setResult("");
            context.setObjectResult(fileInfo);
            var fileInfo2 = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo2.setStorage(remoteUrlName);
            fileInfo2.setPath(remoteFolderName);
            fileInfo2.setName(remoteFileName);
            context.setObject2Result(fileInfo2);
            this.render_uploadFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_uploadFile = function (context) {
            var srcStorageName = context._objectResult._storage;
            var srcFolderName = context._objectResult._path;
            var srcFileName = context._objectResult._fileName;
            var remoteUrlName = context._object2Result._storage;
            var remoteFolderName = context._object2Result._path;
            var remoteFileName = context._object2Result._fileName;
            var strDisplayUploadFile = '<hr><center>' +
                '<div>' +
                '<div><h3>Upload File</h3></div>' +
                '<div>' +
                '<h4>Source File: <input id="idUploadFileSrcStorageName" value="' + srcStorageName + '"/>'
                + '<input id="idUploadFileSrcFolderName"  value="' + srcFolderName + '"/>'
                + '<input id="idUploadFileSrcFileName"    value="' + srcFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<h4>Destination Url: <input id="idUploadFileRemoteUrlName"    value="' + remoteUrlName + '"/>'
                + '<input id="idUploadFileRemoteFolderName" value="' + remoteFolderName + '"/>'
                + '<input id="idUploadFileRemoteFileName"   value="' + remoteFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayUploadFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.uploadFile(' +
                'document.getElementById(\'idUploadFileSrcStorageName\').value, document.getElementById(\'idUploadFileSrcFolderName\').value, document.getElementById(\'idUploadFileSrcFileName\').value,' +
                'document.getElementById(\'idUploadFileRemoteUrlName\').value, document.getElementById(\'idUploadFileRemoteFolderName\').value, document.getElementById(\'idUploadFileRemoteFileName\').value' +
                ');">Upload File</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-uploadfile").innerHTML = strDisplayUploadFile;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayUploadFile = function () {
            document.getElementById("sdk.filesystem-renderer.display-uploadfile").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_uploadFile = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_uploadfile\t\tstart upload file : "
                + srcStorageName + srcFolderName + srcFileName + " to "
                + remoteUrlName + " (" + remoteFolderName + "," + remoteFileName + ")");
            this._owner._aSDKJsTV._iSDKFileSystem.uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_uploadFile2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_uploadFile\t\tend upload file : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayUnzipFile = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(zipStorageName);
            fileInfo.setPath(zipFolderName);
            fileInfo.setName(zipFileName);
            context.setResult("");
            context.setObjectResult(fileInfo);
            var fileInfo2 = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo2.setStorage(unzipStorageName);
            fileInfo2.setPath(unzipFolderName);
            fileInfo2.setName("newunzipfolder");
            context.setObject2Result(fileInfo2);
            this.render_unzipFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_unzipFile = function (context) {
            var zipStorageName = context._objectResult._storage;
            var zipFolderName = context._objectResult._path;
            var zipFileName = context._objectResult._fileName;
            var dstStorageName = context._object2Result._storage;
            var dstFolderName = context._object2Result._path + context._object2Result._fileName;
            var strDisplayUnzipFile = '<hr><center>' +
                '<div>' +
                '<div><h3>Unzip File</h3></div>' +
                '<div>' +
                '<h4>Zip File: <input id="idUnzipFileZipStorageName" value="' + zipStorageName + '"/>'
                + '<input id="idUnzipFileZipFolderName"  value="' + zipFolderName + '"/>'
                + '<input id="idUnzipFileZipFileName"    value="' + zipFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<h4>Destination Folder: <input id="idUnzipFileDstStorageName" value="' + dstStorageName + '"/>' +
                '<input id="idUnzipFileDstFolderName" value="' + dstFolderName + '"/>' +
                '</h4>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayUnzipFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.unzipFile(' +
                'document.getElementById(\'idUnzipFileZipStorageName\').value, document.getElementById(\'idUnzipFileZipFolderName\').value, document.getElementById(\'idUnzipFileZipFileName\').value,' +
                'document.getElementById(\'idUnzipFileDstStorageName\').value, document.getElementById(\'idUnzipFileDstFolderName\').value' +
                ');">Unzip File</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-unzipfile").innerHTML = strDisplayUnzipFile;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayUnzipFile = function () {
            document.getElementById("sdk.filesystem-renderer.display-unzipfile").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_unzipFile = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_unzipfile\t\tstart unzip file : "
                + zipStorageName + zipFolderName + zipFileName + " to "
                + unzipStorageName + unzipFolderName);
            this._owner._aSDKJsTV._iSDKFileSystem.unzipFile2(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_unzipFile2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_unzipFile\t\tend unzip file : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayZipFile = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(storageName);
            fileInfo.setPath(folderName);
            fileInfo.setName(fileName);
            context.setResult("");
            context.setObjectResult(fileInfo);
            var fileInfo2 = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo2.setStorage(zipStorageName);
            fileInfo2.setPath(zipFolderName);
            fileInfo2.setName(zipFileName);
            context.setObject2Result(fileInfo2);
            this.render_zipFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_zipFile = function (context) {
            var srcStorageName = context._objectResult._storage;
            var srcFolderName = context._objectResult._path;
            var srcFileName = context._objectResult._fileName;
            var zipStorageName = context._object2Result._storage;
            var zipFolderName = context._object2Result._path;
            var zipFileName = context._object2Result._fileName;
            var strDisplayZipFile = '<hr><center>' +
                '<div>' +
                '<div><h3>Zip File</h3></div>' +
                '<div>' +
                '<h4>Source File: <input id="idZipFileSrcStorageName" value="' + srcStorageName + '"/>'
                + '<input id="idZipFileSrcFolderName"  value="' + srcFolderName + '"/>'
                + '<input id="idZipFileSrcFileName"    value="' + srcFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<h4>Zip File: <input id="idZipFileZipStorageName" value="' + zipStorageName + '"/>'
                + '<input id="idZipFileZipFolderName" value="' + zipFolderName + '"/>'
                + '<input id="idZipFileZipFileName"   value="' + zipFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayZipFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.zipFile(' +
                'document.getElementById(\'idZipFileSrcStorageName\').value, document.getElementById(\'idZipFileSrcFolderName\').value, document.getElementById(\'idZipFileSrcFileName\').value,' +
                'document.getElementById(\'idZipFileZipStorageName\').value, document.getElementById(\'idZipFileZipFolderName\').value, document.getElementById(\'idZipFileZipFileName\').value' +
                ');">Zip File</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-zipfile").innerHTML = strDisplayZipFile;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayZipFile = function () {
            document.getElementById("sdk.filesystem-renderer.display-zipfile").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_zipFile = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_zipfile\t\tstart zip file : "
                + storageName + folderName + fileName + " to "
                + zipStorageName + zipFolderName + zipFileName);
            this._owner._aSDKJsTV._iSDKFileSystem.zipFile2(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_zipFile2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_zipFile\t\tend zip file : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayNewFolder = function (storageName, folderName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(storageName);
            fileInfo.setPath(folderName + "NewFolder/");
            fileInfo.setName("");
            context.setResult("");
            context.setObjectResult(fileInfo);
            this.render_folder(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_folder = function (context) {
            var folderStorage = context._objectResult._storage;
            var folderPath = context._objectResult._path;
            var strDisplayFolder = '<hr><center>' +
                '<div>' +
                '<div><h3>Create Folder</h3></div>' +
                '<div>' +
                '<h4>Folder: <input id="idFolderStorage" value="' + folderStorage + '"/>' +
                '<input id="idFolderPath" value="' + folderPath + '"/>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayNewFolder();">Close</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.createFolder(document.getElementById(\'idFolderStorage\').value, document.getElementById(\'idFolderPath\').value);">Create Folder</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.displayfolder").innerHTML = strDisplayFolder;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayNewFolder = function () {
            document.getElementById("sdk.filesystem-renderer.displayfolder").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_createFolder = function (storageName, folderName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_createfolder\t\tstart create folder : "
                + storageName + folderName);
            this._owner._aSDKJsTV._iSDKFileSystem.createFolder2(storageName, folderName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_createFolder2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_createFolder\t\tend create folder : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayDeleteFolder = function (storageName, folderName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(storageName);
            fileInfo.setPath(folderName);
            fileInfo.setName("");
            context.setResult("");
            context.setObjectResult(fileInfo);
            this.render_deleteFolder(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_deleteFolder = function (context) {
            var folderStorage = context._objectResult._storage;
            var folderPath = context._objectResult._path;
            var strDeleteFolder = '<hr><center>' +
                '<div>' +
                '<div><h3>Delete Folder</h3></div>' +
                '<div>' +
                '<h4>Are you sure to delete Folder (and all its content) : <input readonly id="idDelFolderStorage" value="' + folderStorage + '"/>' +
                '<input readonly id="idDelFolderPath" value="' + folderPath + '"/>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayDeleteFolder();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.deleteFolder' +
                '(document.getElementById(\'idDelFolderStorage\').value, document.getElementById(\'idDelFolderPath\').value);">Delete Folder</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-deletefolder").innerHTML = strDeleteFolder;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayDeleteFolder = function () {
            document.getElementById("sdk.filesystem-renderer.display-deletefolder").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_deleteFolder = function (storageName, folderName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_deletefolder\t\tstart delete folder : "
                + storageName + folderName);
            this._owner._aSDKJsTV._iSDKFileSystem.deleteFolder2(storageName, folderName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_deleteFolder2 = function (context) {
            var parentFolder = this._owner._aUtilsService._iUtilsFiles.getParentFolderName(context._objectResult._path);
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_deleteFolder\t\tend delete folder : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, parentFolder);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayCopyFolder = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(srcStorageName);
            fileInfo.setPath(srcFolderName);
            fileInfo.setName("");
            context.setResult("");
            context.setObjectResult(fileInfo);
            var fileInfo2 = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo2.setStorage(dstStorageName);
            fileInfo2.setPath(dstFolderName);
            fileInfo2.setName("");
            context.setObject2Result(fileInfo2);
            this.render_copyFolder(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_copyFolder = function (context) {
            var srcStorageName = context._objectResult._storage;
            var srcFolderName = context._objectResult._path;
            var dstStorageName = context._object2Result._storage;
            var dstFolderName = context._object2Result._path;
            var strDisplayCopyFolder = '<hr><center>' +
                '<div>' +
                '<div><h3>Copy Folder</h3></div>' +
                '<div>' +
                '<h4>Source Folder: <input id="idCopyFolderSrcStorageName" value="' + srcStorageName + '"/>' +
                '<input id="idCopyFolderSrcFolderName"  value="' + srcFolderName + '"/>' +
                '</div>' +
                '<div>' +
                '<h4>Destination Folder: <input id="idCopyFolderDstStorageName" value="' + dstStorageName + '"/>' +
                '<input id="idCopyFolderDstFolderName" value="' + dstFolderName + '"/>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayCopyFolder();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.copyFolder(' +
                'document.getElementById(\'idCopyFolderSrcStorageName\').value, document.getElementById(\'idCopyFolderSrcFolderName\').value, ' +
                'document.getElementById(\'idCopyFolderDstStorageName\').value, document.getElementById(\'idCopyFolderDstFolderName\').value ' +
                ');">Copy Folder</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-copyfolder").innerHTML = strDisplayCopyFolder;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayCopyFolder = function () {
            document.getElementById("sdk.filesystem-renderer.display-copyfolder").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_copyFolder = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_copyfolder\t\tstart copy folder : "
                + srcStorageName + srcFolderName + " to "
                + dstStorageName + dstFolderName);
            this._owner._aSDKJsTV._iSDKFileSystem.copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_copyFolder2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_copyFolder\t\tend copy folder : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayMoveFolder = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(srcStorageName);
            fileInfo.setPath(srcFolderName);
            fileInfo.setName("");
            context.setResult("");
            context.setObjectResult(fileInfo);
            var fileInfo2 = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo2.setStorage(dstStorageName);
            fileInfo2.setPath(dstFolderName);
            fileInfo2.setName("");
            context.setObject2Result(fileInfo2);
            this.render_moveFolder(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_moveFolder = function (context) {
            var srcStorageName = context._objectResult._storage;
            var srcFolderName = context._objectResult._path;
            var dstStorageName = context._object2Result._storage;
            var dstFolderName = context._object2Result._path;
            var strDisplayMoveFolder = '<hr><center>' +
                '<div>' +
                '<div><h3>Move Folder</h3></div>' +
                '<div>' +
                '<h4>Source Folder: <input id="idMoveFolderSrcStorageName" value="' + srcStorageName + '"/>' +
                '<input id="idMoveFolderSrcFolderName"  value="' + srcFolderName + '"/>' +
                '</div>' +
                '<div>' +
                '<h4>Destination Folder: <input id="idMoveFolderDstStorageName" value="' + dstStorageName + '"/>' +
                '<input id="idMoveFolderDstFolderName" value="' + dstFolderName + '"/>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayMoveFolder();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.moveFolder(' +
                'document.getElementById(\'idMoveFolderSrcStorageName\').value, document.getElementById(\'idMoveFolderSrcFolderName\').value, ' +
                'document.getElementById(\'idMoveFolderDstStorageName\').value, document.getElementById(\'idMoveFolderDstFolderName\').value ' +
                ');">Move Folder</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-movefolder").innerHTML = strDisplayMoveFolder;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayMoveFolder = function () {
            document.getElementById("sdk.filesystem-renderer.display-movefolder").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_moveFolder = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_movefolder\t\tstart move folder : "
                + srcStorageName + srcFolderName + " to "
                + dstStorageName + dstFolderName);
            this._owner._aSDKJsTV._iSDKFileSystem.moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_moveFolder2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_moveFolder\t\tend move folder : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayZipFolder = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(storageName);
            fileInfo.setPath(folderName);
            fileInfo.setName("");
            context.setResult("");
            context.setObjectResult(fileInfo);
            var fileInfo2 = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo2.setStorage(zipStorageName);
            fileInfo2.setPath(zipFolderName);
            fileInfo2.setName(zipFileName);
            context.setObject2Result(fileInfo2);
            this.render_zipFolder(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_zipFolder = function (context) {
            var srcStorageName = context._objectResult._storage;
            var srcFolderName = context._objectResult._path;
            var zipStorageName = context._object2Result._storage;
            var zipFolderName = context._object2Result._path;
            var zipFileName = context._object2Result._fileName;
            var strDisplayZipFolder = '<hr><center>' +
                '<div>' +
                '<div><h3>Zip Folder</h3></div>' +
                '<div>' +
                '<h4>Source File: <input id="idZipFolderSrcStorageName" value="' + srcStorageName + '"/>'
                + '<input id="idZipFolderSrcFolderName"  value="' + srcFolderName + '"/></h4>' +
                '</div>' +
                '<div>' +
                '<h4>Zip File: <input id="idZipFolderZipStorageName" value="' + zipStorageName + '"/>'
                + '<input id="idZipFolderZipFolderName"  value="' + zipFolderName + '"/>'
                + '<input id="idZipFolderZipFileName"    value="' + zipFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayZipFolder();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.zipFolder(' +
                'document.getElementById(\'idZipFolderSrcStorageName\').value, document.getElementById(\'idZipFolderSrcFolderName\').value,' +
                'document.getElementById(\'idZipFolderZipStorageName\').value, document.getElementById(\'idZipFolderZipFolderName\').value, document.getElementById(\'idZipFolderZipFileName\').value' +
                ');">Zip Folder</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-zipfolder").innerHTML = strDisplayZipFolder;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayZipFolder = function () {
            document.getElementById("sdk.filesystem-renderer.display-zipfolder").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_zipFolder = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_zipfolder\t\tstart zip folder : "
                + storageName + folderName + " to "
                + zipStorageName + zipFolderName + zipFileName);
            this._owner._aSDKJsTV._iSDKFileSystem.zipFolder2(storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_zipFolder2 = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_zipFolder\t\tend zip folder : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.start_display_imageFile = function (imgStorageName, imgFolderName, imgFileName) {
            this.action_eraseAllOpenDialogPanels();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this.get_renderinginfo_imageFile(imgStorageName, imgFolderName, imgFileName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.get_renderinginfo_imageFile = function (imgStorageName, imgFolderName, imgFileName, error, context, callback) {
            var imgFileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            imgFileInfo.setStorage(imgStorageName);
            imgFileInfo.setPath(imgFolderName);
            imgFileInfo.setName(imgFileName);
            context.setObjectResult(imgFileInfo);
            this.generate_rendering_imageFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.generate_rendering_imageFile = function (context) {
            var storageName = context._objectResult._storage;
            var folderName = context._objectResult._path;
            var fileName = context._objectResult._fileName;
            var strImageUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
            var strDisplayImage = '<hr><center>' +
                '<div>' +
                '<div><h3>Display Image</h3></div>' +
                '<div>' +
                '<h4>File: <input readonly id="idImgStorageName" value="' + storageName + '"/>'
                + '<input readonly id="idImgPathName" value="' + folderName + '"/>'
                + '<input readonly id="idImgFileName" value="' + fileName + '"/> </h4>' +
                '</div>' +
                '<div id="displayimage">' +
                '<img width="50%" src=\'' + strImageUrl + '\'>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.erase_display_imageFile();">Close</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            context._result = strDisplayImage;
            this.do_display_imageFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.do_display_imageFile = function (context) {
            document.getElementById("sdk.filesystem-renderer.displayimage").innerHTML = context._result;
            var storageName = context._objectResult._storage;
            var folderName = context._objectResult._path;
            var fileName = context._objectResult._fileName;
            var strImageUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
            document.getElementById("sdk.filesystem-renderer.displayimage").innerHTML += strImageUrl;
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.do_displayImageFile\t\tstart display image file : "
                + storageName + folderName + fileName + " from url " + strImageUrl);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.erase_display_imageFile = function () {
            if (document.getElementById("sdk.filesystem-renderer.displayimage").innerHTML != "")
                this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.erase_display_imageFile\t\tend displaying image. ");
            document.getElementById("sdk.filesystem-renderer.displayimage").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.start_display_videoFile = function (imgStorageName, imgFolderName, imgFileName) {
            this.action_eraseAllOpenDialogPanels();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this.get_renderinginfo_videoFile(imgStorageName, imgFolderName, imgFileName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.get_renderinginfo_videoFile = function (imgStorageName, imgFolderName, imgFileName, error, context, callback) {
            var imgFileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            imgFileInfo.setStorage(imgStorageName);
            imgFileInfo.setPath(imgFolderName);
            imgFileInfo.setName(imgFileName);
            context.setObjectResult(imgFileInfo);
            this.generate_rendering_videoFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.generate_rendering_videoFile = function (context) {
            var storageName = context._objectResult._storage;
            var folderName = context._objectResult._path;
            var fileName = context._objectResult._fileName;
            var strVideoUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
            var strVideoSub = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlDomainFolder);
            strVideoSub = strVideoSub + ".vtt";
            var strVideoDisplay = '<hr><center>' +
                '<div>' +
                '<div><h3>Display Video</h3></div>' +
                '<div>' +
                '<h4>File: <input readonly id="idVideoStorageName" value="' + storageName + '"/>'
                + '<input readonly id="idVideoPathName" value="' + folderName + '"/>'
                + '<input readonly id="idVideoFileName" value="' + fileName + '"/> </h4>' +
                '</div>' +
                '<div id="zone_04">' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.erase_display_videoFile();">Close</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            context._result = strVideoDisplay;
            var video = document.getElementById("sdk.filesystem-renderer.video2");
            video.style.display = 'block';
            video.src = strVideoUrl;
            video.style.objectFit = 'fill';
            video.play();
            this.do_display_videoFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.do_display_videoFile = function (context) {
            document.getElementById("sdk.filesystem-renderer.displayvideo").innerHTML = context._result;
            var storageName = context._objectResult._storage;
            var folderName = context._objectResult._path;
            var fileName = context._objectResult._fileName;
            var strVideoUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
            document.getElementById("sdk.filesystem-renderer.displayvideo").innerHTML += "<a href='vlc://" + strVideoUrl + "'><center><small>" + strVideoUrl + "</small></center></a>";
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.do_displayVideoFile\t\tstart playing video file : "
                + storageName + folderName + fileName + " from url " + strVideoUrl);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.erase_display_videoFile = function () {
            if (document.getElementById("sdk.filesystem-renderer.displayvideo").innerHTML != "")
                this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.erase_display_videoFile\t\tend playing video. ");
            var crtVideoContainer = document.getElementById("sdk.filesystem-renderer.displayvideo");
            if (crtVideoContainer.innerHTML != "")
                document.getElementById("sdk.filesystem-renderer.displayvideo").innerHTML = "";
            var video = document.getElementById("sdk.filesystem-renderer.video2");
            if (video != null) {
                try {
                    video.pause();
                    video.style.display = 'none';
                    video.removeAttribute("src");
                    video.load();
                }
                catch (e) {
                }
            }
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.start_display_streamFile = function (imgStorageName, imgFolderName, imgFileName) {
            this.action_eraseAllOpenDialogPanels();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            this.get_renderinginfo_streamFile(imgStorageName, imgFolderName, imgFileName, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.get_renderinginfo_streamFile = function (imgStorageName, imgFolderName, imgFileName, error, context, callback) {
            var imgFileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            imgFileInfo.setStorage(imgStorageName);
            imgFileInfo.setPath(imgFolderName);
            imgFileInfo.setName(imgFileName);
            context.setObjectResult(imgFileInfo);
            this.generate_rendering_streamFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.generate_rendering_streamFile = function (context) {
            var storageName = context._objectResult._storage;
            var folderName = context._objectResult._path;
            var fileName = context._objectResult._fileName;
            var strStreamUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlDomainFolder);
            var strStreamSub = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlDomainFolder);
            strStreamSub = strStreamSub + ".vtt";
            var xhttp = new XMLHttpRequest();
            var self = this;
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var streamUrl = xhttp.responseText;
                    var strStreamDisplay = '<hr><center>' +
                        '<div>' +
                        '<div><h3>Display Stream</h3></div>' +
                        '<div>' +
                        '<h4>File: <input readonly id="idStreamStorageName" value="' + storageName + '"/>'
                        + '<input readonly id="idStreamPathName" value="' + folderName + '"/>'
                        + '<input readonly id="idStreamFileName" value="' + fileName + '"/> </h4>' +
                        '</div>' +
                        '<div class="container">' +
                        '<!-- ' +
                        '-- Your video element. Just like regular HTML5 video.' +
                        '-->' +
                        '<video id="example-video" width=960 height=540 class="video-js  vjs-default-skin"  style="object-fit:fill;" muted controls playsinline data-setup=\'{"muted": true}\'>' +
                        ' <source' +
                        ' src="http://mn-nl.mncdn.com/tvr_1/smil:TVR1.smil/chunklist_b2500000.m3u8?__mn_sid=93859128836599751749"' +
                        '     type="application/x-mpegURL">' +
                        '</video>' +
                        '</div>' +
                        '<div>' +
                        '<button type="button" onclick="javascript:global_SDKRenderer.erase_display_streamFile();">Close</button>' +
                        '</div>' +
                        '</div>' +
                        '</center><hr>';
                    strStreamDisplay =
                        '<video id=example-video width=960 height=540 class="video-js  vjs-default-skin"  style="object-fit:fill;" muted preload controls playsinline data-setup=\'{"muted": true}\'>' +
                            '<source' +
                            'src="blob:http://127.0.0.1:3000/0c48a694-8911-4705-8012-378ac1e32f5a"' +
                            'type="application/x-mpegURL">' +
                            '</video>' +
                            '<form id=load-url>' +
                            '<label style="visibility:hidden">' +
                            'Video URL:' +
                            '<input id=url type=url value="http://edge24.rcs-rds.ro/digiedge2/b1tvehq/chunklist.m3u8?is=29&src=digi-online.ro&t=00000000000000000000000000000000&amp;q=hq&s=b1tv&p=browser&pe=site">' +
                            '<center><button type=submit>Play</button></center>' +
                            '</label>' +
                            '</form>' +
                            '<div>' +
                            '<button type="button" onclick="window.player.play();">Play</button>' +
                            '</div>';
                    var container = document.getElementById("sdk.filesystem-renderer.displaystream");
                    container.innerHTML +=
                        '<center><div>' +
                            '<p><small>on win,ux:  <a href="vlc://' + streamUrl + '">vlc://' + streamUrl + '</a></small></p><br>' +
                            '<p><small>on android: <a href="intent:' + streamUrl + '#Intent;action=android.intent.action.VIEW;scheme=http;type=video/mp4;end">' +
                            'intent:' + streamUrl + '#Intent;action=android.intent.action.VIEW;scheme=http;type=application/x-mpegURL;end"</a></small></p>' +
                            '<button type="button" onclick="javascript:global_SDKRenderer.erase_display_streamFile();">Close</button>' +
                            '</div></center>';
                    var video = document.getElementById("sdk.filesystem-renderer.video");
                    video.style.display = 'block';
                    video.style.objectFit = 'fill';
                    var scriptNode = document.createElement("script");
                    scriptNode.innerHTML = "var player = videojs('sdk.filesystem-renderer.video');" +
                        " player.src({src: '" + streamUrl + "'," +
                        " type: 'application/x-mpegURL'}); player.play(); ";
                    video.appendChild(scriptNode);
                    context._result = strStreamDisplay;
                    self.do_display_streamFile(context);
                }
            };
            xhttp.open("GET", strStreamUrl, true);
            xhttp.send();
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.do_display_streamFile = function (context) {
            var storageName = context._objectResult._storage;
            var folderName = context._objectResult._path;
            var fileName = context._objectResult._fileName;
            var strStreamUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
            document.getElementById("sdk.filesystem-renderer.displaystream").innerHTML += "<center>" + strStreamUrl + "</center>";
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.do_displayStreamFile\t\tstart playing stream file : "
                + storageName + folderName + fileName + " from url " + strStreamUrl);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.erase_display_streamFile = function () {
            if (document.getElementById("sdk.filesystem-renderer.displayvideo").innerHTML != "")
                this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.erase_display_streamFile\t\tend playing stream. ");
            document.getElementById("sdk.filesystem-renderer.displaystream").innerHTML = "";
            var video = document.getElementById("sdk.filesystem-renderer.video");
            if (video != null) {
                videojs(video).pause();
                videojs(video).reset();
                video.style.display = 'none';
            }
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayComputeAndSaveShaFile = function (srcStorageName, srcFolderName, srcFileName, shaStorageName, shaFolderName, shaFileName) {
            this.action_eraseAllOpenDialogPanels();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(srcStorageName);
            fileInfo.setPath(srcFolderName);
            fileInfo.setName(srcFileName);
            context.setResult("");
            context.setObjectResult(fileInfo);
            var fileInfo2 = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo2.setStorage(shaStorageName);
            fileInfo2.setPath(shaFolderName);
            fileInfo2.setName(shaFileName);
            context.setObject2Result(fileInfo2);
            this.render_computeAndSaveShaFile(context);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_computeAndSaveShaFile = function (context) {
            var srcStorageName = context._objectResult._storage;
            var srcFolderName = context._objectResult._path;
            var srcFileName = context._objectResult._fileName;
            var shaStorageName = context._object2Result._storage;
            var shaFolderName = context._object2Result._path;
            var shaFileName = context._object2Result._fileName;
            var strDisplayComputeFileSha = '<hr><center>' +
                '<div>' +
                '<div><h3>Compute File Sha</h3></div>' +
                '<div>' +
                '<h4>Source File: <input id="idComputeFileShaSrcStorageName" value="' + srcStorageName + '"/>'
                + '<input id="idComputeFileShaSrcFolderName"  value="' + srcFolderName + '"/>'
                + '<input id="idComputeFileShaSrcFileName"    value="' + srcFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<h4>Sha File: <input id="idComputeFileShaShaStorageName" value="' + shaStorageName + '"/>'
                + '<input id="idComputeFileShaShaFolderName" value="' + shaFolderName + '"/>'
                + '<input id="idComputeFileShaShaFileName"   value="' + shaFileName + '"/> </h4>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayComputeAndSaveShaFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.computeAndSaveShaFile(' +
                'document.getElementById(\'idComputeFileShaSrcStorageName\').value, document.getElementById(\'idComputeFileShaSrcFolderName\').value, document.getElementById(\'idComputeFileShaSrcFileName\').value,' +
                'document.getElementById(\'idComputeFileShaShaStorageName\').value, document.getElementById(\'idComputeFileShaShaFolderName\').value, document.getElementById(\'idComputeFileShaShaFileName\').value' +
                ');">Compute File Sha</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-computefilesha").innerHTML = strDisplayComputeFileSha;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseDisplayComputeAndSaveShaFile = function () {
            document.getElementById("sdk.filesystem-renderer.display-computefilesha").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_computeAndSaveShaFile = function (srcStorageName, srcFolderName, srcFileName, shaStorageName, shaFolderName, shaFileName) {
            var error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var fileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo.setStorage(srcStorageName);
            fileInfo.setPath(srcFolderName);
            fileInfo.setName(srcFileName);
            context.setResult("");
            context.setObjectResult(fileInfo);
            var fileInfo2 = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            fileInfo2.setStorage(shaStorageName);
            fileInfo2.setPath(shaFolderName);
            fileInfo2.setName(shaFileName);
            context.setObject2Result(fileInfo2);
            var shaProperties = this._owner._aServiceLocator._iEntityCreation.createDefaultShaProperties(error);
            shaProperties.setSrcFileInfo(fileInfo);
            shaProperties.setShaFileInfo(fileInfo2);
            this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_computeshafile\t\tstart compute sha file : "
                + srcStorageName + srcFolderName + srcFileName + " to "
                + shaStorageName + shaFolderName + shaFileName);
            this._owner._aSDKJsTV._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, error, context, null);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.render_notify_computeAndSaveShaFile = function (context) {
            this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_computeShaFile\t\tend compute sha file : " + context._result, context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_createLogRenderer = function () {
            this._owner._aLogRenderer._iLogMainRenderer.action_createLogRenderer();
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayLogRenderer = function () {
            this._owner._aLogRenderer._iLogMainRenderer.action_displayLogRenderer();
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_hideLogRenderer = function () {
            this._owner._aLogRenderer._iLogMainRenderer.action_hideLogRenderer();
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_eraseLogRenderer = function () {
            this._owner._aLogRenderer._iLogMainRenderer.action_eraseLogRenderer();
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_viewLogFile = function () {
            this._owner._aLogRenderer._iLogMainRenderer.action_viewLogFile();
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_closeViewLogFile = function () {
            this._owner._aLogRenderer._iLogMainRenderer.action_closeViewLogFile();
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.setHardwareSetting = function (aHardwareSettings) {
            this._aHardwareSettings = aHardwareSettings;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.getHardwareSetting = function () {
            return this._aHardwareSettings;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayHardwareSettings = function () {
            this.action_eraseAllOpenDialogPanels();
            var strHardwareType = this._aHardwareSettings.getHardwareType();
            var strEarlyAdapter = this._aHardwareSettings.getEarlyAdapter();
            var strSerialNumber = this._aHardwareSettings.getSerialNumber();
            var strAccountId = this._aHardwareSettings.getAccountId();
            var strAccountName = this._aHardwareSettings.getAccountName();
            var strAccountPwd = this._aHardwareSettings.getAccountPassword();
            var strDisplayFile = '<hr><center>' +
                '<div>' +
                '<div><h3>Display Xml Hardware Settings</h3></div>' +
                '<div>' +
                '<h4>Hardware Type: <input id="idHSHardwareType" readonly value="' + strHardwareType + '"/></h4>' +
                '<h4>Early Adapter: <input id="idHSEarlyAdapter" readonly value="' + strEarlyAdapter + '"/></h4>' +
                '<h4>Serial Number: <input id="idHSEarlyAdapter" readonly value="' + strSerialNumber + '"/></h4>' +
                '<h4>Account Id   : <input id="idHSEarlyAdapter" readonly value="' + strAccountId + '"/></h4>' +
                '<h4>Account Name : <input id="idHSEarlyAdapter" readonly value="' + strAccountName + '"/></h4>' +
                '<h4>Account Password: <input id="idHSEarlyAdapter" readonly value="' + strAccountPwd + '"/></h4>' +
                '</div>' +
                '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.closeHardwareSettings();">Close</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-xmlhardwaresettings").innerHTML = strDisplayFile;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_closeHardwareSettings = function () {
            document.getElementById("sdk.filesystem-renderer.display-xmlhardwaresettings").innerHTML = "";
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.setOpeningHours = function (aOpeningHours) {
            this._aOpeningHours = aOpeningHours;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.getOpeningHours = function () {
            return this._aOpeningHours;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_displayOpeningHours = function () {
            this.action_eraseAllOpenDialogPanels();
            var strDisplayOpeningHoursHeader = '<hr><center>' +
                '<div>' +
                '<div><h3>Display Xml Opening Hours</h3></div>';
            var strDisplayOpeningHoursLines = '<div>';
            var ohdOpenDayName = '';
            var ohdOpenTime = '';
            var ohdCloseDayName = '';
            var ohdCloseTime = '';
            var ohdList = this._aOpeningHours.getOpeningHours();
            var strDisplayOpeningHoursLine = "";
            for (var i = 0; i < ohdList.length; i++) {
                ohdOpenDayName = ohdList[i].getOpenDayName();
                ohdOpenTime = ohdList[i].getOpenTime().getTimeAsString();
                ohdCloseDayName = ohdList[i].getCloseDayName();
                ohdCloseTime = ohdList[i].getCloseTime().getTimeAsString();
                strDisplayOpeningHoursLine =
                    '<h4>' +
                        '<input id="id_ohd_opendayname' + i + '" readonly value="' + ohdOpenDayName + '"/>' +
                        '<input id="id_ohd_opentime' + i + '" readonly value="' + ohdOpenTime + '"/>' +
                        '<input id="id_ohd_closedayname' + i + '" readonly value="' + ohdCloseDayName + '"/>' +
                        '<input id="id_ohd_closetime' + i + '" readonly value="' + ohdCloseTime + '"/>' +
                        '</h4>';
                strDisplayOpeningHoursLines += strDisplayOpeningHoursLine;
            }
            strDisplayOpeningHoursLines += '</div>';
            var strDisplayOpeningHoursFooter = '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.closeOpeningHours();">Close</button>' +
                '</div>' +
                '</div>' +
                '</center><hr>';
            document.getElementById("sdk.filesystem-renderer.display-xmlopeninghours").innerHTML = strDisplayOpeningHoursHeader + strDisplayOpeningHoursLines + strDisplayOpeningHoursFooter;
        };
        IImpl_SDKRenderer_FileSystem_R.prototype.action_closeOpeningHours = function () {
            document.getElementById("sdk.filesystem-renderer.display-xmlopeninghours").innerHTML = "";
        };
        return IImpl_SDKRenderer_FileSystem_R;
    }());
    rm_renderingservices.IImpl_SDKRenderer_FileSystem_R = IImpl_SDKRenderer_FileSystem_R;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=IImpl_SDKRenderer_FileSystem_R.js.map