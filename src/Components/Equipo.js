// equipo.js
const equipo = [];

export function agregarAlEquipo(pokemon) {
  if (equipo.length >= 6) return "Límite alcanzado";
  if (equipo.includes(pokemon)) return "Ya está en el equipo";
  equipo.push(pokemon);
  return "Agregado";
}

export function quitarDelEquipo(pokemon) {
  const index = equipo.indexOf(pokemon);
  if (index !== -1) {
    equipo.splice(index, 1);
    return "Quitado";
  }
  return "No encontrado";
}

export function obtenerEquipo() {
  return [...equipo];
}

export function limpiarEquipo() {
  equipo.length = 0;
}