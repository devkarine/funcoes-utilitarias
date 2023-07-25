/**
 * Retorna um array com todos os elementos únicos.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const uniq = <T>(args: T[]): T[] => {
  const uniqueItems: T[] = [];

  for (const item of args) {
    let isUnique = true;
    for (const uniqueItem of uniqueItems) {
      if (uniqueItem === item) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
};
