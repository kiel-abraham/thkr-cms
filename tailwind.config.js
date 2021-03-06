// See https://next.tailwindcss.com/docs/configuration for details

module.exports = {
    theme: {
        container: {
            center: true,
            padding: {
                default: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
            }
        },
        fontFamily: {
            'sans': ['Open sans', '-apple-system', 'BlinkMacSystemFont']
        },
        extend: {
            colors: {
                'lt-black': '#181a1d',
                'lt-black-body': '#24262B'
            }
        }
    },
    purge: {
        enabled: false // purging via gatsby-config. This just stops a warning message
    },
    variants: {},
    plugins: []
};