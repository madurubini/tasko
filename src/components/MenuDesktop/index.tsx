import { Container, Logout, MenuButton } from './styles';
import User from '../../assets/image/user.png';
import { VStack } from '@chakra-ui/layout';
import { useHistory } from 'react-router';
import { useLevels } from '../../providers/Levels';
import { FaPowerOff } from 'react-icons/fa';
import { useUser } from '../../providers/User';
import CircleProgress from '../CircleXpProgress';
import Headset from '../../assets/headset.svg';
import { useQuestions } from '../../providers/Questions';
import { useComments } from '../../providers/Comments';
import { useBadges } from '../../providers/Badges';

const MenuDesktop = () => {
    const history = useHistory();
    const { userLevel } = useLevels();
    const userName = localStorage.getItem('@username') || '';

    const { logout, id } = useUser();
    const { getAllQuestions } = useQuestions();
    const { getAllComments } = useComments();
    const { setControllBadges } = useBadges();

    const badge = {
        title: 'Novo no pedaço',
        img: Headset,
        description: 'Você fez seu primeiro login!',
        BadgeId: 1,
        status: false,
        userId: id,
    };

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
                <h3>{userName}</h3>
                <p>Título: {userLevel?.title}</p>
                <p>Level: {userLevel?.level}</p>
            </div>
            <VStack spacing="5">
                <MenuButton
                    onClick={() => {
                        history.push('/comunidade');
                        getAllQuestions();
                        getAllComments();
                    }}
                >
                    Comunidade
                </MenuButton>
            </VStack>

            <Logout
                onClick={() => {
                    setControllBadges([badge]);
                    logout();
                }}
            >
                <FaPowerOff />
                <p>Logout</p>
            </Logout>
        </Container>
    );
};

export default MenuDesktop;
