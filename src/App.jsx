import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navegacion from './Components/Navegacion.jsx';
import ListaPokemon from './Components/ListaPokemon.jsx';
import Detalles from './Components/Detalles.jsx';
import Equipo from './Components/Equipo.jsx';
import './App.css';

function App() {
  const [equipo, setEquipo] = useState([]);

  // Carga el equipo guardado en localStorage al montar
  useEffect(() => {
    const equipoGuardado = localStorage.getItem('equipo');
    if (equipoGuardado) {
      setEquipo(JSON.parse(equipoGuardado));
    }
  }, []);

  // Actualiza localStorage al eliminar un Pokémon del equipo
  const eliminarPokemon = (nombre) => {
    setEquipo((prevEquipo) => {
      const nuevoEquipo = prevEquipo.filter((pokemon) => pokemon.name !== nombre);
      localStorage.setItem('equipo', JSON.stringify(nuevoEquipo));
      return nuevoEquipo;
    });
  };

  return (
    <div className='App'>
      <h1 className='h1'>Pokedex</h1>
    <div className='menu'>
      <Navegacion />
    </div>
      <Routes>
        <Route path='/' element={<ListaPokemon equipo={equipo} setEquipo={setEquipo} />} />
        <Route path='/pokemon/:nombre' element={<Detalles equipo={equipo} setEquipo={setEquipo} />} />
        <Route path='/equipo' element={<Equipo equipo={equipo} eliminarPokemon={eliminarPokemon} />} />
      </Routes>
    </div>
  );
}

export default App;

