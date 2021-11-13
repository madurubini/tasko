import Logo from '../../assets/image/logo.png';
import Sword from '../../assets/image/sword.png';
import Grail from '../../assets/image/grail.png';
import CardTask from '../../components/CardTask';
import {
    AddButtonContainer,
    AddIcon,
    ScrollBadge,
    ScrollTasks,
} from '../../components/CardTask/style';
import { useTasks } from '../../providers/Tasks';
import MenuMobile from '../../components/MenuMobile';
import { LogoHeader } from '../Login/styles';
import { Container, Main, SubTitle } from './styles';
import { useBadges } from '../../providers/Badges';
import CardBadge from '../../components/CardBadge';
import MenuDesktop from '../../components/MenuDesktop';
import AddTaskModal from '../../components/AddTaskModal';
import { useState } from 'react';

const Dashboard = () => {
    const { tasks } = useTasks();
    const { userBadges } = useBadges();

    const [showAddModal, setShowAddModal] = useState<Boolean>(false);

    return (
        <>
            <LogoHeader>
                <img src={Logo} alt="logo"></img>
            </LogoHeader>
            <Container>
                <MenuDesktop />
                <Main>
                    <SubTitle>
                        Quests <img src={Sword} alt="" />
                    </SubTitle>
                    <ScrollTasks>
                        <AddIcon onClick={() => setShowAddModal(true)} />
                        {showAddModal && (
                            <AddTaskModal setShowAddModal={setShowAddModal} />
                        )}

                        <AddButtonContainer>
                            {tasks.map((item, index) => {
                                return (
                                    <CardTask
                                        key={index}
                                        item={item}
                                    ></CardTask>
                                );
                            })}
                        </AddButtonContainer>
                    </ScrollTasks>
                    <SubTitle>
                        Minhas Conquistas <img src={Grail} alt="" />
                    </SubTitle>

                    <ScrollBadge>
                        {userBadges.map((item, index) => {
                            return <CardBadge item={item} key={index} />;
                        })}
                    </ScrollBadge>
                    <MenuMobile />
                </Main>
            </Container>
        </>
    );
};

export default Dashboard;
