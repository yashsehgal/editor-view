import { IconX } from "@tabler/icons-react";
import { ProjectStructureType } from "../../contexts/ProjectStructureContext";
import { getFileTypeIcon } from "../../modules/helpers/getFileTypeIcon";
import { getFileExtension } from "../../helpers/FileIconMethod";
import { cn } from "../../dev-utils/cn";
import { MouseEvent, useContext } from "react";
import { EditorLayoutContext } from "../../contexts/EditorLayoutContext";

export interface OpenEditorTabProps {
  tab: Omit<ProjectStructureType, "inner">;
  isOpen: boolean;
}

export function OpenEditorTab(props: OpenEditorTabProps) {
  const { setSelectedFileID } = useContext(EditorLayoutContext);

  const handleFileSelection = (_e: MouseEvent<HTMLDivElement>) => {
    setSelectedFileID(props.tab.fileID);
  };

  return (
    <div
      className={cn(
        "OpenEditors-tab flex items-center gap-1.5 min-w-fit max-w-[180px] px-2 py-[2px] text-neutral-500 hover:text-black cursor-pointer select-none border-b-2",
        props.isOpen ? "border-b-blue-500" : "border-b-transparent"
      )}
      onClick={handleFileSelection}
      id={props.tab.fileID}
    >
      <span className="ProjectFolderNode-iconContainer">
        {getFileTypeIcon(getFileExtension(props.tab.name))}
      </span>
      <span className="OpenEditors-tab-name text-xs">{props.tab.name}</span>
      <button className="p-1 rounded hover:bg-neutral-200 flex items-center justify-center mt-[1px]">
        <IconX size={12} strokeWidth={2} />
      </button>
    </div>
  );
}
