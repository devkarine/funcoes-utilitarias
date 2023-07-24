/**
 * Retorna um array de itens únicos e comuns entre os arrays da direita e da esquerda.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const intersection = (left: number[], right: number[]): number[] => {
  const result: number[] = [];

  for (let i = 0; i < left.length; i++) {
    let found = false;

    for (let j = 0; j < right.length; j++) {
      if (left[i] === right[j]) {
        found = true;
        break;
      }
    }

    if (found) {
      let isDuplicate = false;
      for (let k = 0; k < result.length; k++) {
        if (left[i] === result[k]) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        result.push(left[i]);
      }
    }
  }

  return result;
};
