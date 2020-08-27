import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_TileInfo extends amGeneral.am_general.A_Entity
  {
    isEnabled() : boolean;
    setEnabled(enabled : boolean) : void;

    getRow() : number;
    setRow(row : number) : void;

    getColumn() : number;
    setColumn(column : number) : void;

    getTileId() : number;
    setTileId(tileId : number) : void;

    getNaturalMode() : boolean;
    setNaturalMode(naturalMode : boolean) : void;    
  }

} 