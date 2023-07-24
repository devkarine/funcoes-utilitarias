import { Record } from '../types/record';

/**
 * Esta função deve receber uma string contendo padrões de substituição no formato `{{variavel}}`, e um objeto
 * com as substituições, onde a chave do objeto é a variável substituída no padrão, e o valor é o texto a ser
 * aplicado.
 *
 * Exemplo:
 *   template(
 *     'olá {{cliente}}, favor confirmar o atendimento às {{horas}} do dia {{data}}',
 *     { cliente: 'John Doe', horas: '12hs', '29 de maio' }
 *   );
 *
 * é igual
 *
 * olá John Doe, favor confirmar o atendimento às 12hs do dia 29 de maio
 *
 * @param templateString
 * @param matchers
 * @returns
 */
export const template = (templateString: string, matchers: Record): string => {
  let resultString = templateString;

  for (const key in matchers) {
    const pattern = `{{${key}}}`;
    const value = matchers[key];
    resultString = resultString.replace(new RegExp(pattern, 'g'),String(value),);
  }

  return resultString;
};
