import { useContext } from "react";
import { cn } from "../../dev-utils/cn";
import { getSelectedFileIDContent } from "../helpers/getSelectedFileIDContent";
import { FileEditorView } from "./FileEditorView";
import { EditorLayoutContext } from "../../contexts/EditorLayoutContext";
import {
  ProjectStructureContext,
  ProjectStructureType,
} from "../../contexts/ProjectStructureContext";

export type FileContentViewType = "file-editor" | "file-readonly";

export interface FileContentViewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  view?: FileContentViewType;
}

export function FileContentView({
  className,
  view = "file-readonly",
  ...args
}: FileContentViewProps) {
  const { selectedFileID } = useContext(EditorLayoutContext);
  const { projectStructure } = useContext(ProjectStructureContext);
  return (
    <div
      className={cn(
        "FileContentView-container bg-white h-full w-full overflow-scroll",
        className
      )}
      {...args}
    >
      {getSelectedFileIDContent({
        fileID: selectedFileID as string,
        projectStructure: projectStructure as ProjectStructureType[],
      })?.view === "file-editor" && <FileEditorView />}
      {getSelectedFileIDContent({
        fileID: selectedFileID as string,
        projectStructure: projectStructure as ProjectStructureType[],
      })?.view === "file-readonly" && (
        <div className="FileContentView-readonly">Readonly</div>
      )}
    </div>
  );
}
