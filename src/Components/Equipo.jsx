import './Equipo.css';

function Equipo({ equipo, eliminarPokemon }) {
  if (!equipo || equipo.length === 0) {
    return <p className="mensaje-vacio">Tu equipo está vacío</p>;
  }

  return (
    <div className="equipo-container">
      <h2>Mi equipo Pokémon</h2>
      <div className="equipo-lista">
        {equipo.map((pokemon, index) => (
          <div className="pokemon-card" key={index}>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <button onClick={() => eliminarPokemon(pokemon.name)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipo;
