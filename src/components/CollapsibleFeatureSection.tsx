import { useState } from "react";
import { cn } from "../dev-utils/cn";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "framer-motion";

export type CollapsibleFeatureSectionActionType = {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export interface CollapsibleFeatureSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  sectionTitle: string;
  actions?: CollapsibleFeatureSectionActionType[];
  defaultOpen?: boolean;
}

export function CollapsibleFeatureSection({
  className,
  children,
  sectionTitle,
  actions = [],
  defaultOpen = false,
  ...args
}: CollapsibleFeatureSectionProps) {
  const [collapsed, setCollapsed] = useState<boolean>(defaultOpen);
  return (
    <div
      className={cn(
        "CollapsibleFeatureSection-container flex flex-col h-full w-full",
        className
      )}
      {...args}
    >
      <div className="CollapsibleFeatureSection-button py-1 px-2 uppercase font-semibold text-xs bg-neutral-100 tracking-tight text-left border-b border-b-neutral-200 flex items-center justify-between">
        <div
          className="CollapsibleFeatureSection-sectionTitle-collapseIcon-wrapper flex items-center justify-start gap-1"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <IconChevronDown size={16} className="rotate-180 duration-200" />
          ) : (
            <IconChevronDown size={16} className="duration-200" />
          )}
          <span className="CollapsibleFeatureSection-sectionTitle select-none">
            {sectionTitle}
          </span>
        </div>
        <div className="CollapsibleFeatureSection-actions flex gap-1">
          {actions.map((action) => (
            <button
              key={action.name}
              className="CollapsibleFeatureSection-actionButton p-1 hover:bg-neutral-200 rounded-md"
              onClick={() => {
                setCollapsed(false);
                action.onClick?.();
              }}
              title={action.name}
            >
              {action.icon}
            </button>
          ))}
        </div>
      </div>
      {!collapsed ? children : <></>}
    </div>
  );
}
