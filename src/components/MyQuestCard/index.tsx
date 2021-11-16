import { IconButton } from '@chakra-ui/button';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GiHearts } from 'react-icons/gi';
import { MdAdd, MdOutlineEditNote } from 'react-icons/md';
import {
    Body,
    Card,
    CommentIcons,
    EditIcons,
    Likes,
    LineTop,
    MyLikes,
} from './styles';

interface MyQuestCardProps {
    id?: number | boolean;
    body: string;
    likes: boolean | number;
}

const MyQuestCard = ({ id, body, likes }: MyQuestCardProps) => {
    return (
        <Card>
            <LineTop>
                <Body>{body}</Body>
            </LineTop>
            <MyLikes>
                <Likes /> {likes}
                <EditIcons />
                <CommentIcons />
            </MyLikes>
        </Card>
    );
};

export default MyQuestCard;
