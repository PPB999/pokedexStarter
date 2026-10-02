import React from "react";
import type { Type } from "../../interface/pokemonDetail";
import { Link } from "react-router";

interface PokemonCardProps {
  image: string;
  name: string;
  id: number;
  types: Type[];
}

const PokemonCard = ({ image, name, id, types }: PokemonCardProps) => {
  return (
    <div className=" max-w-sm  rounded-[20px] overflow-hidden shadow dark:border-gray-700 p-[18px] bg-[#253461] max-w-[275px] w-full m-auto">
      <div className="bg-[url('./images/poke-card-bg.png')] bg-center aspect-square w-full bg-cover rounded-[20px]">
        <Link
          to={`./details/${name}`}
          className="bg-[url('/images/poke-card-bg.png')]"
        >
          <img
            className="rounded-t-lg h-auto p-[40px] w-auto"
            src={image}
            alt=""
          />
        </Link>
      </div>
      <div className="py-5">
        <div className="flex justify-between">
          <h5 className="capitalize mb-2 text-xl font-bold tracking-tight text-white ">
            {name}
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white ">
            #{id}
          </h5>
        </div>
        <div className="flex gap-2 justify-end mt-[16px]">
          {types.map((item) => {
            return (
              <span
                className={`badge-type-${item.type.name} px-2 py-1 rounded-[16px] capitalize`}
              >
                {item.type.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
