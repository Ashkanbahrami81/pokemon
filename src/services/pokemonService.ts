import axios, { AxiosResponse } from "axios";

import { IPokemonType } from "@/models/IPokemon";

export interface IResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export const getPokemonTypes = async (): Promise<
  AxiosResponse<IResponse<IPokemonType>>
> => {
  return axios.get("/type/");
};
