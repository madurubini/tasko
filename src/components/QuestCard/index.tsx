import { QuestCardProps } from '../../types/questions';
import LikeButton from '../LikeButton';
import { Card, Quest } from './styles';

const QuestCard = ({ id, body, likes, userId }: QuestCardProps) => {
    return (
        <Card>
            <Quest>{body}</Quest>
            <LikeButton id={Number(id)} likes={likes} />
        </Card>
    );
};

export default QuestCard;
