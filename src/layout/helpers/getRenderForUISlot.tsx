import { UIModuleSlotType } from "../../types/UIModuleSlotType";
import { ProjectStructureTree } from "../../modules/ProjectStructureTree";

export function getRenderForUISlot(slot: UIModuleSlotType) {
  switch (slot) {
    case "project-structure-tree":
      return <ProjectStructureTree />;
    case "terminal":
      //   return import("../../modules/Terminal");
      break;
    case "file-outline":
      //   return import("../../modules/FileOutline");
      break;
    case "git-manager":
      //   return import("../../modules/GitManager");
      break;
    case "git-commit-timeline":
      //   return import("../../modules/GitCommitTimeline");
      break;
    case "none":
      return <></>;
  }
}
