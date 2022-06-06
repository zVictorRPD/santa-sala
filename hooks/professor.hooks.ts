import { atom } from "recoil";
import { Iprofessor } from '../interface/teacher';

export const professoresArray = atom({
  key: "professores",
  default: [] as Iprofessor[],
});
