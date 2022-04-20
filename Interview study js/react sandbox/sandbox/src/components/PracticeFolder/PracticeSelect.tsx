import React from "react";

export type PracticeSelectProps = {
  pokemons: string[];
  onChange: (pokemon: string) => void;
  selectedPokemon: string;
  isDisabled: boolean
};

const PracticeSelect = (props: PracticeSelectProps) => {
  const { pokemons, onChange, selectedPokemon, isDisabled } = props;



  React.useEffect(() => {
    if (pokemons.length) {
      onChange(pokemons[0]);
    }
  }, [onChange, pokemons]);



  const handlePokemonChange = (pokemon: string) => {
      onChange(pokemon);
    }

  return (
    <form>
      {!pokemons.length && selectedPokemon?.length ? (
        <></>
      ) : (
        <select
          disabled={isDisabled}
          onChange={(e) => handlePokemonChange(e.target.value)}
          value={selectedPokemon}
        >
          {pokemons.map((pk) => (
            <option key={pk} value={pk}>
              {pk}
            </option>
          ))}
        </select>
      )}
    </form>
  );
};

export default PracticeSelect;
