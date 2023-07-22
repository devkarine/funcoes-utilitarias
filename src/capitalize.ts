/**
 * Coloca a primeira letra do texto em maiúsculas, e o restante em minúsculas.
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para capitalize.
 */
export const capitalize = (text: string): string => {
  if (text.length === 0) {
    return text;
  }

  const firstLetter = text.charAt(0).toUpperCase();
  const restOfTheText = text.slice(1).toLowerCase();

  return firstLetter + restOfTheText;
};
