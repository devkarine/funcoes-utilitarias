import { Record } from '../types/record';

/**
 * Esta função remove os campos de um objeto passado via parametro.
 *
 * > Importante: o objeto original não pode ser alterado.
 *
 * Ex.: omit({ a: 'lorem', b: 'ipsum', c: 'dolor'  }, 'a', 'b') === { c: 'dolor' }
 *
 * @param record
 * @param args
 * @returns
 */
export const omit = <T extends Record>(
  record: T,
  ...args: (keyof T)[]
): Record => {
  const omittedRecord: Record = {};

  for (const key in record) {
    let shouldOmit = false;

    for (let i = 0; i < args.length; i++) {
      if (key === args[i]) {
        shouldOmit = true;
        break;
      }
    }

    if (!shouldOmit) {
      omittedRecord[key] = record[key];
    }
  }

  return omittedRecord;
};
