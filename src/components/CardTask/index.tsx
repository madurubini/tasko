import { TasksProps } from '../../types/tasks';
import {
    EasyDifficulty,
    HardDifficulty,
    MediumDifficulty,
} from '../DifficultyCards';
import {
    MdOutlineDeleteForever,
    MdOutlineModeEditOutline,
} from 'react-icons/md';
import { SubMenu, TaskButton, TaskCard } from './style';
import { useTasks } from '../../providers/Tasks';
import { Title } from '../DifficultyCards/styles';

interface TasksInterface {
    item: TasksProps;
    setShowEditModal: React.Dispatch<React.SetStateAction<Boolean>>;
    showEditModal: Boolean;
    id?: number;
    setItemToEdit?: any;
}

const CardTask = ({
    item,
    setShowEditModal,
    showEditModal,
    setItemToEdit,
}: TasksInterface) => {
    const { deleteTask, completeTask, getUserTasks } = useTasks();

    return (
        <>
            <TaskCard>
                <SubMenu>
                    {item.finished === true ? (
                        <p></p>
                    ) : (
                        <>
                            <MdOutlineModeEditOutline
                                onClick={() => {
                                    setShowEditModal(true);
                                    setItemToEdit(item);
                                }}
                            ></MdOutlineModeEditOutline>
                            <MdOutlineDeleteForever
                                onClick={() => {
                                    deleteTask(Number(item.id));
                                }}
                            />
                        </>
                    )}
                </SubMenu>

                <Title>{item.title}</Title>
                {item.xp === 1 ? (
                    <EasyDifficulty />
                ) : item.xp === 3 ? (
                    <MediumDifficulty />
                ) : (
                    <HardDifficulty />
                )}
                {item.finished === true ? (
                    <Title>XP: {item.xp}</Title>
                ) : (
                    <TaskButton
                        onClick={() => {
                            getUserTasks(item.userId);
                            completeTask(Number(item.id));
                            getUserTasks(item.userId);
                        }}
                    >
                        Completar
                    </TaskButton>
                )}
            </TaskCard>
        </>
    );
};

export default CardTask;
