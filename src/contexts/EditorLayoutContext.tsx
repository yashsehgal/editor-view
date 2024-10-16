import { createContext } from "react";
import { UIModuleSlotType } from "../types/UIModuleSlotType";
import { FileContentViewType } from "../layout/FileContentView";

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
 * @property {string | null} selectedFileID - File ID of the selected file
 * @property {Function} setSelectedFileID - Function to set the file ID of the selected file
 * @property {FileContentViewType} FileContentViewState - State for the FileContentView
 * @property {Function} setFileContentViewState - Function to set the FileContentView state
 * @property {string[]} UIOpenEditorTabs - Open editor tabs
 * @property {Function} setUIOpenEditorTabs - Function to set the open editor tabs
 */
export type EditorLayoutContextType = {
  // State for the FileContentView
  FileContentViewState: FileContentViewType;
  // Function to set the FileContentView state
  setFileContentViewState: (view: FileContentViewType) => void;
  // File ID of the selected file
  selectedFileID: string | null;
  // Function to set the file ID of the selected file
  setSelectedFileID: (fileID: string) => void;
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
  // Open editor tabs
  UIOpenEditorTabs: string[];
  // Function to set the open editor tabs
  setUIOpenEditorTabs: (tabs: string[]) => void;
};

/**
 * Initial state for the EditorLayoutContext
 * @type {EditorLayoutContextType}
 * @constant
 * @default
 */
export const EDITOR_LAYOUT_CONTEXT_INITIAL_STATE: EditorLayoutContextType = {
  FileContentViewState: "file-readonly",
  setFileContentViewState: () => {},
  selectedFileID: null,
  setSelectedFileID: () => {},
  UISlotLeft: "project-structure-tree",
  setUISlotLeft: () => {},
  UISlotLeftVisibility: true,
  setUISlotLeftVisibilty: () => {},
  UISlotRight: "none",
  setUISlotRight: () => {},
  UISlotRightVisibility: false,
  setUISlotRightVisibilty: () => {},
  UISlotBottom: "none",
  setUISlotBottom: () => {},
  UISlotBottomVisibility: false,
  setUISlotBottomVisibilty: () => {},
  UIOpenEditorTabs: [],
  setUIOpenEditorTabs: () => {},
} satisfies EditorLayoutContextType;

export const EditorLayoutContext = createContext<EditorLayoutContextType>({
  ...EDITOR_LAYOUT_CONTEXT_INITIAL_STATE,
});
