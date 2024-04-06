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
}

export function CollapsibleFeatureSection({
  className,
  children,
  sectionTitle,
  actions = [],
  ...args
}: CollapsibleFeatureSectionProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <div
      className={cn("CollapsibleFeatureSection-container grid", className)}
      {...args}
    >
      <div className="CollapsibleFeatureSection-button py-1.5 px-2 uppercase font-semibold text-xs bg-neutral-100 tracking-tight text-left border-b border-b-neutral-200 flex items-center justify-between">
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
              onClick={action.onClick}
            >
              {action.icon}
            </button>
          ))}
        </div>
      </div>
      {!collapsed && (
        <motion.div
          className="CollapsibleFeatureSection-content py-2"
          initial={{ height: "auto" }}
          animate={{ height: collapsed ? 0 : "auto" }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
