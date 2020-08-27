import amGeneralShaProperties     = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");
import amGeneralFileInfo        = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_ShaProperties extends    rmGeneralEntity.rm_general.R_Entity
                               implements amGeneralShaProperties.am_general.A_ShaProperties
  {

    _srcFileInfo : amGeneralFileInfo.am_general.A_FileInfo;
    _shaFileInfo : amGeneralFileInfo.am_general.A_FileInfo;

    _shaString   : string; 
    
    //----------- constructor 
    constructor()  
    {  
      super();
      this._srcFileInfo = null;
      this._shaFileInfo = null;
      this._shaString   = null;
    }
    
    //-------------------------------------
    public setSrcFileInfo(srcFileInfo: amGeneralFileInfo.am_general.A_FileInfo)
    {
      this._srcFileInfo = srcFileInfo;
    }

    //-------------------------------------
    public getSrcFileInfo()
    {
      return this._srcFileInfo;
    }

    //-------------------------------------
    public setShaFileInfo(srcFileInfo: amGeneralFileInfo.am_general.A_FileInfo)
    {
      this._shaFileInfo = srcFileInfo;
    }

    //-------------------------------------
    public getShaFileInfo()
    {
      return this._shaFileInfo;
    }

    //-------------------------------------
    public setShaString(shaString: string)
    {
      this._shaString = shaString;
    }

    //-------------------------------------
    public getShaString()
    {
      return this._shaString;
    }
  }
} 