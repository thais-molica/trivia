import css from 'styled-jsx/css'
import theme from '../../../components/theme';

export default css`
    h1 {    
        font-size: ${theme.font.size.title};
        margin: ${theme.spacing(2)} 0;
    }

    h1 a {
        cursor: pointer;
        font-size: ${theme.font.size.small};
        float: right;
    }

    h1 span img {
        vertical-align: middle;
    }

    h2 {
        font-family: ${theme.typography.secondary};
        font-size: ${theme.font.size.subtitle};
        font-weight: 500;
    }

    ul {
        margin: ${theme.spacing(5)} 0 ${theme.spacing(6)};
    }

    li + li {
        margin-top: ${theme.spacing(2)};
    }
    
`