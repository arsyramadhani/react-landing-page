module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                'header-m': '450px',
                'header-l': '600px',
            },
            fontFamily: {
                sans: ['Lato'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    important: true,
};
