import { useState, useEffect } from 'react';

function ListaPokemon(){
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(res => res.json())
    .then(data => {
        setPokemonList(data.results);
        setLoading(false);
    })
    .catch(err => {
        console.error('Error fetching pokemon: ', err);
        setLoading(false);
    });
    }, []);

    const getIdFromUrl = (url) => {
        const parts = url.split('/');
        return parts[parts.length - 2];
    };
    if (loading) return <p>Cargando Pokémon...</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {pokemonList.map(pokemon => {
        const id = getIdFromUrl(pokemon.url);
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
          <li key={pokemon.name} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <img src={imageUrl} alt={pokemon.name} width="50" height="50" style={{ marginRight: 10 }} />
            <span style={{ textTransform: 'capitalize' }}>{pokemon.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default ListaPokemon;

{/*  
  -- ListaPokemon carga y guarda una lista de Pokémon desde la API
  -- Mientras carga, muestra "Cargando Pokemon"
  -- Cuando carga, muestra una lista con imagen y nombre de cada pokemon
  -- Extrae el ID de cada Pokemon para mostrar su imagen correcta
  */}