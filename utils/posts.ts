import { toCamelCase } from 'js-convert-case';

export function convertPostResponse(response: {}, state: {}) {
  const convertedResponse = Object.keys(response).reduce((acc, key) => {
    Object.assign(acc, { [toCamelCase(key)]: response[key as keyof typeof response] });
    return acc;
  }, {});
  Object.assign(state, convertedResponse);
}
