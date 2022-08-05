import React from "react";
import "../styles/components/PokemonCard.css";

const PokemonCard = ({ pokemon, error }) => {
  return (
    <div className="pokemon-card">
      {pokemon && (
        <section>
          {/* h3> This pokemon's name </h3 */}
          {/*  This image should show the default front view of this pokemon   */}
          {/* img loading="lazy" class="pokemon-sprite" / */}
          <article className="pokemon-data">
            <details>
              <summary>ID</summary>
              {/*  This pokemon's ID  */}
              <p></p>
            </details>
            <details>
              <summary>Types</summary>
              {/*  List of types this pokemon has.  */}
            </details>
            <details>
              <summary>Abilities</summary>
              {/*  List of moves that this pokemon has.  */}
            </details>
            <details>
              <summary>Moves</summary>
              {/*  List of moves that this pokemon can learn.  */}
            </details>
          </article>
        </section>
      )}
      {error && (
        <h3 className="pokemon-error">ERROR: {JSON.stringify(error)}</h3>
      )}
    </div>
  );
};

export default PokemonCard;
