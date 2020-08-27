import amTransversalServicesIUtilsFiles = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Files");

import amGeneralFileInfo     = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
                                                     
                                                     
export module rm_transversalservices
{
  export class IImpl_Utils_Files_R implements amTransversalServicesIUtilsFiles.am_transversalservices.I_Utils_Files
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.R_UtilsService;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.R_UtilsService)  
    {
      this._owner = owner;  
    }

    //---------------------------------------------------------------
    public getFileUrl(fileStorage: string, fileFolder:string, fileName: string, startFolder : amGeneralFileInfo.am_general.A_FileInfo,  startUrlFolder : amGeneralFileInfo.am_general.A_FileInfo)    
    {
      var fileUrl = "";
      /*
      var startFolderPath  = startFolder.getPath();
      if (startFolderPath != "")
      {
        var idx = fileFolder.indexOf(startFolderPath);
        if (idx != -1)
          fileUrl = fileFolder.substr(idx+startFolder.getPath().length);
      }*/
      //fileUrl =   startUrlFolder.getStorage() + startUrlFolder.getPath() + fileUrl + fileName;
      fileUrl =   startUrlFolder.getStorage() + fileFolder + fileName;
      return fileUrl ;
    }
            
    //----------------------------------------
    // pBytes: the size in bytes to be converted.
    // pUnits: 'si'|'iec' si units means the order of magnitude is 10^3, iec uses 2^10
    public formatFileSize(pBytes : number, pDigits: number, pUnits: string) : string
    {
      if (isNaN(pBytes))
        return "undefined";//JSON.stringify(pBytes);
      // Handle some special cases
      if(pBytes == 0) return '0 Bytes';
      if(pBytes == 1) return '1 Byte';
      if(pBytes == -1) return '-1 Byte';

      var bytes = Math.abs(pBytes)
      if(pUnits && pUnits.toLowerCase() && pUnits.toLowerCase() == 'si') {
        // SI units use the Metric representation based on 10^3 as a order of magnitude
        var orderOfMagnitude = Math.pow(10, 3);
        var abbreviations = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      } else {
        // IEC units use 2^10 as an order of magnitude
        var orderOfMagnitude = Math.pow(2, 10);
        //var abbreviations = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
        var abbreviations = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      }
      var i = Math.floor(Math.log(bytes) / Math.log(orderOfMagnitude));
      var result = (bytes / Math.pow(orderOfMagnitude, i));

      // This will get the sign right
      if(pBytes < 0) {
        result *= -1;
      }

    // This bit here is purely for show. it drops the percision on numbers greater than 100 before the units.
    // it also always shows the full number of bytes if bytes is the unit.
    if(result >= 99.995 || i==0) {
      return result.toFixed(0) + ' ' + abbreviations[i];
    } else {
      return result.toFixed(pDigits) + ' ' + abbreviations[i];
    }
  }

    //-----------------------------------------
    public addSlashToFolderNameIfNeeded(folderName: string) : string
    {
      if (folderName === null)
        return folderName;
      if (folderName.length == 0)
        return "";
      if (folderName == "/")
        return folderName;

      if (folderName.charAt(folderName.length-1) == "/")
        return folderName;  
      
      var folderNameWithSlash = folderName + "/";
      return folderNameWithSlash;
    }

    //-----------------------------------------
    public getFileExtension(fileName: string) 
    {
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
    }

    //-----------------------------------------
    public getFileContentType(fileExt: string) 
    {
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
    }

    //-----------------------------------------
    public getParentFolderName(folderName: string) 
    {
      if (folderName === null)
        return "";
      if (folderName.length == 0)
        return "";

      var folderNameWithoutEndSlash = ""
      if (folderName.charAt(folderName.length-1) == "/")
        folderNameWithoutEndSlash = folderName.substr(0, folderName.length-1);  
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
    }
    
    //-------------------------------------------
    public  readFileFromUrl(urlStorageName: string, urlFolderName: string, urlFileName : string, 
                            localStorageName: string, localFolderName : string, localFileName: string,
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      var strFileUrl = urlStorageName + urlFolderName + urlFileName;
      try{
        //var strStreamSub = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlDomainFolder);
        var xhttp = new XMLHttpRequest();
        var self = this;
        xhttp.onreadystatechange = function() 
        {
          if (this.readyState == 4) // done
          {
            if (this.status == 200) 
            {
              // Action to be performed when the document is read;
              var fileContent = xhttp.responseText;                
              context.setResult(fileContent);
              context.setError(error);
              if (callback != null)
                callback(context);       
            }else{
            }
          }
        }  
        xhttp.onerror = function() 
        {
          console.log( 'Error 7702: error getting xml file content of the file ' + strFileUrl ); 
          // add a log tracking 
          context.setError(error);
          context.setObjectResult(null);
          if (context.getError() != null)
            context.getError().setError(7702, 'Error reading content of the file ' + strFileUrl );
          if (callback != null)
            callback(context);  
          return;      
        }
        xhttp.open("GET", strFileUrl, true);
        xhttp.send();
      }catch(e){
        console.log( 'Error 7701. Error catching reading content of the file ' + strFileUrl ); 
        // add a log tracking 
        context.setError(error);
        context.setObjectResult(null);
        if (context.getError() != null)
          context.getError().setError(7701, 'Error catching reading content of the file ' + strFileUrl );
        if (callback != null)
          callback(context);  
        return;      
      }
    }
  }
} 