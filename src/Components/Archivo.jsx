import React, { useEffect, useState } from 'react';

function Equipo(){
    const [equipo, setEquipo] = useState([]);

    useEffect(() => {
        // cargar equipo desde localStorage si existe 
        const salvarEquipo = localStorage.getItem('equipo');
        if (salvarEquipo) {
            setEquipo(JSON.parse(salvarEquipo));
        }
    }, []);

    const handleEliminar = (name) => {
        const nuevoEquipo = equipo.filter(pokemon => pokemon.name !== name);
        setEquipo(nuevoEquipo);
        localStorage.setItem('equipo', JSON.stringify(nuevoEquipo));
    };

    if(equipo.length === 0) {
        return <h2>No tienes ningún Pokémon en tu equipo</h2>;
    }

    return (
        <div>
            <h2> Me equipo </h2>
            <ul>
                {equipo.map(pokemon => (
                    <li key={pokemon.name}>
                        {pokemon.name} 
                        <button onClick={() => handleEliminar(pokemon.name)}>Eliminar</button>
                    </li>
                ))}
                </ul>
        </div>
    );
}

export default Equipo;