import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Detalles.css';

function Detalles({ equipo, setEquipo }) {
  const { nombre } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al cargar el Pokémon');
        }
        return res.json();
      })
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los detalles del Pokémon:', error);
        setLoading(false);
      });
  }, [nombre]);

  const añadirAlEquipo = () => {
    if (!pokemon) return;

    // Verifica si ya está en el equipo
    if (equipo.some(p => p.name === pokemon.name)) {
      alert(`${pokemon.name} ya está en tu equipo`);
      return;
    }

    // Verifica límite de equipo
    if (equipo.length >= 6) {
      alert('Tu equipo ya tiene 6 Pokémon');
      return;
    }

    const nuevoPokemon = {
      name: pokemon.name,
      imageUrl: pokemon.sprites.front_default,
    };

    setEquipo([...equipo, nuevoPokemon]);
  };

  if (loading) return <p className='cargando'>Cargando...</p>;
  if (!pokemon) return <p>Pokémon no encontrado</p>;

  return (
    <div className='Contenedor'>
      <h2 className='nombre'>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width="150"
        height="150"
      />
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>Tipo(s): {pokemon.types.map(t => t.type.name).join(', ')}</p>
      <div className="botones">
        <button onClick={añadirAlEquipo}>Añadir al equipo</button>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
  );
}

export default Detalles;
