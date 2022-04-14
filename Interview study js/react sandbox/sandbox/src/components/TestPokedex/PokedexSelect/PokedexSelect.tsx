import React, { useEffect } from "react";

type PokedexSelectProps = {
  pokemons: string [];
  onSelectChange: (selectedPokemon: string) => void;
};

const PokedexSelect = (props: PokedexSelectProps) => {
  const { pokemons, onSelectChange } = props;
  const [selectedValue, setSelectedValue] = React.useState("");

  useEffect(() => {
    if(pokemons?.length > 0 && selectedValue === ''){
        setSelectedValue(pokemons[0]);
        onSelectChange(pokemons[0]);
    }   
  }, [pokemons, onSelectChange, selectedValue])

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPokemon = event.target.value;
    onSelectChange(selectedPokemon);
    setSelectedValue(selectedPokemon);
  };
  console.log({pokemons})

  return (
    <form name="form-select">
      {pokemons?.length> 0 && <select onChange={handleSelectChange} value={selectedValue}>
        {pokemons?.length > 0 &&
          pokemons.map((singlePokemon) => {
            return (
              <>
                {singlePokemon &&<option key={singlePokemon} value={singlePokemon}>
                  {singlePokemon}
                </option>}
              </>
            );
          })}
      </select>}
    </form>
  );
};

export default PokedexSelect;
