export const requestPokemons = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0limit=150"
    );

    if (!response.ok) {
      throw new Error(response.toString());
    }
    let data = await response.json();
    if(data != undefined){
        data = data.results;
    }

    return data;
  } catch (e) {
    console.log(e);
  }

  return null;
};


export const getPokemonDescription = async (id: string | number) =>{
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        if(!response.ok){
            throw new Error(response.toString());
        }

        let data = await response.json();

        data = data.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, ' ');
        return data;
    }catch(e){
        console.error(e);
        
    }
    return null;
}

export const getPokemonImage = (id: number| string) =>{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
}