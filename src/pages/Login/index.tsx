import { LoginCard } from '../../components/LoginCard';

import clipArt from './../../assets/image/GreenMan.png';
import { CardBox, ClipArtBox, MainContainer } from './styles';

const Login = () => {
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

export default Login;
