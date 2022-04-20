

export const getPokemons = async (abortSignal: AbortSignal) => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0limit=150",
      { signal: abortSignal }
    );

    if (!response.ok) {
      throw new Error(response.toString());
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
  return null;
};


export const getDescription = async (id: string,  abortSignal: AbortSignal) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`,
      { signal: abortSignal }
    );

    if (!response.ok) {
      throw new Error(response.toString());
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
  return null;
};

export const getPokemonImage = (id: number | string) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
};