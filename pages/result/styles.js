import css from 'styled-jsx/css'
import theme from '../../components/theme';
import IMG from '../../assets/imgs/mascot.svg';

export default css`
    header {
        background: url(${IMG}) no-repeat 30% center ${theme.palette.secondary};
        color: ${theme.palette.white};
        display: flex;
        flex-direction: column;
        font-family: ${theme.typography.secondary};
        justify-content: center;
        margin: ${theme.spacing(-1)};
        min-height: 237px;
    }
    span {
        display: block;
        margin: 0 auto;
        padding-left: ${theme.spacing(4)};
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
        box-shadow: ${theme.shadow.large};
        font-family: ${theme.typography.secondary};
        font-size: ${theme.font.size.small};
        font-weight: 900;
        display: inline-block;
        margin: -7px calc( 63% - 250px);
        padding: ${theme.spacing(1)};
    }
`
