import css from 'styled-jsx/css'
import theme from '../../components/theme';

export default css`
    h1 {    
        font-size: ${theme.font.size.title};
        margin: ${theme.spacing(2)} 0;
    }

    h1 span {
        cursor: pointer;
        font-size: ${theme.font.size.small};
        float: right;
    }

    h1 span img {
        vertical-align: middle;
    }
    
`