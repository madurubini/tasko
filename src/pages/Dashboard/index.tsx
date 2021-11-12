import Logo from '../../assets/image/logo.png';

import CardTask from '../../components/CardTask';
import { ScrollTasks } from '../../components/CardTask/style';
import { useTasks } from '../../providers/Tasks';
import MenuMobile from '../../components/MenuMobile';
import { LogoHeader } from '../Login/styles';
import { SubTitle } from './styles';
import { useBadges } from '../../providers/Badges';
import CardBadge from '../../components/CardBadge';

const Dashboard = () => {
    const { tasks } = useTasks();
    const { userBadges } = useBadges();

    return (
        <>
            <LogoHeader>
                <img src={Logo} alt="logo"></img>
            </LogoHeader>
            <SubTitle>Quests</SubTitle>
            <ScrollTasks>
                {tasks.map((item, index) => {
                    return <CardTask key={index} item={item}></CardTask>;
                })}
            </ScrollTasks>
            <SubTitle>Minhas Conquistas</SubTitle>

            <ScrollTasks>
                {userBadges.map((item, index) => {
                    return <CardBadge item={item} key={index} />;
                })}
            </ScrollTasks>

            <MenuMobile />
        </>
    );
};

export default Dashboard;
