import LikeButton from '../LikeButton';
import { Body, Card } from './styles';

interface MyQuestCardProps {
    id?: number | boolean;
    body: string;
    likes: boolean | number;
}

const MyQuestCard = ({ id, body, likes }: MyQuestCardProps) => {
    console.log(likes);
    return (
        <Card>
            <Body>{body}</Body>
            <LikeButton id={Number(id)} likes={Number(likes)} />
        </Card>
    );
};

export default MyQuestCard;
