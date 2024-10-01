import { Editor as MonacoEditor } from "@monaco-editor/react";
import { FileFormatType } from "../types/FileFormatType";

interface CodeEditorWithSyntaxHighlighterProps {
  content: string;
  setContent: (content: string) => void;
  language: FileFormatType;
}

export function CodeEditorWithSyntaxHighlighter({
  content,
  setContent,
  language = FileFormatType.plaintext,
}: CodeEditorWithSyntaxHighlighterProps) {
  return (
    <MonacoEditor
      height="100%"
      defaultLanguage={language}
      language={language}
      value={content}
      onChange={(value, e) => setContent(value as string)}
    />
  );
}
