import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amPlaybackHardwareSettings = require("../../../../../app/ts/abstract/am_playback/a_hardwaresettings/A_HardwareSettings");
import amPlaybackOpeningHours     = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_OpeningHours");

export module am_renderingservices
{
  export interface I_SDKRenderer_FileSystem extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    

    //--------------------------------------
    //  configuration functions
    //--------------------------------------    
    setStartFolder(startFolder : amGeneralFileInfo.am_general.A_FileInfo, 
                   startUrlFolder : amGeneralFileInfo.am_general.A_FileInfo, 
                   aStartUrlDomainFileFolder: amGeneralFileInfo.am_general.A_FileInfo) : void;
    
    //--------------------------------------
    //  display File System functions
    //--------------------------------------    
    render_home();
    render_allfilesystem(context);
    render_mainmenu(storageName: string, folderName: string)
    action_eraseAllOpenDialogPanels();    


    //--------------------------------------
    //  display Folder File list functions
    //--------------------------------------
    
    action_getFileList(storageName: string, folderName: string);
    render_file_list(context);


    //====================================================
    //  Manage Files functions
    //====================================================

    //--------------------------------------
    //  display File functions
    //--------------------------------------
    action_displayFile(storageName: string, folderName: string, fileName: string)    
    action_displayNewFile(storageName: string, folderName: string);
    render_text_file(context);        
    action_eraseDisplayFile();
    action_saveFile(storageName: string, folderName: string, fileName: string, fileContent: string);
    render_notify_writeTextFile2(context);

    //----------------
    //  delete file
    //----------------
    action_displayDeleteFile(storageName: string, folderName: string, fileName: string);
    render_displayDeleteFile(context);
    action_eraseDisplayDeleteFile();
    action_deleteFile(storageName: string, folderName: string, fileName: string);
    render_notify_deleteFile2(context);

    //--------------------------------------
    //  copy file
    //--------------------------------------
    action_displayCopyFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string);
    render_copyFile(context);
    action_eraseDisplayCopyFile();
    action_copyFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string);
    render_notify_copyFile2(context);

    //--------------------------------------
    //  move file
    //--------------------------------------
    action_displayMoveFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string);
    render_moveFile(context);
    action_eraseDisplayMoveFile();
    action_moveFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string);
    render_notify_moveFile2(context);

    //--------------------------------------
    //  download file
    //--------------------------------------        
    action_displayDownloadFile(remoteUrlName: string, dstStorageName: string, dstFolderName: string, dstFileName: string);
    render_downloadFile(context);
    action_eraseDisplayDownloadFile();
    action_downloadFile(srcUrlFullName: string, dstStorageName: string, dstFolderName: string, dstFileName: string);
    render_notify_downloadFile2(context);

    //--------------------------------------
    //  upload file
    //--------------------------------------
    action_displayUploadFile(srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string);
    render_uploadFile(context);
    action_eraseDisplayUploadFile();
    action_uploadFile(srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string);
    render_notify_uploadFile2(context);

    //--------------------------------------
    //  unzip file
    //--------------------------------------
    action_displayUnzipFile(zipStorageName: string, zipFolderName: string, zipFileName: string, unzipStorageName: string, unzipFolderName: string);
    render_unzipFile(context);
    action_eraseDisplayUnzipFile();
    action_unzipFile(zipStorageName: string, zipFolderName: string, zipFileName: string, unzipStorageName: string, unzipFolderName: string);
    render_notify_unzipFile2(context);

    //--------------------------------------
    //  zip file
    //--------------------------------------
    action_displayZipFile(storageName: string, folderName: string, fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string);
    render_zipFile(context);    
    action_eraseDisplayZipFile();
    action_zipFile(storageName: string, folderName: string, fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string);
    render_notify_zipFile2(context);

    //====================================================
    //  Manage Folders functions
    //====================================================

    //-------------------------
    // create folder functions
    //-------------------------
    action_displayNewFolder(storageName: string, folderName: string);
    render_folder(context);
    action_eraseDisplayNewFolder();
    action_createFolder(storageName: string, folderName: string);
    render_notify_createFolder2(context);
    
    //-------------------------
    // delete folder functions
    //-------------------------
    action_displayDeleteFolder(storageName: string, folderName: string);
    render_deleteFolder(context);    
    action_eraseDisplayDeleteFolder();
    action_deleteFolder(storageName: string, folderName: string);
    render_notify_deleteFolder2(context);

    //-------------------------
    // copy folder functions
    //-------------------------
    action_displayCopyFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string);
    render_copyFolder(context);
    action_eraseDisplayCopyFolder();
    action_copyFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string);    
    render_notify_copyFolder2(context);

    //-------------------------
    // move folder functions
    //-------------------------        
    action_displayMoveFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string);
    render_moveFolder(context);
    action_eraseDisplayMoveFolder();
    action_moveFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string);
    render_notify_moveFolder2(context);

    //-------------------------
    // zip folder functions
    //-------------------------        
    action_displayZipFolder(storageName: string, folderName: string, zipStorageName: string, zipFolderName: string, zipFileName: string);
    render_zipFolder(context);
    action_eraseDisplayZipFolder();
    action_zipFolder(storageName: string, folderName: string, zipStorageName: string, zipFolderName: string, zipFileName: string);
    render_notify_zipFolder2(context);
    
    //----------------------
    // display image file
    //----------------------
    start_display_imageFile(imgStorageName: string, imgFolderName: string, imgFileName: string): void;
    get_renderinginfo_imageFile(imgStorageName: string, imgFolderName: string, imgFileName: string, 
                                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    generate_rendering_imageFile (context: any) : void;
    do_display_imageFile(context: any) : void;
    erase_display_imageFile(): void;

    //----------------------
    // display video file
    //----------------------
    start_display_videoFile(imgStorageName: string, imgFolderName: string, imgFileName: string): void;
    get_renderinginfo_videoFile(imgStorageName: string, imgFolderName: string, imgFileName: string, 
                                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    generate_rendering_videoFile (context: any) : void;
    do_display_videoFile(context: any) : void;
    erase_display_videoFile(): void;

    //----------------------
    // display stream file
    //----------------------
    start_display_streamFile(imgStorageName: string, imgFolderName: string, imgFileName: string): void;
    get_renderinginfo_streamFile(imgStorageName: string, imgFolderName: string, imgFileName: string, 
                                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    generate_rendering_streamFile (context: any) : void;
    do_display_streamFile(context: any) : void;
    erase_display_streamFile(): void;

    //----------------------
    // compute sha file
    //----------------------
    action_displayComputeAndSaveShaFile(srcStorageName: string, srcFolderName: string, srcFileName: string, shaStorageName: string, shaFolderName: string, shaFileName: string);
    render_computeAndSaveShaFile(context);
    action_eraseDisplayComputeAndSaveShaFile();
    action_computeAndSaveShaFile(srcStorageName: string, srcFolderName: string, srcFileName: string, shaStorageName: string, shaFolderName: string, shaFileName: string);
    render_notify_computeAndSaveShaFile(context);

    //-----------------------
    // log functions 
    //-----------------------
    action_createLogRenderer() : void;
    action_displayLogRenderer() : void;
    action_hideLogRenderer() : void;
    action_eraseLogRenderer() : void;
    action_viewLogFile() : void;
    action_closeViewLogFile() : void;    

    //-------------------------
    // Display Xml OpeningHours
    //-------------------------
    setHardwareSetting( aHardwareSettings: amPlaybackHardwareSettings.am_playback.A_HardwareSettings);
    getHardwareSetting();
    action_displayHardwareSettings() : void ;
    action_closeHardwareSettings() : void;
    
    //-----------------------------
    // Display Xml HardwareSettings
    //-----------------------------
    setOpeningHours(aOpeningHours:amPlaybackOpeningHours.am_playback.A_OpeningHours);
    getOpeningHours();
    action_displayOpeningHours() : void ;
    action_closeOpeningHours() : void ;
  }

} 