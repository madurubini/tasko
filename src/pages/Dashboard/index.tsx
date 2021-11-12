
import { Button } from '@chakra-ui/button';
import CardTask from '../../components/CardTask';
import { ScrollTasks, TaskCard } from '../../components/CardTask/style';
import { useTasks } from '../../providers/Tasks';
import { TasksProps } from '../../types/tasks';
 import MenuMobile from '../../components/MenuMobile';

const Dashboard = () => {
    const { tasks } = useTasks();

    console.log(tasks);

    return (<>
      
            <MenuMobile />
        <ScrollTasks>
            {tasks.map((item: TasksProps, index: number) => {
                return (
                    <TaskCard key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.difficulty}</p>
                        <button>Completar</button>
                    </TaskCard>
                );
            })}
        </ScrollTasks>
        </>

    );
};

export default Dashboard;
