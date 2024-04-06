import { useContext } from "react";
import { CollapsibleFeatureSection } from "../../components/CollapsibleFeatureSection";
import { EditorLayoutContext } from "../../contexts/EditorLayoutContext";
import { ProjectStructureContext } from "../../contexts/ProjectStructureContext";

export function ProjectStructureTree() {
  const { projectName, setProjectName } = useContext(ProjectStructureContext);
  return (
    <CollapsibleFeatureSection
      sectionTitle={projectName}
    ></CollapsibleFeatureSection>
  );
}
