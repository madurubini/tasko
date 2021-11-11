import * as C from './styles';
import Logo from '../../assets/image/logo.png';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);

    function handleClick() {
        setShowLinks(!showLinks);
    }

    return (
        <C.Container>
            <C.Logo>
                <img src={Logo} alt="" />
            </C.Logo>

            <C.Menu>
                <BiMenu onClick={handleClick} />

                {showLinks && (
                    <div>
                        <Link to="/comunidade">
                            <p>Comunidade</p>
                        </Link>
                        <Link to="register">
                            <p>Cadastro</p>
                        </Link>
                        <Link to="/login">
                            <p>Login</p>
                        </Link>
                    </div>
                )}

                <C.Links>
                    <Link to="/comunidade">
                        <p>Comunidade</p>
                    </Link>
                    <Link to="/login">
                        <p>Login</p>
                    </Link>
                </C.Links>
            </C.Menu>
        </C.Container>
    );
};

export default Header;
