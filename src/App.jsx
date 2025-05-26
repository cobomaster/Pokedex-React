import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navegacion from './Components/Navegacion.jsx';
import ListaPokemon from './Components/ListaPokemon.jsx';
import Detalles from './Components/Detalles.jsx';

function App() {
  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <Navegacion />
      <Routes>
        <Route path="/" element={<ListaPokemon />} />
        <Route path="/pokemon/:nombre" element={<Detalles />} />
        <Route path="/equipo" element={<p>Mi equipo (en construcción)</p>} />
      </Routes>
    </div>
  );
}

export default App;


{/*   
  Explicacion del codigo hasta este punto:
  Usamos useEffect para hacer fetch cuando el componente se monta
  Guarda la lista de Pokemon en el estado pokemonList
  Mientras carga, muestra "Cargando Pokemon"
  Cuando termina, lista los nombres  
  */}

