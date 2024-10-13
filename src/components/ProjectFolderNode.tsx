import React, {
  ChangeEvent,
  forwardRef,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "../dev-utils/cn";
import {
  FileIconType,
  getFileTypeIcon,
} from "../modules/helpers/getFileTypeIcon";

import { IconFolderFilled, IconChevronDown } from "@tabler/icons-react";
import {
  ProjectStructureContext,
  ProjectStructureType,
} from "../contexts/ProjectStructureContext";
import { EditorLayoutContext } from "../contexts/EditorLayoutContext";

export interface ProjectFolderNodeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fileName: string;
  isFolder?: boolean;
  innerFiles?: ProjectStructureType[];
  currentOrder?: number;
  fileID: string;
}

export function ProjectFolderNode({
  className,
  isFolder = false,
  fileName,
  fileID,
  innerFiles = [],
  currentOrder = 0,
  ...args
}: ProjectFolderNodeProps) {
  const [extenstion, setExtension] = useState<string | null>(null);
  const [isFolderCollapsed, setIsFolderCollapsed] = useState<boolean>(false);
  const [fileNameEditMode, setFileNameEditMode] = useState<boolean>(false);
  const [newNodeName, setNewNodeName] = useState<string>(fileName);

  const { selectedFileID, setSelectedFileID } = useContext(EditorLayoutContext);
  const { projectStructure, setProjectStructure } = useContext(
    ProjectStructureContext
  );

  // Switch the folder node to edit mode, when the user double clicks on the folder node
  const switchFolderNodeToEditMode = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFileNameEditMode(true);
  };

  // Switch the folder node to idle mode
  const switchFolderNodeToIdleMode = (_e: ChangeEvent<HTMLInputElement>) => {
    handleFolderNodeNameUpdate();
  };

  const handleFolderNodeNameUpdate = () => {
    if (!newNodeName) {
      setNewNodeName(fileName);
      setFileNameEditMode(false);
      return;
    }
    const updateNodeNameRecursively = (
      files: ProjectStructureType[]
    ): ProjectStructureType[] => {
      return files.map((file) => {
        if (file.fileID === fileID) {
          const nameParts = newNodeName.split("/");
          if (nameParts.length > 1) {
            // Create a new folder structure
            const newFolder: ProjectStructureType = {
              name: nameParts[0],
              fileID: file.fileID,
              inner: [
                {
                  name: nameParts[nameParts.length - 1],
                  fileID: file.fileID,
                  content: file.content,
                },
              ],
            };

            // Create nested folders if necessary
            let currentFolder = newFolder;
            for (let i = 1; i < nameParts.length - 1; i++) {
              const nestedFolder: ProjectStructureType = {
                name: nameParts[i],
                fileID: `${file.fileID}-${i}`,
                inner: [],
              };
              currentFolder.inner!.push(nestedFolder);
              currentFolder = nestedFolder;
            }

            return newFolder;
          } else {
            // Simple rename
            return { ...file, name: newNodeName };
          }
        } else if (file.inner) {
          // Recurse into inner files
          return { ...file, inner: updateNodeNameRecursively(file.inner) };
        }
        return file;
      });
    };

    const updatedProjectStructure = updateNodeNameRecursively(projectStructure);

    // Safe to assume that the updatedProjectStructure is of type ProjectStructureType[]
    // because the projectStructure is of type ProjectStructureType[]
    // After the update of projectStructure, toggle the fileNameEditMode to false
    setProjectStructure(updatedProjectStructure as ProjectStructureType[]);
    setFileNameEditMode(false);
  };

  // Handle the keydown event for the folder node name input
  const handleFolderNodeNameKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" || e.key === "Escape" || e.key === "Tab") {
      e.preventDefault();
      handleFolderNodeNameUpdate();
    }
  };

  const handleFolderNodeNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewNodeName(e.target.value as string);
  };

  useEffect(() => {
    console.log("new name value after state change", newNodeName);
  }, [newNodeName]);

  // Side-effect to update the extension state, when the fileName and isFolder state changes
  useEffect(() => {
    if (!isFolder) {
      const ext = fileName.split(".").pop();
      if (ext) {
        setExtension(ext as FileIconType);
      }
    }
  }, [fileName, isFolder]);

  return (
    <>
      <button
        className={cn(
          "ProjectFolderNode-container flex items-center justify-between w-full px-2.5 text-neutral-700",
          "hover:bg-neutral-200",
          className
        )}
        onClick={() => {
          if (isFolder) {
            setIsFolderCollapsed(!isFolderCollapsed);
          } else if (!isFolder) {
            if (fileID !== selectedFileID) {
              setSelectedFileID(fileID);
            }
          }
        }}
        onDoubleClick={switchFolderNodeToEditMode}
        {...args}
      >
        <div
          className="ProjectFolderNode-fileName-iconContainer-wrapper flex gap-1.5 items-center justify-start w-full"
          style={{ marginLeft: `${currentOrder * 10}px` }}
        >
          <span className="ProjectFolderNode-iconContainer">
            {!isFolder ? (
              getFileTypeIcon(extenstion)
            ) : (
              <IconFolderFilled width={14} height={24} />
            )}
          </span>
          {fileNameEditMode ? (
            <ExistingFolderNodeRenameInput
              value={newNodeName}
              onChange={handleFolderNodeNameChange}
              onBlur={switchFolderNodeToIdleMode}
              onKeyDown={handleFolderNodeNameKeyDown}
            />
          ) : (
            <span className="ProjectFolderNode-fileName text-sm font-medium tracking-tight">
              {fileName}
            </span>
          )}
        </div>
        {isFolder && (
          <div className="ProjectFolderNode-folderIndicator chevron-wrapper">
            <IconChevronDown
              size={16}
              className={cn("duration-200", !isFolderCollapsed && "rotate-180")}
            />
          </div>
        )}
      </button>
      {isFolder &&
        innerFiles.length > 0 &&
        (isFolderCollapsed ? (
          <></>
        ) : (
          <>
            {innerFiles.map((file, index) => (
              <ProjectFolderNode
                key={index}
                fileName={file.name}
                isFolder={!!file.inner}
                innerFiles={file.inner}
                fileID={file.fileID}
                currentOrder={currentOrder + 2}
              />
            ))}
          </>
        ))}
    </>
  );
}

interface ExistingFolderNodeRenameInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const ExistingFolderNodeRenameInput = forwardRef<
  HTMLInputElement,
  ExistingFolderNodeRenameInputProps
>(({ className, ...props }, _ref) => {
  const existingFolderNodeRenameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (existingFolderNodeRenameInputRef.current) {
      existingFolderNodeRenameInputRef.current.focus();
      existingFolderNodeRenameInputRef.current.select();
    }
  }, [existingFolderNodeRenameInputRef]);

  return (
    <input
      ref={existingFolderNodeRenameInputRef}
      className={cn(
        "ProjectFolderNode-renameInput bg-transparent text-sm font-medium tracking-tighter w-full py-0.5 px-1",
        className
      )}
      {...props}
    />
  );
});
