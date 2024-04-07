import React, { CSSProperties, useEffect, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { cn } from "../dev-utils/cn";

export interface CodeEditorWithSyntaxHighlighterProps {
  content: string;
  setContent: (content: string) => void;
  language?: string;
  style?: CSSProperties;
}

export function CodeEditorWithSyntaxHighlighter({
  content,
  setContent,
  style,
  language = "js",
}: CodeEditorWithSyntaxHighlighterProps) {
  const [RefElements, setRefElements] = useState<{
    codeEditor: HTMLTextAreaElement | null;
    highlighter: HTMLDivElement | null;
  }>({
    codeEditor: null,
    highlighter: null,
  });

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleActiveLineHighlighter = () => {
    if (
      window &&
      typeof window !== "undefined" &&
      RefElements.highlighter &&
      RefElements.codeEditor
    ) {
      let highLigher = RefElements.highlighter;
      let codeEditor: HTMLTextAreaElement = RefElements.codeEditor;

      let x = codeEditor.selectionStart;
      let str: string = "" as string;
      for (let i = 0; i <= x; i++) {
        let ch = codeEditor.value[i];
        let chCode: number = codeEditor.value.charCodeAt(i) as number;
        if (typeof chCode === "number" && chCode === 10) {
          ch = "<br>";
        }
        str += (str + ch) as string;
      }
      highLigher.innerHTML = str as string;
    }
  };

  useEffect(() => {
    if (window && typeof window !== "undefined") {
      setRefElements({
        codeEditor: document.getElementById(
          "codeEditor-textarea"
        ) as HTMLTextAreaElement,
        highlighter: document.getElementById(
          "activeLineHighlighter"
        ) as HTMLDivElement,
      });

      let codeEditorWithEventConfig = RefElements.codeEditor;
      codeEditorWithEventConfig?.addEventListener(
        "keyup",
        handleActiveLineHighlighter
      );
      codeEditorWithEventConfig?.addEventListener(
        "click",
        handleActiveLineHighlighter
      );
      setRefElements({ ...RefElements, codeEditor: codeEditorWithEventConfig });
    }
  }, []);

  return (
    <div
      className={cn(
        "CodeEditorWithSyntaxHighlighter-wrapper font-mono relative w-full"
      )}
    >
      <div
        className="CodeEditor-activeLineHighlighter absolute bg-black text-transparent text-[14px] w-full"
        id="activeLineHighlighter"
      ></div>
      <CodeEditor
        id="codeEditor-textarea"
        value={content}
        language={language}
        onChange={handleContentChange}
        padding={16}
        autoFocus
        spellCheck={false}
        className="CodeEditor-textarea"
        style={{
          color: "#888888",
          backgroundColor: "transparent",
          position: "relative",
          resize: "none",
          fontSize: "14px",
          width: "100%",
          fontWeight: "600",
          ...style,
        }}
      />
    </div>
  );
}
