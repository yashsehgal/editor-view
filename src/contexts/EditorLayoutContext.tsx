import { createContext } from "react";
import { UIModuleSlotType } from "../types/UIModuleSlotType";

/**
 * EditorLayoutContextType is the type for the EditorLayoutContext
 * @type {EditorLayoutContextType}
 * @property {UIModuleSlotType} UISlotLeft - Slot state for UISlotLeft
 * @property {Function} setUISlotLeft - Function to set the slot state for UISlotLeft
 * @property {boolean} UISlotLeftVisibility - Slot visibility state for UISlotLeft
 * @property {Function} setUISlotLeftVisibilty - Function to set the visibility state for UISlotLeft
 * @property {UIModuleSlotType} UISlotRight - Slot state for UISlotRight
 * @property {Function} setUISlotRight - Function to set the slot state for UISlotRight
 * @property {boolean} UISlotRightVisibility - Slot visibility state for UISlotRight
 * @property {Function} setUISlotRightVisibilty - Function to set the visibility state for UISlotRight
 * @property {UIModuleSlotType} UISlotBottom - Slot state for UISlotBottom
 * @property {Function} setUISlotBottom - Function to set the slot state for UISlotBottom
 * @property {boolean} UISlotBottomVisibility - Slot visibility state for UISlotBottom
 * @property {Function} setUISlotBottomVisibilty - Function to set the visibility state for UISlotBottom
 */
export type EditorLayoutContextType = {
  // Slot state for UISlotLeft
  UISlotLeft: UIModuleSlotType;
  // Function to set the slot state for UISlotLeft
  setUISlotLeft: (slot: UIModuleSlotType) => void;
  // Slot visibility state for UISlotLeft
  UISlotLeftVisibility: boolean;
  // Function to set the visibility state for UISlotLeft
  setUISlotLeftVisibilty: (visible: boolean) => void;
  // Slot state for UISlotRight
  UISlotRight: UIModuleSlotType;
  // Function to set the slot state for UISlotRight
  setUISlotRight: (slot: UIModuleSlotType) => void;
  // Slot visibility state for UISlotRight
  UISlotRightVisibility: boolean;
  // Function to set the visibility state for UISlotRight
  setUISlotRightVisibilty: (visible: boolean) => void;
  // Slot state for UISlotBottom
  UISlotBottom: UIModuleSlotType;
  // Function to set the slot state for UISlotBottom
  setUISlotBottom: (slot: UIModuleSlotType) => void;
  // Slot visibility state for UISlotBottom
  UISlotBottomVisibility: boolean;
  // Function to set the visibility state for UISlotBottom
  setUISlotBottomVisibilty: (visible: boolean) => void;
};

/**
 * Initial state for the EditorLayoutContext
 * @type {EditorLayoutContextType}
 * @constant
 * @default
 */
export const EDITOR_LAYOUT_CONTEXT_INITIAL_STATE: EditorLayoutContextType = {
  UISlotLeft: "file-tree",
  setUISlotLeft: () => {},
  UISlotLeftVisibility: true,
  setUISlotLeftVisibilty: () => {},
  UISlotRight: "file-outline",
  setUISlotRight: () => {},
  UISlotRightVisibility: false,
  setUISlotRightVisibilty: () => {},
  UISlotBottom: "terminal",
  setUISlotBottom: () => {},
  UISlotBottomVisibility: false,
  setUISlotBottomVisibilty: () => {},
};

export const EditorLayoutContext = createContext<EditorLayoutContextType>({
  ...EDITOR_LAYOUT_CONTEXT_INITIAL_STATE,
});
