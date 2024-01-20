module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-empty': [0],
    'subject-empty': [0],
    'subject-case': [0],
    'type-enum': [0],
    'function-rules/type-enum': [
      2,
      'always',
      (parsed) => {
        const headerRegex =
          /(build|chore|ci|docs|refactor|revert|style|test|fix|feat|perf)(\([a-z]+\))?: APM-(\d+) .+/;
        let isHeaderValid =
          parsed.header.match(headerRegex) ||
          parsed.header.match(/^Bump version/);
        if (isHeaderValid) {
          return [true];
        }

        return [
          false,
          `❌ The commit message must match this regex: ${headerRegex} ❌ \n \n Example: 🚀 feat: APM-443 setup git conventional 🚀`,
        ];
      },
    ],
  },
};
