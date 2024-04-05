import { useContext } from "react";
import { cn } from "../dev-utils/cn";
import { checkIfUIModuleActive } from "../helpers/LayoutMethods";
import { UIModuleSlotType } from "../types/UIModuleSlotType";
import {
  IconFile,
  IconTimeline,
  IconGitFork,
  IconSitemap,
  IconTerminal,
} from "@tabler/icons-react";
import { EditorLayoutContext } from "../contexts/EditorLayoutContext";

export const EditorSidebarOptions: Record<
  Exclude<UIModuleSlotType, "none">,
  {
    optionIcon: React.ReactNode;
    slot: "left" | "bottom" | "right";
    label: string;
  }
> = {
  "project-structure-tree": {
    optionIcon: <IconFile width={24} />,
    slot: "left",
    label: "Project Structure",
  },
  "git-manager": {
    optionIcon: <IconGitFork width={24} />,
    slot: "left",
    label: "Git Manager",
  },
  "file-outline": {
    optionIcon: <IconSitemap width={24} />,
    slot: "right",
    label: "File Outline",
  },
  "git-commit-timeline": {
    optionIcon: <IconTimeline width={24} />,
    slot: "left",
    label: "Git Commit Timeline",
  },
  terminal: {
    optionIcon: <IconTerminal width={24} />,
    slot: "bottom",
    label: "Terminal",
  },
};

export function EditorSidebar() {
  const {
    UISlotLeft: left,
    UISlotRight: right,
    UISlotBottom: bottom,
    setUISlotLeft,
    setUISlotRight,
    setUISlotBottom,
  } = useContext(EditorLayoutContext);
  return (
    <aside className="EditorSidebar-container w-full h-full bg-neutral-100 px-2 py-4">
      <div className="flex flex-col gap-4">
        {Object.keys(EditorSidebarOptions).map((option) => (
          <button
            key={option}
            className={cn(
              "EditorSidebar-option flex items-center justify-center h-fit",
              checkIfUIModuleActive(
                option as Exclude<UIModuleSlotType, "none">,
                {
                  left,
                  right,
                  bottom,
                }
              )
                ? "text-neutral-800"
                : "text-neutral-400 hover:text-neutral-500"
            )}
            title={
              EditorSidebarOptions[option as Exclude<UIModuleSlotType, "none">]
                .label
            }
            onClick={() => {
              if (
                EditorSidebarOptions[
                  option as Exclude<UIModuleSlotType, "none">
                ].slot === "left"
              ) {
                if (left === option) {
                  setUISlotLeft("none");
                } else {
                  setUISlotLeft(option as UIModuleSlotType);
                }
              } else if (
                EditorSidebarOptions[
                  option as Exclude<UIModuleSlotType, "none">
                ].slot === "right"
              ) {
                if (right === option) {
                  setUISlotRight("none");
                } else {
                  setUISlotRight(option as UIModuleSlotType);
                }
              } else {
                if (bottom === option) {
                  setUISlotBottom("none");
                } else {
                  setUISlotBottom(option as UIModuleSlotType);
                }
              }
            }}
          >
            {
              EditorSidebarOptions[option as Exclude<UIModuleSlotType, "none">]
                .optionIcon
            }
          </button>
        ))}
      </div>
    </aside>
  );
}
