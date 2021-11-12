import { Container } from './styles';
import { BiStats, BiUserCircle } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { BsChatText } from 'react-icons/bs';

const MenuMobile = () => {
    return (
        <Container>
            <div>
                <BiStats />
                <FaUsers />
            </div>
            <div>
                <BsChatText />
                <BiUserCircle />
            </div>
        </Container>
    );
};

export default MenuMobile;
