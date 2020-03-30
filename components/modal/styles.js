import css from 'styled-jsx/css'
import theme from '../theme';

export default css`
    span {
        background: ${theme.palette.text};
        bottom: 0;
        left: 0;
        opacity: 0.5;
        position: fixed;
        right: 0;
        top: 0;
    }
    img {
        vertical-align: middle;
    }
    p {
        margin: ${theme.spacing(2)} 0 ${theme.spacing(4)}
    }
`
export const div = (success) => {
    return css.resolve`
      div {
        background: ${theme.palette.white};
        border-radius: ${theme.spacing(1)};
        border: ${success ? `3px solid ${theme.palette.success}` : `3px solid ${theme.palette.error}`};
        box-shadow: ${theme.shadow.medium};
        font-size: ${theme.font.size.title};
        left: 50%;
        padding: ${theme.spacing(4)} 0;
        position: fixed;
        text-align: center;
        transform: translate(-50%, -50%);
        width: 328px;
        z-index: 1;top: 50%;
      }
    `;
  }