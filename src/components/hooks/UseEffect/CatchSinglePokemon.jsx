import { useEffect, useState } from "react";
import cssModule from "./Pokemon.module.css";
import axios from "axios";

/* Notes:-
  2 Third Party API Access APIMethods:-
 
  To ways to call and get data 
    
  A fetchAPI():-

   a. Using Promises:-
         fetchAPI(url).then

   b. Using async await mechanism

      async () => {
        const apidata=await fetchAPI(url);
        }

  B Axios():-(Better Then fetch() as it has more features and is more user-friendly)
     
      Axios is promise-based HTTP client request/response handling library.It is third-party library not from React.
      That's way need to install axios.

       A.1 First install axios  
        Syntax:- 
              npm install axios

  Benifites:-

  1. Easier syntax and cleaner code.
  2. Automatic JSON transformation without extra code.
  3. Built-in error handling.
  4. Supports old browsers. 

   a. Using Promises:-
         axios(url).then

   b. Using async await mechanism

      async () => {
        const apidata=await axios(url);
        }


*/

export const SinglePokemonCatch = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const APIAccessMethod = import.meta.env.VITE_API_ACCESS_METHOD;

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
      let res = null,
        data = null,
        errmsg = null;

      console.log(APIAccessMethod);

      if (APIAccessMethod === "axios") {
        res = await axios.get(API);
        data = await res.data;
        errmsg = new Error("API Data Fetch Successfully Using axios().");
      } else {
        res = await fetch(API);
        data = await res.json();
        errmsg = new Error("API Data Fetch Successfully Using fetchAPI().");
      }

      if (data != null) {
        setPokemon(data);
        console.log(errmsg);
      }

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
      className={`${cssModule["pokemon-container"]} ${cssModule["pokemon-effect-container"]}`}
    >
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
