import css from 'styled-jsx/css'
import theme from '../../../components/theme';
import IMG from '../../imgs/mascot.svg';

export default css`
    header {
        background: url(${IMG}) no-repeat 15% center ${theme.palette.secondary};
        color: ${theme.palette.white};
        display: flex;
        flex-direction: column;
        font-family: ${theme.typography.secondary};
        justify-content: center;
        margin: ${theme.spacing(-1)} ${theme.spacing(-1)} ${theme.spacing(8)};
        min-height: 237px;
        position: relative;
    }
    span {
        display: block;
        margin: 0 auto;
        padding-left: ${theme.spacing(11)};
        text-align: left;
    }
    h1 {
        font-size: ${theme.font.size.tabletHighlight};
        font-weight: 500;
    }
    h2 {
        font-size: ${theme.font.size.subtitle};
        font-weight: 500;
    }
    p {
        background: ${theme.palette.white};
        border-radius: 5px;
        bottom: -32px;
        box-shadow: ${theme.shadow.large};
        color: ${theme.palette.text};
        display: inline-block;
        font-family: ${theme.typography.secondary};
        font-size: ${theme.font.size.small};
        font-weight: 900;
        left: 50%;
        padding: ${theme.spacing(1)};
        position: absolute;
        transform: translateX(-50%);
        white-space: nowrap;
    }
    ul {
        display: flex;
        margin: ${theme.spacing(5)} 0;
    }
    li {
        flex: 1;
    }
    li + li {
        border-left: 1px solid ${theme.palette.borderDark};
    }

    @media ${theme.breakpoint.max.mobileL} {
        header {
            background-position: ${theme.spacing(3)} center;
            background-size: 25%;
            padding-left: ${theme.spacing(7.5)};
            margin-left: -9px;
            margin-right: -9px;
        }
        h1 {
            font-size: ${theme.font.size.mobileHighlight};
        }
        span {
            padding-left: ${theme.spacing(4)};
        }
    }
`
