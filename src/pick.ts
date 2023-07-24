import { Record } from '../types/record';

/**
 * Esta função mantem somente os campos de um objeto passado via parametro.
 *
 * > Importante: o objeto original não pode ser alterado.
 *
 * Ex.: pick({ a: 'lorem', b: 'ipsum', c: 'dolor'  }, 'a', 'b') === { a: 'lorem', b: 'ipsum' }
 *
 * @param record
 * @param args
 * @returns
 */

export const pick = <T extends Record, K extends keyof T>(
  record: T,
  ...args: K[]
): Pick<T, K> => {
  const pickedRecord: Pick<T, K> = {} as Pick<T, K>;

  for (let i = 0; i < args.length; i++) {
    const key = args[i];
    if (key in record) {
      pickedRecord[key] = record[key];
    }
  }

  return pickedRecord;
};
