import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

export module am_general
{
  export interface A_ShaProperties extends amGeneral.am_general.A_Entity
  {
    setSrcFileInfo(srcFileInfo: amGeneralFileInfo.am_general.A_FileInfo);
    getSrcFileInfo()

    setShaFileInfo(srcFileInfo: amGeneralFileInfo.am_general.A_FileInfo);
    getShaFileInfo();

    setShaString(shaString: string);
    getShaString();

  }

} 