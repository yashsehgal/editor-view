import { useEffect, useState } from "react";
import {
  PROJECT_STRUCTURE_CONTEXT_INITIAL_STATE,
  ProjectStructureContext,
  ProjectStructureType,
} from "../contexts/ProjectStructureContext";

export interface ProjectStructureContextProviderProps {
  children: React.ReactNode;
}

export function ProjectStructureContextProvider({
  children,
}: ProjectStructureContextProviderProps) {
  const [projectName, setProjectName] = useState<string>(
    PROJECT_STRUCTURE_CONTEXT_INITIAL_STATE.projectName
  );
  const [projectStructure, setProjectStructure] = useState<
    ProjectStructureType[]
  >(PROJECT_STRUCTURE_CONTEXT_INITIAL_STATE.projectStructure);

  useEffect(() => {
    console.log("ProjectStructureContextProvider", {
      projectName,
      projectStructure,
    });
  }, [projectName, projectStructure, setProjectName, setProjectStructure]);

  return (
    <ProjectStructureContext.Provider
      value={{
        projectName,
        setProjectName,
        projectStructure,
        setProjectStructure,
      }}
    >
      {children}
    </ProjectStructureContext.Provider>
  );
}
