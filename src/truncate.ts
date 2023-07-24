/**
 * Esta função deve receber uma string e um tamanho máximo por parâmetros. Caso a string seja maior que o tamanho
 * máximo permitido, deverá "cortar" o texto, retornando uma string com o tamanho máximo permitido, com um sufixo de
 * reticências (...). As reticências devem contar no tamanho total do documento.
 * Obs1.: caso a string seja menor que o tamanho máximo permitido, retornar a string integral
 * Obs2.: caso o tamanho máximo seja menor que 3 (tamanho de "..."), retornar "..."
 *
 * @param text
 * @param size
 */
export const truncate = (text: string, size: number): string => {
  if (size < 3) {
    return '...';
  }

  if (text.length <= size) {
    return text;
  }

  return text.slice(0, size - 3) + '...';
};
