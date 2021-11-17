import * as C from './styles';
import Logo from '../../assets/image/logo.png';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
                    <motion.div
                        initial={{ y: -15, x: '50vw' }}
                        animate={{ y: 5 }}
                        exit={{ y: -150 }}
                        transition={{ duration: 1 }}
                    >
                        <Link to="/comunidade">
                            <p>Comunidade</p>
                        </Link>
                        <Link to="register">
                            <p>Cadastro</p>
                        </Link>
                        <Link to="/login">
                            <p>Login</p>
                        </Link>
                        <C.CloseMenu onClick={() => setShowLinks(false)} />
                    </motion.div>
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
