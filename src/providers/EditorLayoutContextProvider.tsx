import { useState } from "react";
import {
  EDITOR_LAYOUT_CONTEXT_INITIAL_STATE,
  EditorLayoutContext,
} from "../contexts/EditorLayoutContext";
import { UIModuleSlotType } from "../types/UIModuleSlotType";

export interface EditorLayoutContextProviderProps {
  children?: React.ReactNode;
}

export function EditorLayoutContextProvider({
  children,
}: EditorLayoutContextProviderProps) {
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

  return (
    <EditorLayoutContext.Provider
      value={{
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
      }}
    >
      {children}
    </EditorLayoutContext.Provider>
  );
}
