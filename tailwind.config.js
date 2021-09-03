module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,

    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

    darkMode: false,

    theme: {
        extend: {
            container: {
                center: true,
            },
        },
    },

    variants: {
        extend: {},
    },

    plugins: [],
};
