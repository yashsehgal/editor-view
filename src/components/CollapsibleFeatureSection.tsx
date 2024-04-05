import { cn } from "../dev-utils/cn";

export interface CollapsibleFeatureSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  sectionTitle: string;
}

export function CollapsibleFeatureSection({
  className,
  children,
  sectionTitle,
  ...args
}: CollapsibleFeatureSectionProps) {
  return (
    <div
      className={cn("CollapsibleFeatureSection-container grid", className)}
      {...args}
    >
      <button className="CollapsibleFeatureSection-button p-1.5 uppercase font-medium text-sm bg-neutral-100">
        {sectionTitle}
      </button>
      <div className="CollapsibleFeatureSection-content p-2">{children}</div>
    </div>
  );
}
