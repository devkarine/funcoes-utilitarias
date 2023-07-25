/**
 * Converts string to start case (https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para startCase.
 */

export const startCase = (word: string): string => {
  return word
    .replace(
      /(?:^|[A-Z]|[-_ ]+)([a-zA-Z0-9])/g,
      (_, char) => ` ${char.toUpperCase()}`,
    )
    .trim();
};
