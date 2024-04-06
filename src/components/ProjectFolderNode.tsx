import { useEffect, useState } from "react";
import { cn } from "../dev-utils/cn";
import {
  FileIconType,
  getFileTypeIcon,
} from "../modules/helpers/getFileTypeIcon";

export interface ProjectFolderNodeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fileName: string;
  isFolder?: boolean;
}

export function ProjectFolderNode({
  className,
  isFolder = false,
  fileName,
  ...args
}: ProjectFolderNodeProps) {
  const [extenstion, setExtension] = useState<string | null>(null);
  useEffect(() => {
    if (!isFolder) {
      const ext = fileName.split(".").pop();
      if (ext) {
        setExtension(ext as FileIconType);
      }
    }
  }, [fileName]);
  return (
    <button
      className={cn(
        "ProjectFolderNode-container flex flex-row items-center gap-1.5 w-full px-2.5 text-neutral-700",
        "hover:bg-neutral-200",
        className
      )}
      {...args}
    >
      <span className="ProjectFolderNode-iconContainer">
        {getFileTypeIcon(extenstion)}
      </span>
      <span className="ProjectFolderNode-fileName text-sm font-medium tracking-tight">
        {fileName}
      </span>
    </button>
  );
}
