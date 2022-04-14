import { PokemonResponse } from "../TestPokedexPage";
import Image from "next/image";
import React from "react";
import { getPokemonImage } from "../services/PokemonsService";
import cx from "classnames";

import styles from "./DisplayPokemons.module.scss";


type DisplayPokemonsProps = {
  pokemon: PokemonResponse & { description?: string; id: number };
};

const DisplayPokemons = (props: DisplayPokemonsProps) => {
  const { pokemon } = props;

  const imageUrL = React.useMemo(() => {
    return pokemon?.id? getPokemonImage(pokemon.id) : '';
  }, [pokemon]);

  return (
    <div className={cx(styles.card, styles.container )}>
      {pokemon && (
        <>
          {imageUrL && (
              <img
                alt={pokemon.name + "image"}
                src={imageUrL}
                width={300}
                height={300}
              />
          )}
          <h1>{pokemon.name}</h1>
          {pokemon?.description && <p>{pokemon.description}</p>}
        </>
      )}
    </div>
  );
};

export default DisplayPokemons;
