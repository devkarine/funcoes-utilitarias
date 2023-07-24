/**
 * Retorna apenas os itens do array da esquerda (primeiro parâmetro) não presentes no array da direita (segundo parâmetro)
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const difference = (left: number[], right: number[]): number[] => {
  const result: number[] = [];

  for (let i = 0; i < left.length; i++) {
    const item = left[i];
    let found = false;

    for (let j = 0; j < right.length; j++) {
      if (item === right[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(item);
    }
  }

  return result;
};
