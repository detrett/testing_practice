import { caesarCipher } from "./caesarCipher";

it('caesar cipher: 1', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
})

it('caesar cipher: 2', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

it('caesar cipher: 3', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})