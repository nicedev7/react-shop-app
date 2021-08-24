module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-rational-order'
  ],
  ignoreFiles: ['src/**/dist/*.{css,scss}'],
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ]
  }
}
