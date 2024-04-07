import { useContext } from "react";
import { EditorLayoutContext } from "../../contexts/EditorLayoutContext";
import { getSelectedFileIDContent } from "../helpers/getSelectedFileIDContent";
import {
  ProjectStructureContext,
  ProjectStructureType,
} from "../../contexts/ProjectStructureContext";
import { CodeEditorWithSyntaxHighlighter } from "../../components/CodeEditorWithSyntaxHighlighter";

export interface FileEditorViewProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function FileEditorView() {
  const { selectedFileID } = useContext(EditorLayoutContext);
  const { projectStructure, setProjectStructure } = useContext(
    ProjectStructureContext
  );

  const handleContentChangeForFileID = (content: string) => {
    const newProjectStructure = projectStructure.map((file) => {
      if (file.fileID === selectedFileID) {
        return {
          ...file,
          content,
        };
      }
      return file;
    });

    setProjectStructure(newProjectStructure);
  };

  return (
    <div className="FileEditorView-container h-full w-full">
      <CodeEditorWithSyntaxHighlighter
        content={
          getSelectedFileIDContent({
            fileID: selectedFileID as string,
            projectStructure: projectStructure as ProjectStructureType[],
          })?.content || ""
        }
        setContent={handleContentChangeForFileID}
      />
    </div>
  );
}
