import { useState } from "react";
import {
  EDITOR_LAYOUT_CONTEXT_INITIAL_STATE,
  EditorLayoutContext,
} from "../contexts/EditorLayoutContext";
import { UIModuleSlotType } from "../types/UIModuleSlotType";
import { FileContentViewType } from "../layout/FileContentView";

export interface EditorLayoutContextProviderProps {
  children?: React.ReactNode;
}

export function EditorLayoutContextProvider({
  children,
}: EditorLayoutContextProviderProps) {
  const [FileContentViewState, setFileContentViewState] =
    useState<FileContentViewType>(
      EDITOR_LAYOUT_CONTEXT_INITIAL_STATE.FileContentViewState
    );
  const [UISlotLeft, setUISlotLeft] = useState<UIModuleSlotType>(
    EDITOR_LAYOUT_CONTEXT_INITIAL_STATE.UISlotLeft
  );
  const [UISlotLeftVisibility, setUISlotLeftVisibilty] = useState<boolean>(
    EDITOR_LAYOUT_CONTEXT_INITIAL_STATE.UISlotLeftVisibility
  );
  const [UISlotRight, setUISlotRight] = useState<UIModuleSlotType>(
    EDITOR_LAYOUT_CONTEXT_INITIAL_STATE.UISlotRight
  );
  const [UISlotRightVisibility, setUISlotRightVisibilty] = useState<boolean>(
    EDITOR_LAYOUT_CONTEXT_INITIAL_STATE.UISlotRightVisibility
  );
  const [UISlotBottom, setUISlotBottom] = useState<UIModuleSlotType>(
    EDITOR_LAYOUT_CONTEXT_INITIAL_STATE.UISlotBottom
  );
  const [UISlotBottomVisibility, setUISlotBottomVisibilty] = useState<boolean>(
    EDITOR_LAYOUT_CONTEXT_INITIAL_STATE.UISlotBottomVisibility
  );
  const [selectedFileID, setSelectedFileID] = useState<string | null>(
    EDITOR_LAYOUT_CONTEXT_INITIAL_STATE.selectedFileID
  );
  const [UIOpenEditorTabs, setUIOpenEditorTabs] = useState<string[]>(
    EDITOR_LAYOUT_CONTEXT_INITIAL_STATE.UIOpenEditorTabs
  );

  return (
    <EditorLayoutContext.Provider
      value={{
        FileContentViewState,
        setFileContentViewState,
        selectedFileID,
        setSelectedFileID,
        UISlotLeft,
        setUISlotLeft,
        UISlotLeftVisibility,
        setUISlotLeftVisibilty,
        UISlotRight,
        setUISlotRight,
        UISlotRightVisibility,
        setUISlotRightVisibilty,
        UISlotBottom,
        setUISlotBottom,
        UISlotBottomVisibility,
        setUISlotBottomVisibilty,
        UIOpenEditorTabs,
        setUIOpenEditorTabs,
      }}
    >
      {children}
    </EditorLayoutContext.Provider>
  );
}
