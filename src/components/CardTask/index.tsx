import { TasksProps } from '../../types/tasks';
import { TaskCard } from './style';

interface TasksInterface {
    item: TasksProps;
}

const CardTask = ({ item }: TasksInterface) => {
    return (
        <TaskCard>
            <p>{item.title}</p>
        </TaskCard>
    );
};

export default CardTask;
