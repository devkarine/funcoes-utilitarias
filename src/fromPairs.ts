import { KeyAndValue } from '../types/keyAndValue';
/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 *
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 *
 * @param args
 * @returns
 */

export const fromPairs = (...args: KeyAndValue[]): { [key: string]: any } => {
  const result: { [key: string]: any } = {};

  for (const pair of args) {
    const [key, value] = pair;
    result[key] = value;
  }

  return result;
};
