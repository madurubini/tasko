import { motion } from 'framer-motion';
import { RegisterCard } from '../../components/RegisterCard';
import clipArt from './../../assets/image/GreenMan.png';
import { CardBox, ClipArtBox, MainContainer } from './style';

const Register = () => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
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
    );
};

export default Register;
