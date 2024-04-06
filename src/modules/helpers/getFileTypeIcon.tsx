import {
  IconBrandPython,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandHtml5,
  IconBrandCss3,
  IconJson,
  IconDiamond,
  IconBrandPhp,
  IconBrandSwift,
  IconBrandRust,
  IconFile,
} from "@tabler/icons-react";

export type FileIconType =
  | "py"
  | "js"
  | "ts"
  | "html"
  | "css"
  | "json"
  | "rb"
  | "php"
  | "swift"
  | "rs"
  | "none";

export const fileIconMap: { [key in FileIconType]: React.ReactNode } = {
  py: <IconBrandPython width={12} height={12} />,
  js: <IconBrandJavascript width={12} height={12} />,
  ts: <IconBrandTypescript width={12} height={12} />,
  html: <IconBrandHtml5 width={12} height={12} />,
  css: <IconBrandCss3 width={12} height={12} />,
  json: <IconJson width={12} height={12} />,
  rb: <IconDiamond width={12} height={12} />,
  php: <IconBrandPhp width={12} height={12} />,
  swift: <IconBrandSwift width={12} height={12} />,
  rs: <IconBrandRust width={12} height={12} />,
  none: <IconFile width={12} height={12} />,
};
