// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    height: {
     lg: '350px',
     xl: '550px',
    }
  },
  extend: {
    colors: {
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")]
};