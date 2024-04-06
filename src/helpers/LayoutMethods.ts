import { UIModuleSlotType } from "../types/UIModuleSlotType";

export function checkIfUIModuleActive(
  module: UIModuleSlotType,
  UISlotState: {
    left: UIModuleSlotType;
    right: UIModuleSlotType;
    bottom: UIModuleSlotType;
  }
) {
  return (
    module === UISlotState.left ||
    module === UISlotState.right ||
    module === UISlotState.bottom
  );
}
