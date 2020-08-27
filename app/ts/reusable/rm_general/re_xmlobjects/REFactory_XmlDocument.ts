
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralXmlDocument = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AEFactory_XmlDocument");

import rmGeneralXmlDocument   = require("../../../../../app/ts/reusable/rm_general/re_xmlobjects/RE_XmlDocument");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_XmlDocument   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                       implements amGeneralXmlDocument.am_general.AEFactory_XmlDocument
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralXmlDocument.rm_general.RE_XmlDocument();
    }
  }
} 


