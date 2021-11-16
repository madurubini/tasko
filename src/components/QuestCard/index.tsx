import { QuestCardProps } from '../../types/questions';
import LikeButton from '../LikeButton';
import { Card, CommentIcons, Option, Quest } from './styles';

const QuestCard = ({ id, body, likes, userId }: QuestCardProps) => {
    return (
        <Card>
            <Quest>{body}</Quest>
            <Option>
                <LikeButton id={Number(id)} likes={likes} />
                <CommentIcons />
            </Option>
        </Card>
    );
};

export default QuestCard;
