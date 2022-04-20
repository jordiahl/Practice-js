import React, { useEffect } from "react";
import PracticeCard from "./PracticeCard";
import PracticeSelect from "./PracticeSelect";
import { getDescription, getPokemons } from "./PracticeService";

const PracticeIndex = () => {
  const [pokemonsList, setPokemonsList] = React.useState<string[]>();
  const [selectedPokemon, setSelectedPokemon] = React.useState("");
  const [description, setDescription] = React.useState<string>("");

  const pokemonMap = React.useMemo(() => {
    return pokemonsList?.reduce(
      (acc: {[key:string]: number }, current, index) => {
        acc[current] = index + 1;
        return acc;
      },
      {}
    );
  }, [pokemonsList]);

  React.useEffect(() => {
    const abortController = new AbortController();

    const fetchPokemons = async () => {
      const data = await getPokemons(abortController.signal);

      if (data?.results.length) {
        const raw: { name: string; url: string }[] = data.results;
        const list = raw.map((v) => v.name);
        setPokemonsList(list);
      }
    };

    fetchPokemons();

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setDescription("");
      let data = await getDescription(selectedPokemon, abortController.signal);
      console.log({data})
      data = data?.flavor_text_entries[0]?.flavor_text? data?.flavor_text_entries[0]?.flavor_text.replace(/[\n\f]/g, " "): 'no desc';
      setDescription(data);
    };

    if (selectedPokemon.length) {
      fetchData();
    }

    return () => {
      abortController.abort();
    };
  }, [selectedPokemon]);

  const handleSelectedPokemon = React.useCallback(
    (pokemon: string) => {
      if (selectedPokemon !== pokemon) {
        setSelectedPokemon(pokemon);
      }
    },
    []
  );


  return (
    <div>
      {!pokemonsList?.length ? (
        <></>
      ) : (
        <PracticeSelect
          pokemons={pokemonsList}
          onChange={handleSelectedPokemon}
          selectedPokemon={selectedPokemon}
          isDisabled={false}
        ></PracticeSelect>
      )}
      {pokemonMap && (
        <PracticeCard
          selectedPokemon={selectedPokemon}
          description={description}
          id={pokemonMap[selectedPokemon]}
        />
      )}
    </div>
  );
};

export default PracticeIndex;
