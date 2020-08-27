import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_coreservices
{
  export enum AE_NextChildSelectionType {
    NextChildSelectionType_None = 0,
    NextChildSelectionType_OneAfterTheOther_NoLoop = 1,
    NextChildSelectionType_OneAfterTheOther_NoLoop_WithDiffusion = 2,
    NextChildSelectionType_OneAfterTheOther_Loop = 3,
    NextChildSelectionType_OneAfterTheOther_Loop_WithDiffusion = 4,
    NextChildSelectionType_Random_NoLoop = 5,
    NextChildSelectionType_Random_NoLoop_WithDiffusion = 6,
    NextChildSelectionType_Random_Loop = 7,
    NextChildSelectionType_Random_Loop_WithDiffusion = 8,
    NextChildSelectionType_Select_fromTheBegining_ByPriority = 9,
    NextChildSelectionType_Select_usingChildAddressFromEvent = 10,
    NextChildSelectionType_Random_usingTagRules = 11,
    NextChildSelectionType_ChooseRandom_OnlyOne_ByTagId
  }

} 