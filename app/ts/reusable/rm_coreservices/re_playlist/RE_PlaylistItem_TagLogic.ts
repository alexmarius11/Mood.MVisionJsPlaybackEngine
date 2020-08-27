import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TagLogic");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralRandom   = require("../../../../../app/ts/abstract/am_general/ae_random/AE_Random");

import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amPlaylistItemRealTag  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_RealTag");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

import rmPlaylistItemPlaylistLogic  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PlaylistLogic");
import amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");

export module rm_coreservices
{
  export class RE_PlaylistItem_TagLogic extends rmPlaylistItemPlaylistLogic.rm_coreservices.RE_PlaylistItem_PlaylistLogic
                                                   implements amCoreServices.am_coreservices.AE_PlaylistItem_TagLogic
  {
    _tagId: number;
    _realTag: amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag;

    //----------------
    constructor()
    {
      super();
      this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_ChooseRandom_OnlyOne_ByTagId;
      this._hasMultiplay                = false;
      this._hasARenderingRepresentation = false;
      this._hasARenderingZone           = false;

      this.__crtNbChildrenChoosed       = 0;
      this.__nbMaxChildrenToChoose      = 1;

      this._tagId   = null;
      this._realTag = null;
    }

    //---------------------------
    public getTagId() : number
    {
      return this._tagId;
    }

    //------------------------------
    public setTagId(tagId : number)
    {
      this._tagId = tagId;
    }

    //----------------------------
    public getRealTag() : amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag
    {
      return this._realTag;
    }

    //-----------------------
    public setRealTag(realTag : amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag)  
    {
      this._realTag = realTag;
    }

    //-------------------------
    public getRealTagRandom() : amGeneralRandom.am_general.AE_Random
    {
      if (this._realTag == null)
        return null;
      return this._realTag.getRealTagRandom();
    }

    //-------------------------
    public setRealTagRandom(realTagRandom : amGeneralRandom.am_general.AE_Random)
    {
      if (this._realTag == null)
        return null;
      return this._realTag.setRealTagRandom(realTagRandom);
    }   

  }
} 