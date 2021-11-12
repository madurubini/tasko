import { Button } from '@chakra-ui/button';
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
import { SubMenu, TaskCard } from './style';
import { useTasks } from '../../providers/Tasks';

interface TasksInterface {
    item: TasksProps;
}

const CardTask = ({ item }: TasksInterface) => {
    const { tasks, deleteTask, completeTask, getUserTasks } = useTasks();

    return (
        <TaskCard>
            <SubMenu>
                <MdOutlineModeEditOutline />
                <MdOutlineDeleteForever
                    onClick={() => {
                        deleteTask(Number(item.id));
                    }}
                />
            </SubMenu>

            <p>{item.title}</p>
            <HardDifficulty />

            <Button
                onClick={() => {
                    completeTask(Number(item.id));
                    console.log(item.finished);
                }}
            >
                Completar
            </Button>
        </TaskCard>
    );
};

export default CardTask;
