import { useEffect, useState } from "react";
import cssModule from "./Pokemon.module.css";

/* Notes:-
   To ways to call and get data from third party API
   1. Using Promises:-
         fetchAPI(url).then

   2. Uisng async await mechanism

      async () => {
        const apidata=await fetchAPI(url);
        }


*/

export const SinglePokemonCatch = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  //Using Promises
  //   const fetchPokemon = () => {
  //     fetch(API)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPokemon(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setError(error);
  //         setLoading(false);
  //       });
  //   };

  //Using async await
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemon);
  console.log(loading);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  console.log(error);

  if (error != null) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <section
      className={`${cssModule["pokemon-container"]} ${cssModule["pokemon-effect-container"]}`}>
      <header>
        <h1 className={cssModule["card-heading"]}>Lets Catch Pokemon:</h1>
      </header>
      <ul className={cssModule["card-demo"]}>
        <li className={cssModule["pokemon-card"]}>
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className={cssModule["pokemon-image"]}
            />
          </figure>
          <h1>{pokemon.name}</h1>
          <div className={cssModule["grid-three-cols"]}>
            <p className={cssModule["pokemon-info"]}>
              Height: <span>{pokemon.height}</span>
            </p>
            <p className={cssModule["pokemon-info"]}>
              Weight: <span>{pokemon.weight}</span>
            </p>
            <p className={cssModule["pokemon-info"]}>
              Speed:
              <span>{pokemon.stats[pokemon.stats.length - 1].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
