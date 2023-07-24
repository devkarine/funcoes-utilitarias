/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/Snake_case)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para snakeCase.
 */
export const snakeCase = (word: string): string => {
  let snakeCased = '';
  let wordStarted = false;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (/[a-zA-Z0-9]/.test(char)) {
      snakeCased += char.toLowerCase();
      wordStarted = true;
    } else if (wordStarted) {
      snakeCased += '_';
      wordStarted = false;
    }
  }

  return snakeCased;
};
