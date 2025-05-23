import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Detalles() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar detalles del Pokémon: ', err);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Cargando detalles...</p>;
  if (!pokemon) return <p>Pokémon no encontrado</p>;

  return (
    <div>
      <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width="150"
        height="150"
      />
      <p>Peso: {pokemon.weight}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Tipos:</p>
      <ul>
        {pokemon.types.map(t => (
          <li key={t.type.name}>{t.type.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Detalles;






{/*  
  -- Capturamos el parametro (por ejemplo, el nombre) que llega desde la URL con React Router
  -- Usamos el parametro para hacer una llamada a la API y obtenemos los datos completos del Pokemon seleccionado
  -- Mostrar detalles como imagen grande, tipo, habilidades, estadisticas, descripcion, etc
  -- Manejar estado de carga y posibles errores
  */}