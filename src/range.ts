/**
 * Deve criar um array de tamanho igual ao primeiro parâmetro, iniciando pelo número do segundo.
 * Por Padrão, o ponto de partida será zero.
 *
 * exemplo:
 * range(10, 3) === [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 *
 * @param size
 * @param start
 */
export const range = (size: number, start = 0) => {
  // definir o numero inicial
  // definir o tamanho do array
  // a partir do numero inicial, devo repetir a construcao de um novo numero no meu array de resultado, até que alcance o tamanho do resultado.

  // a partir do zero, até o tamanho do array
  //  adiciono um valor ao meu array de resultado.

  const resultado = [];

  for (let i = 0; i < size; i++) {
    resultado.push(i + start);
  }

  return resultado;
};
