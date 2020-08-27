import amGeneralFileInfo     = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralDateTime = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_FileInfo extends rmGeneralEntity.rm_general.R_Entity
                          implements amGeneralFileInfo .am_general.A_FileInfo
  {
    //--- properties
     _fileName: string;
     _path: string;
     _storage: string;
     _type: string;
     _size: number;
     _creationDate : amGeneralDateTime.am_general.A_DateTime;
     _lastModifiedDate : amGeneralDateTime.am_general.A_DateTime;
     _lastAccessedDate : amGeneralDateTime.am_general.A_DateTime;
     _urlFileName: string;
     _urlPath: string;
     _urlStorage: string;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._fileName = null;
      this._path = null;
      this._storage = null;
      this._type = null;
      this._size = 0;;
      this._creationDate = null;
      this._lastModifiedDate = null;
      this._lastAccessedDate = null; 
      this._urlFileName = null;
      this._urlPath = null;
      this._urlStorage = null;
    }

    //-----------------------
    public reset() : void
    {
      this._fileName = null;
      this._path = null;
      this._storage = null;
      this._type = null;
      this._size = 0;;
      this._creationDate = null;
      this._lastModifiedDate = null;
      this._lastAccessedDate = null; 
      this._urlFileName = null;
      this._urlPath = null;
      this._urlStorage = null;     
    }

    //---------------------------------------------------------
    public copy(src : amGeneralFileInfo.am_general.A_FileInfo) : number
    {
      this._fileName = src.getName();
      this._path = src.getPath();
      this._storage = src.getStorage();
      this._type = src.getType();
      this._size = src.getSize();
      this._creationDate = src.getCreatedDate();
      this._lastModifiedDate = src.getLastModifiedDate();
      this._lastAccessedDate = src.getLastAccessedDate();
      this._urlFileName = src.getUrlName();
      this._urlPath = src.getUrlPath();
      this._urlStorage = src.getUrlStorage();     
      return 0;
    }

    //-------------------------------------
    public setName(fileName: string) : void
    {
      this._fileName = fileName;
    }

    //---------------------------------
    public getName() : string
    {
      return this._fileName;
    }

    //---------------------------------
    public getFullName() : string
    {
      return this._storage + this._path + this._fileName;
    }
    
    //---------------------------------
    public setPath(filePath: string) : void
    {
      this._path = filePath;
    }

    //---------------------------------
    public getPath() : string
    {
      return this._path;
    }

    //---------------------------------
    public getFullPath() : string
    {
      return this._storage + this._path;
    }

    //---------------------------------
    public setStorage(storage: string) : void
    {
      this._storage = storage;
    }

    //---------------------------------
    public getStorage() : string
    {
      return this._storage;
    }

    //---------------------------------
    public setType(fileType: string) : void
    {
      this._type = fileType;
    }

    //---------------------------------
    public getType() : string
    {
      return this._type;
    }

    //---------------------------------
    public setSize(size: number) : void
    {
       this._size = size;
    }

    //-------------------------
    public getSize() : number
    {
      return this._size;
    }

    public setCreatedDate(fileCreationDate: amGeneralDateTime.am_general.A_DateTime)
    {
      this._creationDate = fileCreationDate;
    }
    
    //----------------------------------
    public getCreatedDate(): amGeneralDateTime.am_general.A_DateTime
    {
      return this._creationDate;
    }


    //----------------------------------
    public setLastModifiedDate(lastModifiedDate: amGeneralDateTime.am_general.A_DateTime)
    {
      this._lastModifiedDate = lastModifiedDate;
    }

    //----------------------------------
    public getLastModifiedDate(): amGeneralDateTime.am_general.A_DateTime
    {
      return this._lastModifiedDate ;
    }

    //----------------------------------------
    setLastAccessedDate(lastAccessedDate: amGeneralDateTime.am_general.A_DateTime)
    {
      this._lastAccessedDate = lastAccessedDate;
    }


    //----------------------------------------
    public getLastAccessedDate(): amGeneralDateTime.am_general.A_DateTime
    {
      return this._lastAccessedDate ;
    }


    //-------------------------------
    public setUrlName(urlFileName: string) : void
    {
      this._urlFileName = urlFileName;
    }

    //-------------------------------
    public getUrlName() : string
    {
      return this._urlFileName;
    }

    //-------------------------------
    public setUrlPath(urlPath: string) : void
    {
      this._urlPath = urlPath;      
    }

    //-------------------------------
    public getUrlPath() : string
    {
      return this._urlPath ;
    }

    //-------------------------------
    public setUrlStorage(urlStorage: string) : void
    {
      this._urlStorage = urlStorage;
    }

    //-------------------------------
    public getUrlStorage() : string
    {
      return this._urlStorage;
    }

    //---------------------------------
    public getFullUrlName() : string
    {
      return this._urlStorage + this._urlPath + this._urlFileName;
    }
    
  }
} 