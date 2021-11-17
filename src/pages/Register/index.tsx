import { motion } from 'framer-motion';
import { RegisterCard } from '../../components/RegisterCard';
import { LogoHeader } from '../Login/styles';
import Logo from '../../assets/image/logo.png';

import clipArt from './../../assets/image/GreenMan.png';
import { CardBox, ClipArtBox, MainContainer } from './style';
import { useHistory } from 'react-router';

const Register = () => {
    const history = useHistory();

    return (
        <>
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
            >
                <LogoHeader onClick={() => history.push('/dashboard')}>
                    {' '}
                    <img src={Logo} alt="logo"></img>
                </LogoHeader>
                <MainContainer>
                    <CardBox>
                        <RegisterCard />
                    </CardBox>
                    <ClipArtBox>
                        <picture>
                            <img src={clipArt} alt="" />
                        </picture>
                    </ClipArtBox>
                </MainContainer>
            </motion.div>
        </>
    );
};

export default Register;
