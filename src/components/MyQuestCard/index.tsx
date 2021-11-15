import { Body, Card } from './styles';

interface MyQuestCardProps {
    id?: number | boolean;
    body: string;
    likes: boolean | number;
}

const MyQuestCard = ({ id, body, likes }: MyQuestCardProps) => {
    return (
        <Card>
            <Body>{body}</Body>
            <div>{likes}</div>
        </Card>
    );
};

export default MyQuestCard;
