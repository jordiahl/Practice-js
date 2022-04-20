import React from "react";
import { getPokemonImage } from "./PracticeService";

export type PracticeCardProps = {
  description: string;
  selectedPokemon: string;
  id: number | undefined;
};

const PracticeCard = (props: PracticeCardProps) => {
  const { description, selectedPokemon, id } = props;

  const image = React.useMemo(() => {
    return id ? getPokemonImage(id) : null;
  }, [id]);

  React.useEffect(() => {
    if (selectedPokemon.length) {
    }
  }, [selectedPokemon]);

  console.log({description});
  
  return (
    <div>
      {image && (
        <>
          <img alt={selectedPokemon + "image"} src={image}></img>
          <h1>{selectedPokemon}</h1>
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

export default PracticeCard;
