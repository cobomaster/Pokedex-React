import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [pokemonLIst, setPokemonList ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(res => res.json())
        .then(data => {
          setPokemonList(data.results);
          setLoading(false);
        })
        .catch(err => {
          console.error( 'Error fetching pokemon: ', err);
          setLoading(false);
        });
  }, []);

  if (loading) return <p> Cargando Pokemon... </p>;

  return (
    <div className='App'>
      <h1> Pokedex </h1>
        <ul>
          {pokemonLIst.map(pokemon => (
            <li key={pokemon.name}> {pokemon.name} </li>
          ))}
        </ul>
    </div>
  );
}

{/*   
  Explicacion del codigo hasta este punto:
  Usamos useEffect para hacer fetch cuando el componente se monta
  Guarda la lista de Pokemon en el estado pokemonList
  Mientras carga, muestra "Cargando Pokemon"
  Cuando termina, lista los nombres  
  */}

export default App
