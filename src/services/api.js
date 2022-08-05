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
