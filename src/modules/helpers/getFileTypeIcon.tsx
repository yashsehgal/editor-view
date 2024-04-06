import { IconFile } from "@tabler/icons-react";

export type FileIconType =
  | "py"
  | "js"
  | "jsx"
  | "ts"
  | "tsx"
  | "cpp"
  | "c"
  | "java"
  | "html"
  | "css"
  | "json"
  | "rb"
  | "php"
  | "swift"
  | "rs"
  | "none";

export const getFileTypeIcon = (fileType: string | null): React.ReactNode => {
  switch (fileType) {
    case "py":
      return <i className="devicon-python-plain text-sm"></i>;
    case "js":
      return <i className="devicon-javascript-plain text-sm"></i>;
    case "jsx":
      return <i className="devicon-react-original text-sm"></i>;
    case "ts":
      return <i className="devicon-typescript-plain text-sm"></i>;
    case "tsx":
      return <i className="devicon-react-original text-sm"></i>;
    case "cpp":
      return <i className="devicon-cplusplus-plain text-sm"></i>;
    case "c":
      return <i className="devicon-c-plain text-sm"></i>;
    case "java":
      return <i className="devicon-java-plain text-sm"></i>;
    case "html":
      return <i className="devicon-html5-plain text-sm"></i>;
    case "css":
      return <i className="devicon-css3-plain text-sm"></i>;
    case "json":
      return <i className="devicon-json-plain text-sm"></i>;
    case "rb":
      return <i className="devicon-ruby-plain text-sm"></i>;
    case "php":
      return <i className="devicon-php-plain text-sm"></i>;
    case "swift":
      return <i className="devicon-swift-plain text-sm"></i>;
    case "rs":
      return <i className="devicon-rust-original text-sm"></i>;
    default:
      return <IconFile width={14} height={24} />;
  }
};
