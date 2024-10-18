import { capitalize } from "./capitalize";

it('capitalize: lower case word (1)', () => {
  expect(capitalize("capitalize")).toBe("Capitalize");
});

it('capitalize: lower case word (2)', () => {
  expect(capitalize("odin")).toBe("Odin");
});

it('capitalize: upper case word (1)', () => {
  expect(capitalize("Odin")).toBe("Odin");
});

it('capitalize: upper case word (2)', () => {
  expect(capitalize("ODIN")).toBe("ODIN");
});

it('capitalize: mixed case word (1)', () => {
  expect(capitalize("oDIN")).toBe("ODIN");
});

it('capitalize: not a string', () => {
  expect(() => capitalize(123)).toThrow('Not a string!');
});

it('capitalize: empty string', () => {
  expect(capitalize("")).toBe("");
})


it('capitalize: single character', () => {
  expect(capitalize("a")).toBe("A");
})