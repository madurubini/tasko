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
