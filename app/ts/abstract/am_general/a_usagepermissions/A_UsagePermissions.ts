import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_UsagePermissions extends amGeneral.am_general.A_Entity
  {

    getRemoteKeyOperationMode() : string;
    setRemoteKeyOperationMode(strRemoteKeyOperationMode: string) : void;

    getLocalKeyOperationMode() : string;
    setLocalKeyOperationMode(strLocalKeyOperationMode: string) : void;

  }

} 