import React from 'react';
import './Pokedex.css';

const Pokedex = () => {
  return (
    <section className="pokedex">
      <form className="pokedex-search-form">
        <h2>Pokedex Component</h2>
        <fieldset>
          <input name="query" type="text" placeholder="Pokemon name or ID" />
          <button type="submit">Search Pokemon</button>
        </fieldset>
      </form>
      <article className="pokedex-container">{/*<PokemonCard />*/}</article>
    </section>
  );
};

export default Pokedex;
