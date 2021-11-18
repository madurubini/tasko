import { Container, Logout, MenuButton } from './styles';
import User from '../../assets/image/user.png';
import { VStack } from '@chakra-ui/layout';
import { useHistory } from 'react-router';
import { useLevels } from '../../providers/Levels';
import { FaPowerOff } from 'react-icons/fa';
import { useUser } from '../../providers/User';
import CircleProgress from '../CircleXpProgress';

const MenuDesktop = () => {
    const history = useHistory();
    const { userLevel } = useLevels();
    const { userName } = useUser();

    const { logout } = useUser();

    return (
        <Container>
            <div>
                <CircleProgress>
                    <img
                        src={User}
                        alt=""
                        style={{ position: 'absolute', top: '25px' }}
                    />
                </CircleProgress>
                {console.log(userName)}
                <h3>{userName}</h3>
                <p>Título: {userLevel.title}</p>
                <p>Level: {userLevel?.level}</p>
            </div>
            <VStack spacing="5">
                <MenuButton onClick={() => history.push('/comunidade')}>
                    Comunidade
                </MenuButton>
                <MenuButton>Status</MenuButton>
            </VStack>

            <Logout onClick={logout}>
                <FaPowerOff />
                <p>Logout</p>
            </Logout>
        </Container>
    );
};

export default MenuDesktop;
