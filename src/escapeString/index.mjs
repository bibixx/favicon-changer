import escapeStringRegexp from 'escape-string-regexp';
import { regexp } from './regexp.mjs';

const replaceFn = (match, p1, p2) => {
  if (p2) {
    return `[${p1}-${p2}]`;
  }

  return `[${p1}]`;
};

const escapeString = (text) => {
  return escapeStringRegexp(text)
    .replace(regexp, replaceFn)
}

export default escapeString;
