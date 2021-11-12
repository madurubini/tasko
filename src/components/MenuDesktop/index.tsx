import { Container, MenuButton } from './styles';
import User from '../../assets/image/user.png';
import { VStack } from '@chakra-ui/layout';
import { useHistory } from 'react-router';

const MenuDesktop = () => {
    const history = useHistory();
    return (
        <Container>
            <div>
                <img src={User} alt="" />
                <h3>Usuário</h3>
                <p>Level: 0000</p>
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
