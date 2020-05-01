import escapeString from './escapeString/index.mjs';

const replaceGlobChars = (glob) => {
  return glob
    .replace(/\\\*/g, '.*')
    .replace(/\\\?/g, '.');
}

const getRegExp = (glob) => {
  const endsWithWildcard = glob.endsWith('*');
  if (endsWithWildcard) {
    return new RegExp(
      '^'
        + replaceGlobChars(
            escapeString(
              glob.replace(/\/\*$/g, '')
            )
          )
        + '(/.+)?'
        + '$'
    )
  }

  return new RegExp(
    '^'
      + replaceGlobChars(escapeString(glob))
      + '$'
  )
}

const matchesGlob = (glob, url) => {
  const globRegex = getRegExp(glob);

  return globRegex.test(url);
}

console.log(
  matchesGlob(
    'https://beta.fastmail.com/[a-z]?',
    process.argv[2]
  )
);
