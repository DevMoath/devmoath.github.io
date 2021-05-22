const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,

    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

    darkMode: false,

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {},
    },

    plugins: [require('tailwindcss-question-mark')],
};
