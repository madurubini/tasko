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
import { LogoHeader } from '../Login/styles';
import { Container, Main, SubTitle } from './styles';
import { useBadges } from '../../providers/Badges';
import CardBadge from '../../components/CardBadge';
import MenuDesktop from '../../components/MenuDesktop';
import AddTaskModal from '../../components/AddTaskModal';
import { useState } from 'react';
import { AddButtonBox, ButtonBox } from '../../components/AddTaskModal/styles';
import { useUser } from '../../providers/User';
import { Button } from '@chakra-ui/button';
import { Redirect, useHistory } from 'react-router';
import { FadeAnimation } from '../../components/FadeAnimation';
import { BiUserCircle } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import UserStatusModal from '../../components/UserStatusModal';
import EditTaskModal from '../../components/EditTaskModal';
import { TasksProps } from '../../types/tasks';

const Dashboard = () => {
    const { tasks, setShowEditModal, showEditModal, getUserTasks } = useTasks();
    const { controllBadges } = useBadges();
    const { id, auth } = useUser();
    const [showStatusModal, setShowStatusModal] = useState<Boolean>(false);
    const history = useHistory();

    const [itemToEdit, setItemToEdit] = useState<TasksProps>({} as TasksProps);

    const [showAddModal, setShowAddModal] = useState<Boolean>(false);
    const [showCompletedTasks, setShowCompletedTasks] =
        useState<Boolean>(false);

    if (!auth) {
        return <Redirect to="/" />;
    }

    return (
        <FadeAnimation>
            <LogoHeader>
                <img
                    src={logo}
                    alt="logo"
                    onClick={() => history.push('/dashboard')}
                ></img>
                <div>
                    <BiUserCircle onClick={() => setShowStatusModal(true)} />
                    <FaUsers onClick={() => history.push('/comunidade')} />
                </div>
            </LogoHeader>
            {showStatusModal && (
                <UserStatusModal setShowStatusModal={setShowStatusModal} />
            )}
            <Container>
                <MenuDesktop />
                {showEditModal && (
                    <EditTaskModal
                        setShowEditModal={setShowEditModal}
                        item={itemToEdit}
                    />
                )}
                <Main>
                    <SubTitle>
                        Quests <img src={Sword} alt="" />
                    </SubTitle>
                    <ButtonBox>
                        <AddIcon onClick={() => setShowAddModal(true)} />
                        <Button
                            onClick={() => {
                                setShowCompletedTasks(false);
                                getUserTasks(id);
                            }}
                        >
                            Pendentes
                        </Button>
                        <Button
                            onClick={() => {
                                setShowCompletedTasks(true);
                                getUserTasks(id);
                            }}
                        >
                            Finalizadas
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
                                                  setItemToEdit={setItemToEdit}
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
                </Main>
            </Container>
        </FadeAnimation>
    );
};

export default Dashboard;
