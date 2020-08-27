import amGeneralCaptureScreenInfo     = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_CaptureScreenInfo  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo
  {
    //--- properties
    _isSavedToFinalPlace : boolean;

    _imgSystemStorage : string;
    _imgSystemPath    : string;
    _imgSystemName    : string;

    _imgFinalStorage  : string;
    _imgFinalPath     : string;
    _imgFinalName     : string;


    //----------- constructor 
    constructor()  
    {  
      super();

      this._isSavedToFinalPlace = false;

      this._imgSystemStorage = "";
      this._imgSystemPath    = "";
      this._imgSystemName    = "";
  
      this._imgFinalStorage  = "";
      this._imgFinalPath     = "";
      this._imgFinalName     = "";
    }

    //-----------------------------
    public isSavedToFinalPlace() : boolean 
    {
      return this._isSavedToFinalPlace;
    }

    //-----------------------------
    public setSavedToFinalPlace(isSavedToFinalPlace : boolean) : void
    {
      this._isSavedToFinalPlace = isSavedToFinalPlace ;
    }

    //-----------------------------
    public setImageSystemStorage(imgSystemStorage: string)  : void
    {
      this._imgSystemStorage = imgSystemStorage;
    }

    //-----------------------------
    public getImageSystemStorage() : string 
    {
      return this._imgSystemStorage;
    }

    //-----------------------------
    public setImageSystemPath(imgSystemPath : string)  : void
    {
      this._imgSystemPath = imgSystemPath;
    }

    //----------------------------
    public getImageSystemPath() : string 
    {
      return this._imgSystemPath;
    }

    //---------------------------
    public setImageSystemName(imgSystemName : string)  : void
    {
      this._imgSystemName = imgSystemName;
    }

    //---------------------------
    public getImageSystemName() : string 
    {
      return this._imgSystemPath ;
    }

    //---------------------------
    public getImageSystemFullName() : string
    {
      return this._imgSystemStorage + this._imgSystemPath + this._imgSystemName;
    }


    //---------------------------
    public setImageFinalStorage(imgFinalStorage: string)  : void
    {
      this._imgFinalStorage = imgFinalStorage;
    }

    //---------------------------
    public getImageFinalStorage() : string 
    {
      return this._imgFinalStorage;      
    }

    //---------------------------
    public setImageFinalPath(imgFinalPath : string)  : void
    {
      this._imgFinalPath = imgFinalPath;
    }

    //---------------------------
    public getImageFinalPath() : string 
    {
      return this._imgFinalPath;            
    }

    //---------------------------
    public setImageFinalName(imgFinalName : string)  : void
    {
      this._imgFinalName = imgFinalName;            
    }

    //---------------------------
    public getImageFinalName() : string 
    {
      return this._imgFinalName;                  
    }

    //---------------------------
    public getImageFinalFullName() : string
    {
      return this._imgFinalStorage + this._imgFinalPath + this._imgFinalName;
    }

  }
} 