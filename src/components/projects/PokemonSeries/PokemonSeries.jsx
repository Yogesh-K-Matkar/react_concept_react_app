import { useEffect, useState } from "react";
import "./PokemonSeries.css";
import { PokemonCard } from "./PokemonCards";

/* Notes:-
    
    Type to Promise Methods to fetch reponse:-
    1. Promise.all :- When any of Single Promise is not fullfilled/failed in array of Promisess then all Promisess will be failed.
    2. Promise.allsettled
    3. Promise.race

*/

export const PokemonSeries = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errmessage, setErrorMsg] = useState("");

  const [searchPokemon, setSearchPokemon] = useState("");

  const API = import.meta.env.VITE_POKEMON_API_URL; //"https://pokeapi.co/api/v2/pokemon?limit=649";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      //console.log(data);

      const fetchPokemonList = data.results;
      //console.log(fetchPokemonList);

      if (fetchPokemonList.length > 0) {
        const fetchPokemonDetailPromises = fetchPokemonList.map(
          async (fetchPokemonListItem) => {
            //console.log(fetchPokemonListItem.url);

            const API = fetchPokemonListItem.url;

            const res = await fetch(API);
            const data = await res.json();
            //console.log(data);

            return data;
          }
        );
        //console.log(fetchPokemonDetailPromises);

        const getPokemonsDetails = await Promise.all(
          fetchPokemonDetailPromises
        );

        console.log(getPokemonsDetails);
        setPokemons(getPokemonsDetails);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (errmessage != "") {
    return <h1>{errmessage}</h1>;
  }

  if (pokemons.length > 0) {
    return (
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            className="pokemon-searchinput"
            type="text"
            name="searchPokemon"
            placeholder="Search Pokemon"
            value={searchPokemon}
            onChange={(evt) => setSearchPokemon(evt.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {pokemons
              .filter((fltPokemon) =>
                fltPokemon.name
                  .toLowerCase()
                  .startsWith(searchPokemon.toLowerCase())
              )
              .map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemonData={pokemon} />
              ))}
          </ul>
        </div>
      </section>
    );
  }
};
