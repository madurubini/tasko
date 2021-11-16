import { useState } from 'react';
import { useComments } from '../../providers/Comments';
import { QuestCardProps } from '../../types/questions';
import AddCommentModal from '../AddCommentModal';
import { SpanCommentsLength } from '../AddCommentModal/styles';
import LikeButton from '../LikeButton';
import { Card, CommentIcons, Option, Quest } from './styles';

const QuestCard = ({ id, body, likes, userId }: QuestCardProps) => {
    const [addComment, setAddComment] = useState<boolean>(false);
    const { comments } = useComments();
    const filteredComments = comments.filter(
        (comment) => comment?.questId === id,
    );

    return (
        <Card>
            <Quest>{body}</Quest>
            <Option>
                <LikeButton id={Number(id)} likes={likes} />
                <CommentIcons onClick={() => setAddComment(!addComment)} />
                <SpanCommentsLength>
                    {filteredComments.length}
                </SpanCommentsLength>
            </Option>
            {addComment && (
                <AddCommentModal
                    setShowAddModal={setAddComment}
                    comments={filteredComments}
                    questId={Number(id)}
                />
            )}
        </Card>
    );
};

export default QuestCard;
