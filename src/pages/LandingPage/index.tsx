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

import clipGif from './../../assets/image/menInSite.gif';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Header from '../../components/Header';
import { RegisterCard } from '../../components/RegisterCard';

const LandingPage = () => {
    return (
        <C.MainContainer>
            <Header />
            <C.RegisterContainer>
                <RegisterCard />
                <img src={clipGif} alt="" />
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
                        <img src={Phone} alt="" />
                    </C.Info>

                    <C.Info>
                        <p>
                            Colecione conquistas, com elas você poderá deixar
                            seu perfil cada vez mais completo!
                        </p>
                        <img src={Moon} alt="" />
                    </C.Info>

                    <C.Info>
                        <p>
                            Ganhe pontos para cada tarefa concluída, com ele
                            você pode conseguir as conquistas da plataforma!
                        </p>
                        <img src={Chat} alt="" />
                    </C.Info>

                    <C.Info>
                        <p>
                            Participe da nossa comunidade! La você poderá tirar
                            suas dúvidas sobre os mais diversos assuntos. Como
                            também ajudar outras pessoas!
                        </p>
                        <img src={Zero} alt="" />
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
