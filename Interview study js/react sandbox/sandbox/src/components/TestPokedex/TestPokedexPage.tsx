import React from "react";
import DisplayPokemons from "./DisplayPokemons/DisplayPokemons";
import PokedexSelect from "./PokedexSelect/PokedexSelect";
import styles from "./TestPokedexPage.module.scss";
import {
  getPokemonDescription,
  requestPokemons,
} from "./services/PokemonsService";

export type PokemonResponse = {
  name: string;
  url: string;
};

type PokemonMap = {
  [name: string]: PokemonResponse & { id: number; description?: string };
};

const transformPokemonsToMap = (pokemons: PokemonResponse[]) => {
  const map: PokemonMap = {};
  let index = 1;
  for (const singlePokemon of pokemons) {
    map[singlePokemon.name] = { ...singlePokemon, id: index };
    index++;
  }
  return map;
};

const TestPokedexPage = () => {
  const [pokemonMap, setPokemonMap] = React.useState<PokemonMap>({});

  const pokemonList = React.useMemo(() => {
    const pokemons = Object.keys(pokemonMap).map((pokemon) => {
      return pokemonMap[pokemon].name;
    });
    return pokemons;
  }, [pokemonMap]);

  const [selectedPokemon, setSelectedPokemon] = React.useState("");

  React.useEffect(() => {
    if (Object.keys(pokemonMap).length > 1) {
      const { id, description: pokemonDesc } =
        pokemonMap[selectedPokemon] || {};

      if (pokemonDesc == undefined) {
        const service = async () => {
           const description = await getPokemonDescription(id);
             setPokemonMap((previous) => {
               const newMap = { ...previous };
               newMap[selectedPokemon] = {
                 ...newMap[selectedPokemon],
                 description,
               };
               return newMap;
             });
        }

        service();
      }
    }
    return () => {
      console.log(`unmounted ${selectedPokemon}`);
    }
  }, [selectedPokemon, pokemonMap]);

  React.useEffect(() => {
    requestPokemons().then((pokemons) => {
      const pkMap = transformPokemonsToMap(pokemons as PokemonResponse[]);
      setPokemonMap(pkMap);
    });
  }, []);

  const handleSelectedPokemon = (pkm: string) => {
    setSelectedPokemon(pkm);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <PokedexSelect
          pokemons={pokemonList}
          onSelectChange={handleSelectedPokemon}
        />
        <DisplayPokemons pokemon={pokemonMap[selectedPokemon]} />
      </div>
    </div>
  );
};

export default TestPokedexPage;
