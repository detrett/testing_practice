import { calculator } from "./calculator";

it('calculator: add', () => {
  expect(calculator.add(1, 2)).toBe(3)
})

it('calculator: subtract', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
})

it('calculator: divide', () => {
  expect(calculator.divide(24, 6)).toBe(4);
})

it('calculator: multiply', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
})