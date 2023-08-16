import {Link} from 'react-router-dom';/*
import { ReactComponent as LogoDark } from 'src/assets/images/logos/work.svg';
import { ReactComponent as logo2 } from 'src/assets/images/logos/work.svg';*/
import logo from 'src/assets/images/logos/work.png';
import {styled} from '@mui/material';

const LinkStyled = styled(Link)(() => ({
    height: '70px',
    width: '300px',
    overflow: 'hidden',
    display: 'block',
}));

const Logo = () => {
    return (
        <LinkStyled to="/">
          <img src={logo} alt="main logo" className="main-logo" height="100%"/>
        </LinkStyled>
    )
};

export default Logo;

/*<LogoDark height={70}*/