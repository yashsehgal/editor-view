import { createContext } from "react";

export type ProjectStructureType = {
  name: string;
  inner?: ProjectStructureType[];
};

export type ProjectStructureContextType = {
  projectName: string;
  setProjectName: (projectName: string) => void;
  projectStructure: ProjectStructureType[];
  setProjectStructure: (projectStructure: ProjectStructureType[]) => void;
};

export const PROJECT_STRUCTURE_CONTEXT_INITIAL_STATE: ProjectStructureContextType =
  {
    projectName: "Untitled",
    setProjectName: () => {},
    projectStructure: [],
    setProjectStructure: () => {},
  } satisfies ProjectStructureContextType;

export const ProjectStructureContext =
  createContext<ProjectStructureContextType>({
    ...PROJECT_STRUCTURE_CONTEXT_INITIAL_STATE,
  });
