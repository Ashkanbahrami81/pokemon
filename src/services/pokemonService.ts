import axios, { AxiosResponse } from "axios";

import { IPokemon, IPokemonType } from "@/models/IPokemon";

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

export const getPokemonsByType = async (
  id: number
): Promise<AxiosResponse<{ pokemon: { pokemon: IPokemonType }[] }>> => {
  return axios.get(`/type/${id}`);
};
