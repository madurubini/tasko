import Logo from '../../assets/image/logo.png';
import Sword from '../../assets/image/sword.png';
import Grail from '../../assets/image/grail.png';

import CardTask from '../../components/CardTask';
import { ScrollTasks } from '../../components/CardTask/style';
import { useTasks } from '../../providers/Tasks';
import MenuMobile from '../../components/MenuMobile';
import { LogoHeader } from '../Login/styles';
import { Container, Main, SubTitle } from './styles';
import { useBadges } from '../../providers/Badges';
import CardBadge from '../../components/CardBadge';
import MenuDesktop from '../../components/MenuDesktop';

const Dashboard = () => {
    const { tasks } = useTasks();
    const { userBadges } = useBadges();

    return (
        <Container>
            <MenuDesktop />
            <Main>
                <LogoHeader>
                    <img src={Logo} alt="logo"></img>
                </LogoHeader>
                <SubTitle>
                    Quests <img src={Sword} alt="" />
                </SubTitle>
                <ScrollTasks>
                    {tasks.map((item, index) => {
                        return <CardTask key={index} item={item}></CardTask>;
                    })}
                </ScrollTasks>
                <SubTitle>
                    Minhas Conquistas <img src={Grail} alt="" />
                </SubTitle>

                <ScrollTasks>
                    {userBadges.map((item, index) => {
                        return <CardBadge item={item} key={index} />;
                    })}
                </ScrollTasks>

                <MenuMobile />
            </Main>
        </Container>
    );
};

export default Dashboard;
