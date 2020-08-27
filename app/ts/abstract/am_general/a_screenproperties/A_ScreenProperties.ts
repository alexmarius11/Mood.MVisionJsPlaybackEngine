import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_ScreenProperties extends amGeneral.am_general.A_Entity
  {

    setBacklight(level: number) : void;
    getBacklight() : number;

    setContrast(level: number) : void;
    getContrast() : number;

    setBrightness(level: number) : void;
    getBrightness() : number;

    setColor(level: number) : void;
    getColor() : number;

    setTint(level: number) : void;
    getTint() : number;


    //------
    setScreenLeft(screenLeft: number) : void;
    getScreenLeft() : number;

    setScreenTop(screenTop: number) : void;
    getScreenTop() : number;

    setScreenRight(screenRight: number) : void;
    getScreenRight() : number;
    
    setScreenBottom(screenBottom: number) : void;
    getScreenBottom() : number;

 }

} 