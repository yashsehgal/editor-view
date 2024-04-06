import { useState } from "react";
import { cn } from "../dev-utils/cn";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "framer-motion";

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
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <div
      className={cn("CollapsibleFeatureSection-container grid", className)}
      {...args}
    >
      <button
        className="CollapsibleFeatureSection-button py-1.5 px-2 uppercase font-semibold text-xs bg-neutral-100 tracking-tight text-left border-b border-b-neutral-200 cursor-pointer flex items-center justify-between"
        onClick={() => setCollapsed(!collapsed)}
      >
        {sectionTitle}
        {collapsed ? (
          <IconChevronDown size={16} className="rotate-180 duration-200" />
        ) : (
          <IconChevronDown size={16} className="duration-200" />
        )}
      </button>
      {!collapsed && (
        <motion.div
          className="CollapsibleFeatureSection-content p-2"
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
