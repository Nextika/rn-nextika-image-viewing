module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  proseWrap: 'always',
  importOrder: [
    '^base/|^components/|^helpers/|^hooks/|^modules/|^navigation/|^screens/|^styles/',
    '^[./]',
    '^assets/',
  ],
  importOrderSeparation: true,
  importOrderParserPlugins: [
    'typescript',
    'jsx',
    'tsx',
    'ts',
    'js',
    '["decorators-legacy", {"decoratorsBeforeExport": true}]',
    'classProperties',
  ],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};