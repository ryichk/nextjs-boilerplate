module.exports = {
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    semi: 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
