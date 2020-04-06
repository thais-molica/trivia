import css from 'styled-jsx/css'
import theme from '../theme';

export default css`
    button {    
        background: ${theme.palette.secondary};
        border: none;
        border-radius: ${theme.spacing(1)};
        color: ${theme.palette.white};
        cursor: pointer;
        display: block;
        font-family: ${theme.typography.secondary};
        font-size: ${theme.font.size.default};
        margin: 0 auto;
        padding: ${theme.spacing(2)} ${theme.spacing(4)};
    }

    button:disabled {
        background: ${theme.palette.disabled};
    }
`