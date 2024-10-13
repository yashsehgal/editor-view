import { cn } from "../dev-utils/cn";

export interface UISlotLeftContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function UISlotLeftContainer({
  className,
  ...args
}: UISlotLeftContainerProps) {
  return (
    <aside
      className={cn("UISlotLeftContainer-container w-full h-full", className)}
      {...args}
    />
  );
}
