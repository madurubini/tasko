import * as C from './styles';
import Phone from '../../assets/image/phone.png';
import Moon from '../../assets/image/moon.png';
import Chat from '../../assets/image/chat.png';
import Zero from '../../assets/image/zero.png';

import Will from '../../assets/image/will.png';
import Madu from '../../assets/image/madu.png';
import Emanuel from '../../assets/image/emanuel.png';
import Julia from '../../assets/image/julia.png';
import Lucas from '../../assets/image/lucas.png';

import animationData from './../../assets/json/72259-team.json';
import cellphone from './../../assets/json/72842-icon-2-chat.json';
import community from './../../assets/json/4580-community.json';
import achivement from './../../assets/json/72470-right-sign.json';
import counter from './../../assets/json/80253-count43.json';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Header from '../../components/Header';
import { RegisterCard } from '../../components/RegisterCard';
import Lottie from 'react-lottie';
import { useState } from 'react';

const LandingPage = () => {
    const [animationState] = useState({
        isStopped: false,
        isPaused: false,
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const achivementOptions = {
        loop: true,
        autoplay: true,
        animationData: achivement,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const cellphoneOptions = {
        loop: true,
        autoplay: true,
        animationData: cellphone,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const communityOptions = {
        loop: true,
        autoplay: true,
        animationData: community,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const counterOptions = {
        loop: true,
        autoplay: true,
        animationData: counter,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <C.MainContainer>
            <Header />
            <C.RegisterContainer>
                <RegisterCard />
                <C.ClipGif>
                    <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                        speed={0.5}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                    />
                </C.ClipGif>
            </C.RegisterContainer>
            <C.Container>
                <h1>Sobre</h1>
                <C.About>
                    <C.Info>
                        <p>
                            Uma aplicação multiplataforma, disponível
                            gratuítamente para o usuário administrar suas
                            tarefas e se sentir motivado à cumpri-lás, pois será
                            recompensado no caminho.
                        </p>
                        <Lottie
                            options={cellphoneOptions}
                            height={300}
                            width={300}
                            speed={0.5}
                            isStopped={animationState.isStopped}
                            isPaused={animationState.isPaused}
                        />
                    </C.Info>

                    <C.Info>
                        <p>
                            Colecione conquistas, com elas você poderá deixar
                            seu perfil cada vez mais completo!
                        </p>
                        <Lottie
                            options={achivementOptions}
                            height={300}
                            width={300}
                            speed={0.5}
                            isStopped={animationState.isStopped}
                            isPaused={animationState.isPaused}
                        />
                    </C.Info>

                    <C.Info>
                        <p>
                            Ganhe pontos para cada tarefa concluída, com ele
                            você pode conseguir as conquistas da plataforma!
                        </p>
                        <Lottie
                            options={communityOptions}
                            height={300}
                            width={300}
                            speed={0.5}
                            isStopped={animationState.isStopped}
                            isPaused={animationState.isPaused}
                        />
                    </C.Info>

                    <C.Info>
                        <p>
                            Participe da nossa comunidade! La você poderá tirar
                            suas dúvidas sobre os mais diversos assuntos. Como
                            também ajudar outras pessoas!
                        </p>
                        <Lottie
                            options={counterOptions}
                            height={300}
                            width={300}
                            speed={0.5}
                            isStopped={animationState.isStopped}
                            isPaused={animationState.isPaused}
                        />
                    </C.Info>
                </C.About>

                <h1>Equipe</h1>
                <C.Team>
                    <C.Members>
                        <img src={Madu} alt="" />
                        <div>
                            <AiFillGithub />
                            <AiFillLinkedin />
                        </div>
                    </C.Members>

                    <C.Members>
                        <img src={Will} alt="" />
                        <div>
                            <AiFillGithub />
                            <AiFillLinkedin />
                        </div>
                    </C.Members>

                    <C.Members>
                        <img src={Lucas} alt="" />
                        <div>
                            <AiFillGithub />
                            <AiFillLinkedin />
                        </div>
                    </C.Members>

                    <C.Members>
                        <img src={Emanuel} alt="" />
                        <div>
                            <AiFillGithub />
                            <AiFillLinkedin />
                        </div>
                    </C.Members>

                    <C.Members>
                        <img src={Julia} alt="" />
                        <div>
                            <AiFillGithub />
                            <AiFillLinkedin />
                        </div>
                    </C.Members>
                </C.Team>
            </C.Container>
        </C.MainContainer>
    );
};

export default LandingPage;
