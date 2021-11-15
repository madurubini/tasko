import { Container, MenuButton } from './styles';
import User from '../../assets/image/user.png';
import { VStack } from '@chakra-ui/layout';
import { useHistory } from 'react-router';
import { useLevels } from '../../providers/Levels';
const MenuDesktop = () => {
    const history = useHistory();
    const { userLevel } = useLevels();
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
        </Container>
    );
};

export default MenuDesktop;
