import axios from "axios";
import { POKEMON_BASE_URL } from "../utils/constant";
import type { IPokemonDetailResponse } from "../interface/pokemonDetail";
import type { IResponse } from "../utils/handleResponse";
import { handleResponse } from "../utils/handleResponse";

interface IGetPokemonDetailResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonDetailResponse;
}

export const pokemonDetailService = {
  getPokemonDetail: async (
    name: string,
  ): Promise<IGetPokemonDetailResponse> => {
    try {
      const res = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`);
      return handleResponse.success(res);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
