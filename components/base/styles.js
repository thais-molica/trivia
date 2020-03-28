import css from 'styled-jsx/css'
import theme from '../theme';

export default css.global`
    * {
        box-sizing: border-box;
    }
    body {    
        color: ${theme.palette.text};
        font-family: ${theme.typography.main};
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
    .category-list .box {
        align-items: flex-end;
        display: flex;
        height: 104px;
        padding: ${theme.spacing(2)};
    }
`