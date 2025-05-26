import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Detalles.css';


function Detalles(){
  const {nombre} = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(res => {
      if( !res.ok ) {
        throw new Error('Error al cargar el Pokemon');
      }
      return res.json();
    })
    .then(data => {
      setPokemon(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error al obtener los detalles del Pokemon:', error);
      setLoading(false);
    });
  }, [nombre]);

if (loading) return <p className='loading'>Cargando...</p>;
if (!pokemon) return <p> Pokemon no encontrado </p>;

 return (
    <div className='detalles-container'>
      <h2 className='detalles-name'> {pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className='detalles-img'
      />
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>Tipo(s): {pokemon.types.map(t => t.type.name).join(', ')}</p>
      <button onClick={() => navigate(-1)}> Volver a la lista </button>
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