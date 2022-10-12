/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            slateBorder: '#1E293B',
            verdeFondo: '#166534',
            cyanFondo: '#155E75',
            verdeFondo2: '#14532D',
            transparente: 'transparent',
            verdeTexto: '#86EFAC',
            verdeborder: '#15803D',
            negro: '#000',
            cielo: '#BAE6FD',
        },
        extend: {},
    },
    plugins: [],
}
