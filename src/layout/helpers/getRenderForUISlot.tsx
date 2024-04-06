import { UIModuleSlotType } from "../../types/UIModuleSlotType";
import { ProjectStructureTree } from "../../modules/ProjectStructureTree";

export function getRenderForUISlot(slot: UIModuleSlotType) {
  switch (slot) {
    case "project-structure-tree":
      return <ProjectStructureTree />;
    case "terminal":
    //   return import("../../modules/Terminal");
    case "file-outline":
    //   return import("../../modules/FileOutline");
    case "git-manager":
    //   return import("../../modules/GitManager");
    case "git-commit-timeline":
    //   return import("../../modules/GitCommitTimeline");
    case "none":
      return <></>;
  }
}
