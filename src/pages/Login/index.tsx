import { LoginCard } from '../../components/LoginCard';
import Logo from '../../assets/image/logo.png';
import clipArt from './../../assets/image/GreenMan.png';
import { CardBox, ClipArtBox, LogoHeader, MainContainer } from './styles';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';

const Login = () => {
    const history = useHistory();

    return (
        <>
            <LogoHeader onClick={() => history.push('/dashboard')}>
                <img src={Logo} alt="logo"></img>
            </LogoHeader>
            <MainContainer>
                <motion.div
                    initial={{ x: -300, y: '30vh' }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                    transition={{ duration: 1.5 }}
                >
                    <CardBox>
                        <LoginCard />
                    </CardBox>
                </motion.div>
                <motion.div
                    initial={{ x: 400, y: '25vh' }}
                    animate={{ x: '0vw' }}
                    exit={{ x: 400 }}
                    transition={{ duration: 1.5 }}
                >
                    <ClipArtBox>
                        <picture>
                            <img src={clipArt} alt="" />
                        </picture>
                    </ClipArtBox>
                </motion.div>
            </MainContainer>
        </>
    );
};

export default Login;
