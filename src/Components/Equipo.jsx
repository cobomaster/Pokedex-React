import './Equipo.css';

function Equipo({ equipo, eliminarPokemon }) {
  if (!equipo || equipo.length === 0) {
    return <p className="mensaje-vacio">Tu equipo está vacío</p>;
  }

  return (
    <div className="Equipo1">
      <div className="cabecero">
        <h2 className="h2">Mi equipo Pokémon</h2>
      </div>

      <div className="ListaEquipo">
        {equipo.map((pokemon, index) => (
          <div className="itemEquipo" key={index}>
            <img src={pokemon.imageUrl} alt={pokemon.name} className="imagen-equipo" />
            <h3 className="nombre-pokemon">{pokemon.name}</h3>
            <button onClick={() => eliminarPokemon(pokemon.name)} className="btn-eliminar">
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipo;
