import { atom } from "recoil";
import { Imateria } from '../interface/subject';

export const materiasArray = atom({
  key: "materias",
  default: [] as Imateria[],
});
