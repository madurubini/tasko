import { LoginCard } from '../../components/LoginCard';

import clipArt from './../../assets/image/GreenMan.png';
import { CardBox, ClipArtBox, MainContainer } from './styles';

const Register = () => {
    return (
        <MainContainer>
            <CardBox>
                <LoginCard />
            </CardBox>
            <ClipArtBox>
                <picture>
                    <img src={clipArt} alt="" />
                </picture>
            </ClipArtBox>
        </MainContainer>
    );
};

export default Register;
