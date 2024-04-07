import { ProjectStructureType } from "../../contexts/ProjectStructureContext";
import { FileContentViewProps } from "../FileContentView";

type FileContentType = { content: string } & Pick<FileContentViewProps, "view">;

export const getSelectedFileIDContent = ({
  fileID,
  projectStructure,
}: {
  fileID: string | null;
  projectStructure: ProjectStructureType[];
}): FileContentType | null => {
  if (!fileID) return null;

  const selectedFile = projectStructure.find((file) => file.fileID === fileID);

  if (selectedFile) {
    return {
      content: selectedFile.content || "",
      view: "file-editor",
    };
  }

  return null;
};
