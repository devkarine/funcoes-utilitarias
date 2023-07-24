import { Record } from '../types/record';

/**
 * Inverte as posições das chaves e dos valores de um objeto.
 *
 * ex.:
 * invert({ 'a': 1, 'b': 2, 'c': 1 }) === { '1': 'c', '2': 'b' };
 *
 * @param record
 * @returns
 */
export const invert = (record: Record): Record => {
  const invertedRecord: Record = {};

  for (const key in record) {
    const value = record[key];
    invertedRecord[String(value)] = key;
  }

  return invertedRecord;
};
