import { cn } from "../dev-utils/cn";

export interface UISlotBottomContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function UISlotBottomContainer({
  className,
  ...args
}: UISlotBottomContainerProps) {
  return (
    <div
      className={cn("UISlotBottomContainer-container w-full h-full", className)}
      {...args}
    />
  );
}
