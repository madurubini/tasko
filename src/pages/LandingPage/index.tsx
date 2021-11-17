import * as C from './styles';

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
import { motion } from 'framer-motion';

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
        <motion.div
            layout
            initial={{ y: -1500 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.7 }}
        >
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
                                tarefas e se sentir motivado à cumpri-lás, pois
                                será recompensado no caminho.
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
                                Colecione conquistas, com elas você poderá
                                deixar seu perfil cada vez mais completo!
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
                                Ganhe pontos de experiência para cada tarefa
                                concluída, desta forma você pode desbloquear as
                                novas conquistas da plataforma!
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
                                Participe da nossa comunidade! Lá é possível
                                tirar suas dúvidas sobre os mais diversos
                                assuntos. Além de contar com uma galera disposta
                                à ajudar!
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
                            <h3>Madu R.</h3>
                            <p>Tech Leader</p>
                            <div>
                                <a
                                    href="https://github.com/madurubini"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/madurubini/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillLinkedin />
                                </a>
                            </div>
                        </C.Members>

                        <C.Members>
                            <img src={Will} alt="" />
                            <h3>Willian S.</h3>
                            <p>Product Owner</p>
                            <div>
                                <a
                                    href="https://github.com/WillianSantosC"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/willian-santos-089a35213/
                                "
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillLinkedin />
                                </a>
                            </div>
                        </C.Members>

                        <C.Members>
                            <img src={Lucas} alt="" />
                            <h3>Lucas B.</h3>
                            <p>Scrum Master</p>
                            <div>
                                <a
                                    href="https://github.com/lucaselias99
                                "
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/lucas-elias-fideles-bas%C3%ADlio-a0b509206/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillLinkedin />
                                </a>
                            </div>
                        </C.Members>

                        <C.Members>
                            <img src={Emanuel} alt="" />
                            <h3>Emanuel M.</h3>
                            <p>Quality Assurance</p>
                            <div>
                                <a
                                    href="https://github.com/emanuelz-martins"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/emanuelzmartins/
                                "
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillLinkedin />
                                </a>
                            </div>
                        </C.Members>

                        <C.Members>
                            <img src={Julia} alt="" />
                            <h3>Julia O.</h3>
                            <p>Quality Assurance</p>
                            <div>
                                <a
                                    href="https://github.com/juliagamaol"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/julia-gama-730566213/
                                "
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiFillLinkedin />
                                </a>
                            </div>
                        </C.Members>
                    </C.Team>
                </C.Container>
            </C.MainContainer>
        </motion.div>
    );
};

export default LandingPage;
