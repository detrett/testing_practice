import { reverseString } from "./reverseString";

it('reverseString', () => {
  expect(reverseString("odin")).toBe('nido');
})

it('reverseString', () => {
  expect(reverseString("baobab")).toBe('baboab');
})

it('reverseString', () => {
  expect(reverseString("Hot mama")).toBe('amam toH');
})