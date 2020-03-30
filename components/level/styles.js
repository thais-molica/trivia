import css from 'styled-jsx/css'
import theme from '../theme';

export default css`
    div {
        background: ${theme.palette.tertiary};
        border-radius: 14px;
        color: ${theme.palette.primary};
        display: inline-block;
        float: right;
        font-size: ${theme.font.size.smaller};
        padding: 3px ${theme.spacing(1)};
    }
    span {
        margin-left: 6px;
        text-transform: capitalize;
    }
`