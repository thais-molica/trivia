import css from 'styled-jsx/css'
import theme from '../theme';

export default css`
    div {
        border-radius: 10px;
        display: inline-block;
        overflow: hidden;
        padding: ${theme.spacing(2)} ${theme.spacing(4)};
        position: relative;
    }
    div:before {
        background: ${theme.palette.primary};
        bottom: 0;
        content: "";
        left: 0;
        opacity: 0.08;
        position: absolute;
        right: 0;
        top: 0;
    }
    span {
        display: inline-block;
    }
    span + span {
        margin-left: ${theme.spacing(7)}
    }
    strong {
        display: block;
        font-size: 28px;
        font-weight: 500;
    }
`