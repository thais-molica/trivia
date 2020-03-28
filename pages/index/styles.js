import css from 'styled-jsx/css'
import theme from '../../components/theme';

export default css.global`
    h1 {    
        font-size: ${theme.font.size.highlight};
        margin: ${theme.spacing(6)} 0 ${theme.spacing(4)};
    }
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    ul:after {
        content: "";
        flex: auto;
    }
    li {
        font-size: ${theme.font.size.subtitle};
        padding: 0 ${theme.spacing(1)} ${theme.spacing(3)};
        width: 240px;
    }
    li .box {
        align-items: flex-end;
        display: flex;
        height: 104px;
        padding: ${theme.spacing(2)};
    }
`