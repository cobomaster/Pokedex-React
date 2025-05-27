// equipo.test.js
import {
  agregarAlEquipo,
  quitarDelEquipo,
  obtenerEquipo,
  limpiarEquipo
} from '../equipo.js'; // Ajustá la ruta según dónde lo guardaste

beforeEach(() => {
  limpiarEquipo(); // Para que cada test empiece con el equipo vacío
});

test('agrega un Pokémon correctamente', () => {
  expect(agregarAlEquipo('Pikachu')).toBe('Agregado');
  expect(obtenerEquipo()).toContain('Pikachu');
});

test('no permite agregar más de 6 Pokémon', () => {
  ['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle', 'Eevee', 'Snorlax'].forEach(p => agregarAlEquipo(p));
  expect(agregarAlEquipo('Mewtwo')).toBe('Límite alcanzado');
  expect(obtenerEquipo().length).toBe(6);
});

test('no permite agregar un Pokémon duplicado', () => {
  agregarAlEquipo('Pikachu');
  expect(agregarAlEquipo('Pikachu')).toBe('Ya está en el equipo');
  expect(obtenerEquipo()).toEqual(['Pikachu']);
});

test('quita un Pokémon correctamente', () => {
  agregarAlEquipo('Pikachu');
  expect(quitarDelEquipo('Pikachu')).toBe('Quitado');
  expect(obtenerEquipo()).not.toContain('Pikachu');
});

test('devuelve error si intenta quitar un Pokémon que no está', () => {
  expect(quitarDelEquipo('Charmander')).toBe('No encontrado');
});