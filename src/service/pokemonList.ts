import axios from "axios";
import { POKEMON_BASE_URL } from "../utils/constant";
import type { IPokemonListResponse } from "../interface/pokemonList";
import { handleResponse } from "../utils/handleResponse";
import type { IResponse } from "../utils/handleResponse";

interface IGetPokemonListResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonListResponse;
}

export const pokemonListService = {
  getPokemonList: async (
    limit?: number,
    offset?: number,
  ): Promise<IGetPokemonListResponse> => {
    try {
      const res = await axios.get(
        `${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`,
      );
      return handleResponse.success(res);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
