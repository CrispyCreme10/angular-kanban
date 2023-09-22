import { Lane } from "./lane";

export interface Board {
  id: number;
  name: string;
  lanes: Lane[];
}