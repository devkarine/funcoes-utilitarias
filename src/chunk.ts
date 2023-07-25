/**
 * Cria um array de grupos de elementos divididos em tamanho máximo igual ao parâmetro tamanho. O último elemento deste
 * novo array deverá conter o restante dos itens, caso a divisão não seja perfeitamente correta.
 *
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 *
 * ex.: chunk([1, 2, 3, 4, 5], 2) === [[1, 2], [3, 4], [5]]
 *
 * @param valores array de números que deverão ser quebrados em grupos.
 * @param tamanho numero que representa o tamanho máximo de cada grupo.
 * @returns
 */
export const chunk = (valores: number[], tamanho: number): number[][] => {
  const resultado: number[][] = [];

  for (const valor of valores) {
    let chunkAtual: number[] = resultado[resultado.length - 1];
    if (chunkAtual === undefined) {
      chunkAtual = [];
      resultado.push(chunkAtual);
    }

    if (chunkAtual.length < tamanho) {
      chunkAtual.push(valor);
    } else {
      resultado.push([valor]);
    }

    console.log(chunkAtual);
  }

  return resultado;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
