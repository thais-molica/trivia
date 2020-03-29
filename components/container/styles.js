import css from 'styled-jsx/css'
import theme from '../theme';

export default css`
    div {    
        margin: 0 auto;
        max-width: ${theme.container};
        padding: 0 ${theme.spacing(3)};
    }

    @media ${theme.breakpoint.max.mobileL} {
        div {
            padding: 0 ${theme.spacing(2)};
        }
    }
`