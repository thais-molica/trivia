import css from 'styled-jsx/css'
import theme from '../theme';

export default css`
    div {    
        margin: 0 auto;
        max-width: ${theme.container};
    }

    @media ${theme.breakpoint.min.mobileL} {
        div {
            padding: 0 ${theme.spacing(3)};
        }
    }
`