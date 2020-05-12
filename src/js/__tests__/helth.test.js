import healthBarState from '../healthBar';

test('healthy', () => {
  const character = {
    name: 'Маг',
    health: 90,
  };
  expect(healthBarState(character)).toBe('healthy');
});

test('wounded', () => {
  const character = {
    name: 'Маг',
    health: 45,
  };
  expect(healthBarState(character)).toBe('wounded');
});

test('critical', () => {
  const character = {
    name: 'Маг',
    health: 8,
  };
  expect(healthBarState(character)).toBe('critical');
});

test('Wrong character', () => {
  const character = {
    name: 'Маг',
    health: -1,
  };
  expect(healthBarState(character)).toBe(null);
});
