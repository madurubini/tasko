import { Dispatch, SetStateAction, useState } from 'react';
import { useComments } from '../../providers/Comments';
import { useQuestions } from '../../providers/Questions';
import { EditQuestion } from '../../types/questions';
import EditQuestModal from '../EditQuestModal';
import {
    Body,
    Card,
    CommentIcons,
    EditIcons,
    Likes,
    LineTop,
    MyLikes,
    SpanCommentsLength,
} from './styles';

interface MyQuestCardProps {
    id?: number | boolean;
    body: string;
    likes: boolean | number;
    editQuestion: EditQuestion;
    setShowEditModal: Dispatch<SetStateAction<EditQuestion>>;
}

const MyQuestCard = ({
    id,
    body,
    likes,
    editQuestion,
    setShowEditModal,
}: MyQuestCardProps) => {
    const [addComment, setAddComment] = useState<boolean>(false);
    const { comments } = useComments();
    const { userQuests } = useQuestions();

    const filteredComments = comments.filter(
        (comment) => comment?.questId === id,
    );
    console.log('Dinglebell', userQuests);

    return (
        <Card>
            <LineTop>
                <Body>{body}</Body>
            </LineTop>
            <MyLikes>
                <Likes /> {likes}
                <EditIcons
                    onClick={() =>
                        setShowEditModal({
                            ...editQuestion,
                            isOpen: true,
                            id: Number(id),
                        })
                    }
                />
                <CommentIcons />
                <SpanCommentsLength>
                    {filteredComments.length}
                </SpanCommentsLength>
            </MyLikes>
        </Card>
    );
};

export default MyQuestCard;
