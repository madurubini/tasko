import { ScrollTasks } from '../../components/CardTask/style';
import { useTasks } from '../../providers/Tasks';
import Logo from '../../assets/image/logo.png';
import { LogoHeader } from '../Login/styles';
import CardTask from '../../components/CardTask';

const Dashboard = () => {
    const { tasks } = useTasks();

    return (
        <>
            <LogoHeader>
                <img src={Logo} alt="logo"></img>
            </LogoHeader>
            <ScrollTasks>
                {tasks.map((item, index) => {
                    return <CardTask key={index} item={item}></CardTask>;
                })}
            </ScrollTasks>
        </>
    );
};

export default Dashboard;
