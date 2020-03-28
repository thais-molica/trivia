const theme = {
    palette: {
        primary: '#343C58',
        secondary: '#0467DB',
        white: '#fff',
        text: '#1E2124',
        error: '#FF4F4F',
        success: '#32CB82;',
        border: '#E4E4E6',
    },
    typography: {
        main: 'Roboto',
    },
    font: {
        size: {
            small: '14px',
            default: '16px',
            title: '24px',
            subtitle: '18px',
            highlight: '44px'
        }
    },
    spacing: (n) => `${n * 8}px`,
    container: '1024px',
    shadow: {
        main: '0px 1px 4px rgba(52, 60, 88, 0.4)',
    }
}
export default theme;