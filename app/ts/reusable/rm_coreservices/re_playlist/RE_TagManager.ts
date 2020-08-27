import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amPlaylistItemRealTag  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_RealTag");


import amTagManager  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_TagManager");

import amPlaylistItemType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");
import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");

export module rm_coreservices
{
  export class RE_TagManager extends rmGeneralEntity.rm_general.R_Entity
                             implements amTagManager.am_coreservices.AE_TagManager
  {
     //----------------
     _mapOfRealTags : Map<number, amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag>; 
     //----------------
     constructor()
     {
       super();
       this._mapOfRealTags = new Map<number, amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag>();
     }

     //---------------------
     public getRealTag(tagId: number) : amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag
     {
       return this._mapOfRealTags.get(tagId);
     }

     //---------------------
     public hasRealTag(tagId: number) : boolean
     {
       return this._mapOfRealTags.has(tagId);
     }

     //---------------------
     public addRealTag(tagId: number, realTag : amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag) : boolean
     {
        if (! this._mapOfRealTags.has(tagId))
          return false;
        this._mapOfRealTags.set(tagId, realTag);
        return true;
     }

     //---------------------
     public addRealTagIfNotExists(tagId: number, realTag : amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag) : boolean
     {
       if (this._mapOfRealTags.has(tagId))
         return false;
       this._mapOfRealTags.set(tagId, realTag);
       return true;
     }

     //---------------------
     public deleteRealTag(tagId: number) : boolean
     {
        return this._mapOfRealTags.delete(tagId);
     }

     //-----------------------------------------------------
     public clearAllRealTags() : void
     {
       this._mapOfRealTags.clear();
     }

     //-----------------------------------------------------
     public toJSONString() : string
     {
       return "";
     }

     //--------------------
     // set/get properties
     //--------------------


  }
}


/*
let nameAgeMapping = new Map();
 
//Set entries
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);
 
//Get entries
nameAgeMapping.get("John");     //40
 
//Check entry is present or not
nameAgeMapping.has("Lokesh");       //true
nameAgeMapping.has("Brian");        //false
 
//Size of Map with 
nameAgeMapping.size;                //3
 
//Delete an entry
nameAgeMapping.delete("Lokesh");    // true
 
//Clear whole Map
nameAgeMapping.clear();             //Clear all entries
Iterate over Map entries
Use 'for...of' loop to iterate over map keys or values or entries.

Iterate Map Example
let nameAgeMapping = new Map();
 
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);
 
//Iterate over map keys
for (let key of nameAgeMapping.keys()) {
    console.log(key);                   //Lokesh Raj John
}
 
//Iterate over map values
for (let value of nameAgeMapping.values()) {
    console.log(value);                 //37 35 40
}
 
//Iterate over map entries
for (let entry of nameAgeMapping.entries()) {
    console.log(entry[0], entry[1]);    //"Lokesh" 37 "Raj" 35 "John" 40
}
 
//Using object destructuring
for (let [key, value] of nameAgeMapping) {
    console.log(key, value);            //"Lokesh" 37 "Raj" 35 "John" 40
} 
*/