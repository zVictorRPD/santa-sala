import { atom } from "recoil";
import { IMateria } from '../interface/subject';

export const materiasArray = atom({
  key: "materias",
  default: [] as IMateria[],
});
