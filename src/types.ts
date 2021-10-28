import { PRIORITY_KEY } from "./constants";

type ValueOf<T> = T[keyof T];

export type PriorityValues = ValueOf<typeof PRIORITY_KEY>;
export type PriorityKeys = keyof typeof PRIORITY_KEY;

export type FilterValues = -1 | 0 | 1 | 2;

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  priority: 0 | 1 | 2;
}
