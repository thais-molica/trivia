import css from "styled-jsx/css";
import theme from "../theme";

const style = (active) => {
  return css.resolve`
    div {
      background: ${theme.palette.white};
      border-radius: ${theme.spacing(1)};
      border: ${active ? `3px solid ${theme.palette.secondary}` : `1px solid ${theme.palette.border}`};
      box-shadow: ${theme.shadow.main};
      padding: ${theme.spacing(1)};
    }
  `;
}
export default style;
