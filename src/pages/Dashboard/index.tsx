import logo from '../../assets/image/logo.png';
import Sword from '../../assets/image/sword.png';
import Grail from '../../assets/image/grail.png';
import CardTask from '../../components/CardTask';
import {
    AddIcon,
    ScrollBadge,
    ScrollTasks,
    TasksContainer,
} from '../../components/CardTask/style';
import { useTasks } from '../../providers/Tasks';
import MenuMobile from '../../components/MenuMobile';
import { LogoHeader } from '../Login/styles';
import { Container, LogoBox, Main, SubTitle } from './styles';
import { useBadges } from '../../providers/Badges';
import CardBadge from '../../components/CardBadge';
import MenuDesktop from '../../components/MenuDesktop';
import AddTaskModal from '../../components/AddTaskModal';
import { useState } from 'react';
import { AddButtonBox, ButtonBox } from '../../components/AddTaskModal/styles';
import { useUser } from '../../providers/User';
import { Button } from '@chakra-ui/button';

const Dashboard = () => {
    const { tasks, setShowEditModal, showEditModal, getUserTasks } = useTasks();
    const { controllBadges } = useBadges();
    const { id } = useUser();

    const [showAddModal, setShowAddModal] = useState<Boolean>(false);
    const [showCompletedTasks, setShowCompletedTasks] =
        useState<Boolean>(false);

    return (
        <>
            <LogoHeader>
                <img src={logo} alt="logo"></img>
            </LogoHeader>
            <Container>
                <MenuDesktop />
                <Main>
                    <SubTitle>
                        Quests <img src={Sword} alt="" />
                    </SubTitle>
                    <ButtonBox>
                        <AddIcon onClick={() => setShowAddModal(true)} />
                        <Button
                            onClick={() => {
                                setShowCompletedTasks(true);
                                getUserTasks(id);
                            }}
                        >
                            Finalizadas
                        </Button>
                        <Button
                            onClick={() => {
                                setShowCompletedTasks(false);
                                getUserTasks(id);
                            }}
                        >
                            Pendentes
                        </Button>
                    </ButtonBox>

                    <ScrollTasks>
                        <AddButtonBox>
                            {showAddModal && (
                                <AddTaskModal
                                    setShowAddModal={setShowAddModal}
                                />
                            )}

                            <TasksContainer>
                                {showCompletedTasks
                                    ? tasks
                                          .filter(
                                              (item) => item.finished === true,
                                          )
                                          .map((item, index) => (
                                              <CardTask
                                                  key={index}
                                                  item={item}
                                                  setShowEditModal={
                                                      setShowEditModal
                                                  }
                                                  showEditModal={showEditModal}
                                              ></CardTask>
                                          ))
                                    : tasks
                                          .filter(
                                              (item) => item.finished === false,
                                          )
                                          .map((item, index) => (
                                              <CardTask
                                                  key={index}
                                                  item={item}
                                                  setShowEditModal={
                                                      setShowEditModal
                                                  }
                                                  showEditModal={showEditModal}
                                              ></CardTask>
                                          ))}
                            </TasksContainer>
                        </AddButtonBox>
                    </ScrollTasks>
                    <SubTitle>
                        Minhas Conquistas <img src={Grail} alt="" />
                    </SubTitle>

                    <ScrollBadge>
                        {controllBadges.map((item, index) => {
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
