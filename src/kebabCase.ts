/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para kebabCase.
 */
export const kebabCase = (word: string): string => {
  return word
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};
