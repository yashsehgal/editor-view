import { useContext } from "react";
import { ProjectStructureType } from "../../contexts/ProjectStructureContext";
import { OpenEditorTab } from "./OpenEditorTab";
import { EditorLayoutContext } from "../../contexts/EditorLayoutContext";

export interface OpenEditorsProps {
  tabs: Omit<ProjectStructureType, "inner">[];
}

export function OpenEditors(props: OpenEditorsProps) {
  const { selectedFileID } = useContext(EditorLayoutContext);

  if (props.tabs.length === 0) {
    return null;
  }

  return (
    <div className="OpenEditors-container w-full border-b">
      <div className="OpenEditors-tabs-wrapper flex items-center justify-start">
        {props.tabs.map((tab) => {
          const IS_TAB_OPEN = tab.fileID === selectedFileID;
          return (
            <OpenEditorTab tab={tab} key={tab.fileID} isOpen={IS_TAB_OPEN} />
          );
        })}
      </div>
    </div>
  );
}
