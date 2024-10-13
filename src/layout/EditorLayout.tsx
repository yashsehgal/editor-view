import { useContext } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/Resizable";
import { EditorSidebar } from "./EditorSidebar";
import { FileContentView } from "./FileContentView";
import { UISlotBottomContainer } from "./UISlotBottomContainer";
import { UISlotLeftContainer } from "./UISlotLeftContainer";
import { UISlotRightContainer } from "./UISlotRightContainer";
import { getRenderForUISlot } from "./helpers/getRenderForUISlot";
import { EditorLayoutContext } from "../contexts/EditorLayoutContext";
import { OpenEditors } from "./OpenEditors";
import { ProjectStructureContext } from "../contexts/ProjectStructureContext";

export default function EditorLayout() {
  const { UISlotLeft, UISlotRight, UISlotBottom, FileContentViewState } =
    useContext(EditorLayoutContext);

  const { projectStructure } = useContext(ProjectStructureContext);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="EditorLayout-container"
    >
      <ResizablePanel defaultSize={3} maxSize={3} minSize={3}>
        <EditorSidebar />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={17} minSize={10}>
        <UISlotLeftContainer>
          {getRenderForUISlot(UISlotLeft)}
        </UISlotLeftContainer>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60} minSize={10}>
        <ResizablePanelGroup
          direction="vertical"
          className="EditorLayout-centerContainer h-full"
        >
          <ResizablePanel defaultSize={70}>
            <OpenEditors tabs={projectStructure} />
            <FileContentView view={FileContentViewState} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30}>
            <UISlotBottomContainer>
              {getRenderForUISlot(UISlotBottom)}
            </UISlotBottomContainer>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20} maxSize={20}>
        <UISlotRightContainer>
          {getRenderForUISlot(UISlotRight)}
        </UISlotRightContainer>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
