import { atom } from "recoil";
import { Ialuno } from '../interface/student';

export const alunosArray = atom({
  key: "alunos",
  default: [] as Ialuno[],
});
