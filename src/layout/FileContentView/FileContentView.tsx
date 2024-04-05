import { cn } from "../../dev-utils/cn";

export interface FileContentViewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  view: "file-editor" | "file-readonly";
}

export function FileContentView({ className, ...args }: FileContentViewProps) {
  return (
    <div className={cn("FileContentView-container", className)} {...args}></div>
  );
}
