import css from 'styled-jsx/css'
import theme from '../theme';

export default css`
    strong {
        font-size: ${theme.font.size.small};
        font-weight: 900;
    }
    span {
        display: block;
        font-size: ${theme.font.size.small};
    }
`