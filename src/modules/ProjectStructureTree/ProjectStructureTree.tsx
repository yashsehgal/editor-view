import { useContext, useEffect, useState } from "react";
import { CollapsibleFeatureSection } from "../../components/CollapsibleFeatureSection";
import {
  ProjectStructureContext,
  ProjectStructureType,
} from "../../contexts/ProjectStructureContext";
import { ProjectFolderNode } from "../../components/ProjectFolderNode";
import { IconFilePlus, IconFolderPlus, IconFolder } from "@tabler/icons-react";
import { cn } from "../../dev-utils/cn";
import { FileIconType, getFileTypeIcon } from "../helpers/getFileTypeIcon";
import { EditorLayoutContext } from "../../contexts/EditorLayoutContext";

import { v4 as uuidv4 } from "uuid";

export function ProjectStructureTree() {
  const { projectName, projectStructure, setProjectStructure } = useContext(
    ProjectStructureContext
  );
  const { setSelectedFileID } = useContext(EditorLayoutContext);
  const [showCreateNewFile, setShowCreateNewFile] = useState<boolean>(false);
  const [showCreateNewFolder, setShowCreateNewFolder] =
    useState<boolean>(false);

  const handleCreateNewFile = (newFileName: string) => {
    setShowCreateNewFile(false);

    if (!newFileName) return;

    if (newFileName.includes("/")) {
      let updatedProjectStructure = [...projectStructure];
      const pathSegments = newFileName.split("/");
      const fileName = pathSegments.pop();

      // Check if the input is something like "components/"
      if (!fileName) {
        updatedProjectStructure.push({
          name: pathSegments[0],
          content: "",
          fileID: uuidv4() as string,
        });
        setProjectStructure(updatedProjectStructure);
        return;
      }

      let currentFolder: ProjectStructureType[] = updatedProjectStructure;
      for (const folderName of pathSegments) {
        const folderIndex = currentFolder.findIndex(
          (item) => item.name === folderName
        );
        if (folderIndex > -1) {
          currentFolder = currentFolder[folderIndex].inner || [];
        } else {
          const newFolder = {
            name: folderName,
            inner: [],
            content: "",
            fileID: uuidv4() as string,
          };
          currentFolder.push(newFolder);
          currentFolder = newFolder.inner;
        }
      }
      currentFolder.push({
        name: fileName!,
        fileID: uuidv4() as string,
      });
      setProjectStructure(updatedProjectStructure);
    } else {
      let updatedProjectStructure = [...projectStructure];
      updatedProjectStructure.push({
        name: newFileName,
        content: "",
        fileID: uuidv4() as string,
      });
      setProjectStructure(updatedProjectStructure);
      setSelectedFileID(updatedProjectStructure.slice(-1)[0].fileID);
    }
  };

  const handleCreateNewFolder = (newFolderName: string) => {
    setShowCreateNewFolder(false);

    if (!newFolderName || newFolderName.trim() === "") return;

    let updatedProjectStructure = [...projectStructure];
    const pathSegments = newFolderName.split("/").filter(Boolean); // Filter out empty segments
    const folderName = pathSegments.pop();
    let currentFolder: ProjectStructureType[] = updatedProjectStructure;
    for (const segment of pathSegments) {
      const folderIndex = currentFolder.findIndex(
        (item) => item.name === segment
      );
      if (folderIndex > -1) {
        currentFolder = currentFolder[folderIndex].inner || [];
      } else {
        const newFolder = {
          name: segment,
          inner: [],
          fileID: uuidv4() as string,
        };
        currentFolder.push(newFolder);
        currentFolder = newFolder.inner;
      }
    }
    if (folderName) {
      currentFolder.push({
        name: folderName,
        inner: [],
        fileID: uuidv4() as string,
      });
    }
    setProjectStructure(updatedProjectStructure);
  };

  return (
    <CollapsibleFeatureSection
      sectionTitle={projectName}
      actions={[
        {
          name: "Create new folder",
          onClick: () => setShowCreateNewFolder(true),
          icon: <IconFolderPlus size={14} />,
        },
        {
          name: "Create new file",
          onClick: () => setShowCreateNewFile(true),
          icon: <IconFilePlus size={14} />,
        },
      ]}
    >
      <div
        className="ProjectStructureTree-container h-full"
        onDoubleClick={() => setShowCreateNewFile(true)}
      >
        <ProjectFolderTree />
        {showCreateNewFile ? (
          <CreateNewFileInput handleCreateNewFile={handleCreateNewFile} />
        ) : (
          <></>
        )}
        {showCreateNewFolder ? (
          <CreateNewFolderInput handleCreateNewFolder={handleCreateNewFolder} />
        ) : (
          <></>
        )}
      </div>
    </CollapsibleFeatureSection>
  );
}

function CreateNewFolderInput({
  handleCreateNewFolder,
}: {
  handleCreateNewFolder: (newFolderName: string) => void;
}) {
  const [newFolderName, setNewFolderName] = useState<string>("");

  return (
    <div
      className={cn(
        "ProjectFolderNode-container text-sm font-medium flex flex-row gap-1.5 items-center w-full px-2.5"
      )}
    >
      <span className="ProjectFolderNode-iconContainer">
        <IconFolder size={14} />
      </span>
      <input
        type="text"
        className="CreateNewFileInput-input py-0.5 px-1 bg-transparent w-full tracking-tighter"
        onChange={(e) => {
          setNewFolderName(e.target.value as string);
        }}
        onBlur={(e) => {
          handleCreateNewFolder(newFolderName);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleCreateNewFolder(newFolderName);
          }
        }}
        autoFocus
      />
    </div>
  );
}

function CreateNewFileInput({
  handleCreateNewFile,
}: {
  handleCreateNewFile: (newFileName: string) => void;
}) {
  const [extenstion, setExtension] = useState<string | null>(null);
  const [newFileName, setNewFileName] = useState<string>("");

  useEffect(() => {
    const ext = newFileName.split(".").pop();
    if (ext) {
      setExtension(ext as FileIconType);
    }
  }, [newFileName]);

  return (
    <div
      className={cn(
        "ProjectFolderNode-container text-sm font-medium flex flex-row gap-1.5 items-center w-full px-2.5"
      )}
    >
      <span className="ProjectFolderNode-iconContainer">
        {getFileTypeIcon(extenstion)}
      </span>
      <input
        type="text"
        className="CreateNewFileInput-input py-0.5 px-1 bg-transparent w-full tracking-tighter"
        onChange={(e) => {
          setNewFileName(e.target.value as string);
        }}
        onBlur={(e) => {
          handleCreateNewFile(newFileName);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleCreateNewFile(newFileName);
          }
        }}
        autoFocus
      />
    </div>
  );
}

function ProjectFolderTree() {
  const { projectStructure } = useContext(ProjectStructureContext);

  return (
    <div className="ProjectFolderTree-container">
      {projectStructure.map((item, index) => {
        return (
          <ProjectFolderNode
            key={`${item.name}-${index}`}
            fileName={item.name}
            isFolder={!!item.inner}
            innerFiles={item.inner || []}
            fileID={item.fileID}
          />
        );
      })}
    </div>
  );
}
