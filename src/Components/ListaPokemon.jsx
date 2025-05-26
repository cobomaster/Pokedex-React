import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListaPokemon.css';

function ListaPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=200')
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

  const handleClick = (pokemonName) => {
    navigate(`/pokemon/${pokemonName}`);
  };

  if (loading) return <p className="loading">Cargando Pokémon...</p>;

  return (
    <ul className="lista">
      {pokemonList.map(pokemon => {
        const id = getIdFromUrl(pokemon.url);
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return (
          <li 
            key={pokemon.name} 
            className="item"
            onClick={() => handleClick(pokemon.name)}
          >
            <img
              src={imageUrl}
              alt={pokemon.name}
              className="foto"
              width="50"
              height="50"
            />
            <span className="nombre">{pokemon.name}</span>
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