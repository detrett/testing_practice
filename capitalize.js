export function capitalize(string) {
  if (typeof string === "string")
    return string.charAt(0).toUpperCase() + string.slice(1);
  throw new Error("Not a string!");
}
