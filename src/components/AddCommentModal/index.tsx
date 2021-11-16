import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { useComments } from '../../providers/Comments';
import { useUser } from '../../providers/User';
import { CommentsProps } from '../../types/comments';
import {
    CloseModal,
    Comment,
    ContainerBoxModal,
    DividerBlock,
    Form,
    FormBlock,
    HrForm,
    InputField,
    MenuButton,
    SectionComments,
    Title,
} from './styles';

interface AddCommentModalProps {
    setShowAddModal: Dispatch<SetStateAction<boolean>>;
    comments: CommentsProps[] | [];
    questId: number;
}

const AddCommentModal = ({
    setShowAddModal,
    comments,
    questId,
}: AddCommentModalProps) => {
    const [comment, setComment] = useState<CommentsProps>({} as CommentsProps);
    const commentInput = useRef<HTMLHeadingElement | any>();
    const { addComment } = useComments();
    const { id } = useUser();

    const handleClick = () => {
        const newComment = {
            ...comment,
            questId,
            userId: Number(id),
        };
        addComment(newComment.comment, newComment.userId, newComment.questId);
        commentInput.current.value = '';
    };

    return (
        <ContainerBoxModal>
            <Form>
                <CloseModal onClick={() => setShowAddModal(false)} />
                <FormBlock>
                    <InputField
                        ref={commentInput}
                        cols={30}
                        rows={10}
                        placeholder="Escreva seu comentário aqui..."
                        resize="none"
                        onChange={(event: { target: { value: string } }) =>
                            setComment({
                                ...comment,
                                comment: event.target.value,
                            })
                        }
                    />
                    <MenuButton onClick={handleClick}>Comentar</MenuButton>
                </FormBlock>
                <DividerBlock>
                    <HrForm />
                    <Title>Comentários</Title>
                    <HrForm />
                </DividerBlock>
                <SectionComments>
                    {comments.map(({ comment }, index) => (
                        <Comment key={index}>
                            <p>{comment}</p>
                        </Comment>
                    ))}
                </SectionComments>
            </Form>
        </ContainerBoxModal>
    );
};

export default AddCommentModal;
