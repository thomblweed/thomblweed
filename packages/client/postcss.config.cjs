const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,
    // eslint-disable-next-line no-undef
    process.env.NODE_ENV === 'production'
      ? cssnano({
          preset: 'default'
        })
      : undefined
  ]
};
