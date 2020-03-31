import css from 'styled-jsx/css'
import theme from '../../../components/theme';

export default css`
    h1 {    
        font-size: ${theme.font.size.mobileHighlight};
        margin: ${theme.spacing(4)} 0 ${theme.spacing(2)};
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
        width: 50%;
    }
    
    @media ${theme.breakpoint.min.desk} {
        h1 {    
            font-size: ${theme.font.size.highlight};
            margin: ${theme.spacing(6)} 0 ${theme.spacing(4)};
        }
    }
    
    @media ${theme.breakpoint.max.mobileL} {
        h1 {
            padding: 0 ${theme.spacing(2)};
        }
    }
    
    @media ${theme.breakpoint.min.mobileL} {
        li {
            width: 33.33%;
        }
    }
    
    @media ${theme.breakpoint.min.tablet} {
        h1{
            font-size: ${theme.font.size.tabletHighlight};
            margin: ${theme.spacing(5)} 0 ${theme.spacing(4)};
        }
        li {
            width: 25%;
        }
    }
`