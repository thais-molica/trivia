import css from 'styled-jsx/css'
import theme from '../../../components/theme';

export default css`
    h1 {    
        font-size: ${theme.font.size.title};
        margin: ${theme.spacing(2)} 0;
    }

    a {
        cursor: pointer;
        font-size: ${theme.font.size.small};
        float: right;
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

    img {
        vertical-align: middle;
    }

    @media ${theme.breakpoint.max.mobileL} {
        h1 {
            padding: 0 ${theme.spacing(2)};
        }
        footer {
            position: relative;
        }
        footer:before {
            content: '';
            box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.25);
            position: relative;
            height: 1px;
            display: block;
            left: -40px;
            width: calc(100% + 80px);
            top: -16px;
        }
    }
    
`