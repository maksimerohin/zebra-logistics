/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.html'
    ],
    theme: {
        extend: {
            colors: {
                'yellow': {
                    500: '#F4C74B'
                },
                'green': {
                    100: '#E1E7DC'
                },
                'gray': {
                    900: '#05111A',
                    800: '#4E4E4D',
                    50: '#F8F8F8',
                }
            }
        },
        container: {
            center: true,
            screens: {
                sm: '576px',
                md: '768px',
                lg: '768px',
                xl: '1280px',
                '2xl': '1328px',
            },
            padding: {
                DEFAULT: '10px',
                sm: '24px',
                lg: '24px',
                xl: '24px',
                '2xl': '24px',
            },
        },
    },
    plugins: [],
}

