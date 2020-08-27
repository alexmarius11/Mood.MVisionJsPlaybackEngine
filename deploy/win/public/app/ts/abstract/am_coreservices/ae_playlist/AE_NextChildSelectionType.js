define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var am_coreservices;
    (function (am_coreservices) {
        var AE_NextChildSelectionType;
        (function (AE_NextChildSelectionType) {
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_None"] = 0] = "NextChildSelectionType_None";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_OneAfterTheOther_NoLoop"] = 1] = "NextChildSelectionType_OneAfterTheOther_NoLoop";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_OneAfterTheOther_NoLoop_WithDiffusion"] = 2] = "NextChildSelectionType_OneAfterTheOther_NoLoop_WithDiffusion";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_OneAfterTheOther_Loop"] = 3] = "NextChildSelectionType_OneAfterTheOther_Loop";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_OneAfterTheOther_Loop_WithDiffusion"] = 4] = "NextChildSelectionType_OneAfterTheOther_Loop_WithDiffusion";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_Random_NoLoop"] = 5] = "NextChildSelectionType_Random_NoLoop";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_Random_NoLoop_WithDiffusion"] = 6] = "NextChildSelectionType_Random_NoLoop_WithDiffusion";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_Random_Loop"] = 7] = "NextChildSelectionType_Random_Loop";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_Random_Loop_WithDiffusion"] = 8] = "NextChildSelectionType_Random_Loop_WithDiffusion";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_Select_fromTheBegining_ByPriority"] = 9] = "NextChildSelectionType_Select_fromTheBegining_ByPriority";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_Select_usingChildAddressFromEvent"] = 10] = "NextChildSelectionType_Select_usingChildAddressFromEvent";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_Random_usingTagRules"] = 11] = "NextChildSelectionType_Random_usingTagRules";
            AE_NextChildSelectionType[AE_NextChildSelectionType["NextChildSelectionType_ChooseRandom_OnlyOne_ByTagId"] = 12] = "NextChildSelectionType_ChooseRandom_OnlyOne_ByTagId";
        })(AE_NextChildSelectionType = am_coreservices.AE_NextChildSelectionType || (am_coreservices.AE_NextChildSelectionType = {}));
    })(am_coreservices = exports.am_coreservices || (exports.am_coreservices = {}));
});
//# sourceMappingURL=AE_NextChildSelectionType.js.map