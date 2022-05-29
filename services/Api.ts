import { AxiosResponse } from "axios";
const axios = require("axios");
interface IApiProps {
  rota: string;
  state: (data: any) => void;
}

export async function ApiGetData({ rota, state }: IApiProps) {
  try {
    const res: AxiosResponse = await axios.get(rota);
    state(res.data);
  } catch (error) {
    console.log(error);
  }
}
