import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/Resizable";
import { EditorLayoutContextProvider } from "../providers/EditorLayoutContextProvider";
import { EditorSidebar } from "./EditorSidebar";
import { FileContentView } from "./FileContentView";
import { UISlotBottomContainer } from "./UISlotBottomContainer";
import { UISlotLeftContainer } from "./UISlotLeftContainer";
import { UISlotRightContainer } from "./UISlotRightContainer";

export default function EditorLayout() {
  return (
    <EditorLayoutContextProvider>
      <ResizablePanelGroup
        direction="horizontal"
        className="EditorLayout-container"
      >
        <ResizablePanel defaultSize={3} maxSize={3} minSize={3}>
          <EditorSidebar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={17} minSize={10}>
          <UISlotLeftContainer />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60} minSize={10}>
          <ResizablePanelGroup
            direction="vertical"
            className="EditorLayout-centerContainer h-full"
          >
            <ResizablePanel defaultSize={70}>
              <FileContentView />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={30}>
              <UISlotBottomContainer />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={20} maxSize={20}>
          <UISlotRightContainer />
        </ResizablePanel>
      </ResizablePanelGroup>
    </EditorLayoutContextProvider>
  );
}
