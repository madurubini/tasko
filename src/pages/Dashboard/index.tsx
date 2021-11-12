import Logo from '../../assets/image/logo.png';

import CardTask from '../../components/CardTask';
import { ScrollTasks } from '../../components/CardTask/style';
import { useTasks } from '../../providers/Tasks';
import MenuMobile from '../../components/MenuMobile';
import { LogoHeader } from '../Login/styles';

const Dashboard = () => {
    const { tasks } = useTasks();

    return (
        <>
            <LogoHeader>
                <img src={Logo} alt="logo"></img>
            </LogoHeader>
            <h2>Quests</h2>
            <ScrollTasks>
                {tasks.map((item, index) => {
                    return <CardTask key={index} item={item}></CardTask>;
                })}
            </ScrollTasks>

            <MenuMobile />
        </>
    );
};

export default Dashboard;
