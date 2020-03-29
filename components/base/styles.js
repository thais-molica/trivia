import css from 'styled-jsx/css'
import theme from '../theme';

export default css.global`
    * {
        box-sizing: border-box;
    }
    body {    
        color: ${theme.palette.text};
        font-family: ${theme.typography.primary};
        font-size: ${theme.font.size.default};
        margin: 0;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    h1, h2 {
        margin: 0
    }
    .category-list .box {
        align-items: flex-end;
        display: flex;
        height: 104px;
        padding: ${theme.spacing(2)};
    }
    .question-page >.box {
        padding: ${theme.spacing(4)} ${theme.spacing(5)}
    }
    .question-item .box {
        min-height: 60px;
        padding: ${theme.spacing(2)}
    }
    .page-result .box {
        margin: ${theme.spacing(7)} auto;
        max-width: 534px;
        text-align: center;
        padding-bottom: ${theme.spacing(4)}
    }
`