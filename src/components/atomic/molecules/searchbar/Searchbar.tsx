"use client";

import { useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";
import { useGetPokemon } from "@/hooks/usePokemon";
import { Loader, PokemonCard, SearchResultBox } from "../../atoms";
import { IPokemon } from "@/models/IPokemon";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchInput, 500);

  const { data, isLoading } = useGetPokemon({ id: "" });

  // Use the custom hook to detect clicks outside of the component
  const ref = useOutsideClick(() => setIsSearchInputFocused(false));

  // Filter Pokemon based on the debounced search term
  const filteredPokemon = (data as any)?.data?.results?.filter(
    (pokemon: IPokemon) =>
      pokemon.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div
      ref={ref}
      className="z-30 w-full md:max-w-[390px] relative flex items-center justify-center"
    >
      <input
        type="text"
        placeholder={"Search..."}
        className={`w-full h-full outline-none bg-black md:bg-background text-[12px] font-[400] text-gray-700  p-4 rounded-full border border-gray-500`}
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        onFocus={() => setIsSearchInputFocused(true)}
        onBlur={(e) => {
          e.preventDefault();
        }}
      />
      <SearchResultBox isSearchInputFocused={isSearchInputFocused}>
        {isLoading ? (
          <div className="h-40 flex items-center justify-center">
            <Loader />
          </div>
        ) : filteredPokemon ? (
          filteredPokemon
            .slice(0, 5)
            .map((pokemon: IPokemon) => (
              <PokemonCard key={pokemon.name} name={pokemon.name} noImage />
            ))
        ) : null}
      </SearchResultBox>
    </div>
  );
};

export default Searchbar;
