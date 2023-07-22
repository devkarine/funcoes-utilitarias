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
  // 1. preciso iterar em todo o meu array de entrada de dados.
  // 2. para cada laço, eu preciso agrupar os elementos em novos arrays, com o tamanho máximo da variavel "tamanho"
  // 3. preciso retornar um array contendo estes arrays agrupados.

  // 1. para cada valor de valores
  // 2.1 preciso criar um array com o tamanho máximo de "tamanho", caso este array ainda não exista.
  // 2.2 se ele existir, devo apenas adicionar os valores neste array, até que ele tenha um tamanho máximo permitido.
  // 2.3 se ele existir e o tamanho for superado, devo adicionar um novo array com o elemento atual no meu array de resultado.

  // valores   [1, 2, 3, 4, 5]
  // valor     1
  // tamanho   2
  // resultado [[]]
  // chunkAtual []

  const resultado: number[][] = [];

  // 1. para cada valor de valores
  for (const valor of valores) {
    let chunkAtual: number[] = resultado[resultado.length - 1];
    if (chunkAtual === undefined) {
      chunkAtual = [];
      resultado.push(chunkAtual);
    }

    // 2.2 se ele existir, devo apenas adicionar os valores neste array, até que ele tenha um tamanho máximo permitido.
    // 2.3 se ele existir e o tamanho for superado, devo adicionar um novo array com o elemento atual no meu array de resultado.
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
