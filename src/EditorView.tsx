import EditorLayout from "./layout/EditorLayout";
import { EditorLayoutContextProvider } from "./providers/EditorLayoutContextProvider";
import { ProjectStructureContextProvider } from "./providers/ProjectStructureContextProvider";

export default function EditorView() {
  return (
    <div className="EditorView-container h-screen">
      <EditorLayoutContextProvider>
        <ProjectStructureContextProvider>
          <EditorLayout />
        </ProjectStructureContextProvider>
      </EditorLayoutContextProvider>
    </div>
  );
}
