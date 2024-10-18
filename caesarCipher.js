export function caesarCipher(string, shiftFactor) {
  shiftFactor = shiftFactor % 26;
  return string.split('').map(char => shiftChar(char, shiftFactor)).join('');
}

function shiftChar(char, shift) {
  const code = char.charCodeAt(0);
  if(code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  } else if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  }
  return char;
}