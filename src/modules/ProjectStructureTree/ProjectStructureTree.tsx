import { useContext, useEffect, useState } from "react";
import { CollapsibleFeatureSection } from "../../components/CollapsibleFeatureSection";
import { ProjectStructureContext } from "../../contexts/ProjectStructureContext";
import { ProjectFolderNode } from "../../components/ProjectFolderNode";
import { IconFilePlus } from "@tabler/icons-react";
import { cn } from "../../dev-utils/cn";
import { FileIconType, getFileTypeIcon } from "../helpers/getFileTypeIcon";
import { motion } from "framer-motion";

export function ProjectStructureTree() {
  const { projectName, projectStructure, setProjectStructure } = useContext(
    ProjectStructureContext
  );
  const [showCreateNewFile, setShowCreateNewFile] = useState<boolean>(false);

  const handleCreateNewFile = (newFileName: string) => {
    setShowCreateNewFile(false);

    if (!newFileName) return;
    let updatedProjectStructure = [...projectStructure];
    updatedProjectStructure.push({ name: newFileName });
    setProjectStructure(updatedProjectStructure);
  };

  return (
    <CollapsibleFeatureSection
      sectionTitle={projectName}
      actions={[
        {
          name: "Create New File",
          onClick: () => setShowCreateNewFile(true),
          icon: <IconFilePlus size={14} />,
        },
      ]}
      defaultOpen
    >
      <ProjectFolderTree />
      {showCreateNewFile ? (
        <CreateNewFileInput handleCreateNewFile={handleCreateNewFile} />
      ) : (
        <></>
      )}
    </CollapsibleFeatureSection>
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
        className="CreateNewFileInput-input py-0.5 px-1 bg-transparent w-full"
        onChange={(e) => setNewFileName(e.target.value as string)}
        onBlur={() => handleCreateNewFile(newFileName)}
        autoFocus
      />
    </div>
  );
}

function ProjectFolderTree() {
  const { projectStructure } = useContext(ProjectStructureContext);

  return (
    <div className="ProjectFolderTree-container gap-0.5">
      {projectStructure.map((item, index) => {
        return (
          <motion.div
            key={`${item.name}-${index}`}
            initial={{
              opacity: 0,
              y: -6 * (index + 1),
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <ProjectFolderNode fileName={item.name} isFolder={!!item.inner} />
          </motion.div>
        );
      })}
    </div>
  );
}
