import { RegisterCard } from '../../components/RegisterCard';
import clipArt from './../../assets/image/GreenMan.png';
import { CardBox, ClipArtBox, MainContainer } from './style';

const Register = () => {
    return (
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
    );
};

export default Register;
