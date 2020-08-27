import amGeneralTimeZone     = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_TimeZone extends rmGeneralEntity.rm_general.R_Entity
                          implements amGeneralTimeZone.am_general.A_TimeZone
  {
    //--- properties
    _continent: string;
    _country: string;
    _city: string;


    //----------- constructor 
    constructor()  
    {  
      super();

      this._continent = "";
      this._country   = "";
      this._city      = "";
    }

    //---------------------
    public setContinent(continent: string)   : void
    {
       this._continent = continent;
    }

    //----------------------
    public getContinent() : string
    {
      return this._continent;
    }

    //---------------------
    public setCountry(country: string)   : void
    {
       this._country = country;
    }

    //----------------------
    public getCountry() : string
    {
      return this._country;
    }

    //---------------------
    public setCity(city: string)   : void
    {
       this._city = city;
    }

    //----------------------
    public getCity() : string
    {
      return this._city;
    }

    //----------------------
    public getAsString() : string
    {
       return this._continent + " - " + this._country + " - " + this._city ;
    }
  }   
} 