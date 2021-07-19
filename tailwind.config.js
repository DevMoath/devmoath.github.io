module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,

    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

    darkMode: 'media',

    theme: {
        extend: {},
    },

    variants: {
        extend: {},
    },

    plugins: [require('daisyui')],

    daisyui: {
        themes: true,
    },
};
