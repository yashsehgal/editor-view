import { useEffect, useState } from "react";
import { cn } from "../dev-utils/cn";
import {
  FileIconType,
  getFileTypeIcon,
} from "../modules/helpers/getFileTypeIcon";

import { IconFolderFilled, IconChevronDown } from "@tabler/icons-react";
import { ProjectStructureType } from "../contexts/ProjectStructureContext";

export interface ProjectFolderNodeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fileName: string;
  isFolder?: boolean;
  innerFiles?: ProjectStructureType[];
  currentOrder?: number;
}

export function ProjectFolderNode({
  className,
  isFolder = false,
  fileName,
  innerFiles = [],
  currentOrder = 0,
  ...args
}: ProjectFolderNodeProps) {
  const [extenstion, setExtension] = useState<string | null>(null);
  const [isFolderCollapsed, setIsFolderCollapsed] = useState<boolean>(false);

  useEffect(() => {
    if (!isFolder) {
      const ext = fileName.split(".").pop();
      if (ext) {
        setExtension(ext as FileIconType);
      }
    }
  }, [fileName]);

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
          }
        }}
        {...args}
      >
        <div
          className="ProjectFolderNode-fileName-iconContainer-wrapper flex gap-1.5 items-center justify-start"
          style={{ paddingLeft: `${currentOrder}px` }}
        >
          <span className="ProjectFolderNode-iconContainer">
            {!isFolder ? (
              getFileTypeIcon(extenstion)
            ) : (
              <IconFolderFilled width={14} height={24} />
            )}
          </span>
          <span className="ProjectFolderNode-fileName text-sm font-medium tracking-tight">
            {fileName}
          </span>
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
                className="pl-4"
                currentOrder={currentOrder + 2}
              />
            ))}
          </>
        ))}
    </>
  );
}
