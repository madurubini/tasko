import { Card, Quest } from './styles';

interface QuestCardProps {
    id: number | boolean;
    userId: number | boolean;
    body: string;
    likes: string | number;
}

const QuestCard = ({ id, body, likes, userId }: QuestCardProps) => {
    return (
        <Card>
            <Quest>{body}</Quest>
            <div>{likes}</div>
        </Card>
    );
};

export default QuestCard;
