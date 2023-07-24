/**
 * Converte a string para pascal case (semelhante ao camel case, mas com a primeira letra maiuscula)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para pascalCase.
 */
export const pascalCase = (word: string): string => {
  return word.replace(/(^|[-_ ])([a-zA-Z])/g, (_, prefix, char) => char.toUpperCase(),
  );
};
