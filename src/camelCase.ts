/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/CamelCase)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para camelCase.
 */
export const camelCase = (word: string): string => {
  if (!word || word.length === 0) {
    return '';
  }

  let result = '';
  let nextCapital = false;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (char === ' ' || char === '-' || char === '_') {
      nextCapital = true;
    } else {
      if (nextCapital) {
        result += char.toUpperCase();
        nextCapital = false;
      } else {
        result += char.toLowerCase();
      }
    }
  }

  return result;
};
