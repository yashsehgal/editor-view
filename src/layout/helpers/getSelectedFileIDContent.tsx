import { ProjectStructureType } from "../../contexts/ProjectStructureContext";
import { FileFormatType } from "../../types/FileFormatType";
import { FileContentViewProps } from "../FileContentView";

type FileContentType = { content: string; language: FileFormatType } & Pick<
  FileContentViewProps,
  "view"
>;

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
      language: getFileFormat(selectedFile.name),
    };
  }

  return null;
};

export function getFileFormat(fileName: string): FileFormatType {
  const ext = fileName.split(".").pop();
  switch (ext) {
    case "js":
      return FileFormatType.js;
    case "ts":
      return FileFormatType.ts;
    case "jsx":
      return FileFormatType.jsx;
    case "tsx":
      return FileFormatType.tsx;
    case "html":
      return FileFormatType.html;
    case "css":
      return FileFormatType.css;
    case "scss":
      return FileFormatType.scss;
    case "md":
      return FileFormatType.md;
    case "markdown":
      return FileFormatType.markdown;
    case "yml":
      return FileFormatType.yml;
    case "yaml":
      return FileFormatType.yaml;
    case "graphql":
      return FileFormatType.graphql;
    case "gql":
      return FileFormatType.gql;
    case "xml":
      return FileFormatType.xml;
    case "sh":
      return FileFormatType.sh;
    case "bash":
      return FileFormatType.bash;
    case "shell":
      return FileFormatType.shell;
    case "sql":
      return FileFormatType.sql;
    case "java":
      return FileFormatType.java;
    case "py":
      return FileFormatType.py;
    case "python":
      return FileFormatType.python;
    case "rb":
      return FileFormatType.rb;
    case "ruby":
      return FileFormatType.ruby;
    case "php":
      return FileFormatType.php;
    case "go":
      return FileFormatType.go;
    case "swift":
      return FileFormatType.swift;
    case "kt":
      return FileFormatType.kt;
    case "kotlin":
      return FileFormatType.kotlin;
    case "rs":
      return FileFormatType.rs;
    case "rust":
      return FileFormatType.rust;
    case "c":
      return FileFormatType.c;
    case "cpp":
      return FileFormatType.cpp;
    case "cs":
      return FileFormatType.cs;
    case "csharp":
      return FileFormatType.csharp;
    case "vb":
      return FileFormatType.vb;
    case "lua":
      return FileFormatType.lua;
    case "r":
      return FileFormatType.r;
    case "dart":
      return FileFormatType.dart;
    default:
      return FileFormatType.plaintext;
  }
}
