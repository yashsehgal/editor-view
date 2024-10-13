import { FileIconType } from "../modules/helpers/getFileTypeIcon";

export function getFileExtension(fileName: string): FileIconType {
  return fileName.split(".").pop() as FileIconType;
}
