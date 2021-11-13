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
}

const CardTask = (
    { item }: TasksInterface,
    setShowEditModal: (x: boolean) => () => void,
) => {
    const { deleteTask, completeTask } = useTasks();

    return (
        <TaskCard>
            <SubMenu>
                <MdOutlineModeEditOutline
                    onClick={() => setShowEditModal(true)}
                />
                <MdOutlineDeleteForever
                    onClick={() => {
                        deleteTask(Number(item.id));
                    }}
                />
            </SubMenu>

            <Title>{item.title}</Title>
            {item.xp === 1 ? (
                <EasyDifficulty />
            ) : item.xp === 3 ? (
                <MediumDifficulty />
            ) : (
                <HardDifficulty />
            )}

            <TaskButton
                onClick={() => {
                    completeTask(Number(item.id));
                    console.log(item.finished);
                }}
            >
                Completar
            </TaskButton>
        </TaskCard>
    );
};

export default CardTask;
