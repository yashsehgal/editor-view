import { Editor as MonacoEditor } from "@monaco-editor/react";

interface CodeEditorWithSyntaxHighlighterProps {
  content: string;
  setContent: (content: string) => void;
}

export function CodeEditorWithSyntaxHighlighter({
  content,
  setContent,
}: CodeEditorWithSyntaxHighlighterProps) {
  return (
    <MonacoEditor
      height="100%"
      defaultLanguage="javascript"
      value={content}
      onChange={(value, e) => setContent(value as string)}
    />
  );
}
