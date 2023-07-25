/**
 * Retorna um array com todos os elementos únicos de todos os arrays operados
 * pela união.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
// export const union = <T>(...args: T[]): T[] => {
//   return null;
// };

export const union = <T extends any[]>(...args: T[]): T => {
  const uniqueItems: T = [] as T;

  for (let i = 0; i < args.length; i++) {
    const arr = args[i];

    for (let j = 0; j < arr.length; j++) {
      const item = arr[j];
      let isDuplicate = false;

      for (let k = 0; k < uniqueItems.length; k++) {
        if (item === uniqueItems[k]) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        uniqueItems.push(item);
      }
    }
  }

  return uniqueItems;
};
