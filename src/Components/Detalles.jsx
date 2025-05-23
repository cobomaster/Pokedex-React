import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detalles(){
    const { name } = useParams(); // Aquí capturamos el nombre del pokemon de la URL
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {
            if(!res.ok) throw new Error ('Pokemon no encontrado');
            return res.json();
        })
        .then(data => {
            setPokemon(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }, [name]);

    if (loading) return <p>Cargando detalles... </p>
    if (error) return <p> Error: {error} </p> 

    return(
        <div style={{ textAlign: 'center'}}>
            <h2 style={{ textTransform: 'capitalize'}}> {pokemon.name} </h2>
            <img 
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width="150"
            height="150"
            />
            <p><strong> Altura: </strong>{pokemon.height}</p>
            <p><strong> Peso: </strong>{pokemon.weight}</p>
            <p><strong> Tipos: </strong>{pokemon.types.map( t => t.type.name).join (', ')} </p>
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