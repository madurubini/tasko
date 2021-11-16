import { Container, Logout, MenuButton } from './styles';
import User from '../../assets/image/user.png';
import { VStack } from '@chakra-ui/layout';
import { useHistory } from 'react-router';
import { useLevels } from '../../providers/Levels';
import { FaPowerOff } from 'react-icons/fa';
import { useUser } from '../../providers/User';

const MenuDesktop = () => {
    const history = useHistory();
    const { userLevel } = useLevels();

    const { logout } = useUser();

    return (
        <Container>
            <div>
                <img src={User} alt="" />
                <h3>Usuário</h3>
                <p>Level: {userLevel.LevelId}</p>
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
