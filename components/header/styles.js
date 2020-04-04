import css from 'styled-jsx/css'
import theme from '../theme';

export default css`
    header {    
        background: ${theme.palette.primary}; 
        font-size: ${theme.font.size.subtitle};
        padding: ${theme.spacing(2)}
    }
    a {
        color: ${theme.palette.white}; 
    }
`