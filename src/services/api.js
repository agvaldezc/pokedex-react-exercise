export const getPokemon = (query) => {
  // Query can be the name of a pokemon or a number between 1 and 800
  return fetch(`https://pokeapi.co/api/v2/pokemon/${query}`).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw {
        url: res.url,
        error: res.status,
        message: 'Pokemon not found',
      };
    }
  });
};

/*
interface IBasicData {
  id: number;
  name: string;
}

interface INamedResource {
  name: string;
  url: string;
}

interface IPokemonSprite {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

interface IPokemonAbility {
  ability: INamedResource;
}

interface IPokemonMove {
  move: INamedResource;
}

interface IPokemonType {
  slot: number;
  type: INamedResource;
}

interface IPokemon extends IBasicData {
  abilities: IPokemonAbility[];
  moves: IPokemonMove[];
  types: IPokemonType[];
  sprites: IPokemonSprite;
}
*/
