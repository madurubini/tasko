import { GiHearts } from 'react-icons/gi';
import { Body, Card, MyLikes } from './styles';

interface MyQuestCardProps {
    id?: number | boolean;
    body: string;
    likes: boolean | number;
}

const MyQuestCard = ({ id, body, likes }: MyQuestCardProps) => {
    return (
        <Card>
            <Body>{body}</Body>
            <MyLikes>
                <GiHearts /> {likes}
            </MyLikes>
        </Card>
    );
};

export default MyQuestCard;
