import amGeneralTileInfo     = require("../../../../../app/ts/abstract/am_general/a_tileinfo/A_TileInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_TileInfo  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralTileInfo.am_general.A_TileInfo
  {
    //--- properties
   	// setTileInfo parameters.
	  // enable: Enable/diable set tile info.
	  // row : number of rows. (1~15)
	  // column : number of columns. (1~15)
	  // tileId : Tile id for this monitor (1 ~ row * column)
	  // naturalMode : Enable/diable naturalMode
    _enabled: boolean;
    _row : number;
    _column : number;
    _tileId: number;
    _naturalMode : boolean;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._enabled = false;     //: true,
      this._row     = 0;         //: 2,
      this._column  = 0;         //: 2,
      this._tileId  = 0;         //: 2,
      this._naturalMode = false; //: true
    }

    //-----------------------------
    public isEnabled() : boolean
    {
      return this._enabled;
    }

    //-----------------------------
    public setEnabled(enabled : boolean) : void
    {
      this._enabled = enabled;
    }

    //-----------------------------
    public getRow() : number
    {
      return this._row;
    }

    //-----------------------------
    public setRow(row : number) : void
    {
      this._row = row;
    }

    //-----------------------------
    public getColumn() : number
    {
      return this._column;
    }

    //-----------------------------
    public setColumn(column : number) : void
    {
      this._column = column;
    }

    //-----------------------------
    public getTileId() : number
    {
      return this._tileId;
    }

    //-----------------------------
    public setTileId(tileId : number) : void
    {
      this._tileId = tileId;
    }

    //-----------------------------
    public getNaturalMode() : boolean
    {
      return this._naturalMode;
    }

    //-----------------------------
    public setNaturalMode(naturalMode : boolean) : void
    {
      this._naturalMode = naturalMode;
    }

  }
} 