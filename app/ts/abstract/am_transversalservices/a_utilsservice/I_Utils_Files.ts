import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_transversalservices
{
  export interface I_Utils_Files extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    getFileUrl(fileStorage: string, fileFolder:string, fileName: string, 
               startFolder : amGeneralFileInfo.am_general.A_FileInfo,  startUrlFolder : amGeneralFileInfo.am_general.A_FileInfo);

    formatFileSize(pBytes : number, pDigits: number, pUnits: string) : string;

    addSlashToFolderNameIfNeeded(folderName: string) : string;

    getFileExtension(fileName: string) ;
    getFileContentType(fileExt: string) ;
    
    getParentFolderName(folderName: string) ;

    readFileFromUrl(urlStorageName: string, urlFolderName: string, urlFileName : string, 
                    localStorageName: string, localFolderName : string, localFileName: string,
                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void;

  }
} 