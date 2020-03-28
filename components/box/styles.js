import css from 'styled-jsx/css'
import theme from '../theme';

export default css`
    div {    
        background: ${theme.palette.white};
        border: ${theme.palette.border};
        border-radius: ${theme.spacing(1)};
        box-shadow: ${theme.shadow.main};
        cursor: pointer;
        padding: ${theme.spacing(1)};
    }
`