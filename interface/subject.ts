export interface IMateria {
  id: string;
  name: string;
  code: string;
  description: string;
  hours: number;
  dependence: string[];
  lock: string[];
  period: number;
  optional: boolean;
  state: string | "todo";
  highlighted: boolean | false;
}
