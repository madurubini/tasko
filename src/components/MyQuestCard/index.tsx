import { Dispatch, SetStateAction } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useComments } from '../../providers/Comments';
import { useQuestions } from '../../providers/Questions';
import { EditQuestion } from '../../types/questions';
import {
    Body,
    Card,
    CommentIcons,
    DeleteButton,
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
    const { comments } = useComments();
    const { userQuests, deleteQuestion } = useQuestions();
    const filteredComments = comments.filter(
        (comment) => comment?.questId === id,
    );
    const filteredQuestions = userQuests.find((quest) => quest?.id === id);

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
                <DeleteButton
                    onClick={() =>
                        deleteQuestion(Number(filteredQuestions?.id))
                    }
                />
            </MyLikes>
        </Card>
    );
};

export default MyQuestCard;
