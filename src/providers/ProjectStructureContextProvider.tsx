import { useState } from "react";
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
