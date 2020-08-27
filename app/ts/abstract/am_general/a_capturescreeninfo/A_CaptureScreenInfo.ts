import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_CaptureScreenInfo extends amGeneral.am_general.A_Entity
  {
    isSavedToFinalPlace() : boolean 
    setSavedToFinalPlace(isSavedToFinalPlace : boolean) : void

    setImageSystemStorage(imgSystemStorage: string)  : void
    getImageSystemStorage() : string 

    setImageSystemPath(imgFinalPath)  : void
    getImageSystemPath() : string 

    setImageSystemName(imgFinalName : string)  : void
    getImageSystemName() : string 

    getImageSystemFullName() : string;


    setImageFinalStorage(imgFinalStorage: string)  : void
    getImageFinalStorage() : string 

    setImageFinalPath(imgFinalPath)  : void
    getImageFinalPath() : string 

    setImageFinalName(imgFinalName : string)  : void
    getImageFinalName() : string 

    getImageFinalFullName() : string;
  }

} 