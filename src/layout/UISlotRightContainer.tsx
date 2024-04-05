import { cn } from "../dev-utils/cn";

export interface UISlotRightContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function UISlotRightContainer({
  className,
  ...args
}: UISlotRightContainerProps) {
  return (
    <aside
      className={cn("UISlotRightContainer-container", className)}
      {...args}
    />
  );
}
