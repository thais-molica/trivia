import css from 'styled-jsx/css'
import theme from '../theme';

export default css`
    header {    
        background: ${theme.palette.primary}; 
        color: ${theme.palette.white}; 
        font-size: ${theme.font.size.subtitle};
        padding: ${theme.spacing(2)}
    }
`