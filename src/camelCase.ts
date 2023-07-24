/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/CamelCase)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para camelCase.
 */
export const camelCase = (word: string): string => {
  return word.replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase()).replace(/^[^a-zA-Z0-9]+(.)/g, (_, char) => char.toLowerCase());
};
