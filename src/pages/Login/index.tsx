import { LoginCard } from '../../components/LoginCard';
import Logo from '../../assets/image/logo.png';
import clipArt from './../../assets/image/GreenMan.png';
import { CardBox, ClipArtBox, LogoHeader, MainContainer } from './styles';

const Login = () => {
    return (
        <>
            <LogoHeader>
                <img src={Logo} alt="logo"></img>
            </LogoHeader>
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
        </>
    );
};

export default Login;
