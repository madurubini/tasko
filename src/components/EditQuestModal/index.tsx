import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { useQuestions } from '../../providers/Questions';
import { EditQuestion } from '../../types/questions';
import {
    CloseModal,
    ContainerBoxModal,
    Form,
    InputField,
    MenuButton,
} from './styles';

interface EditQuestModalProps {
    editUserQuestion: EditQuestion;
    setShowEditModal: Dispatch<SetStateAction<EditQuestion>>;
}

const EditQuestModal = ({
    editUserQuestion,
    setShowEditModal,
}: EditQuestModalProps) => {
    const { userQuests } = useQuestions();
    const filteredQuest = userQuests.find(
        (quest) => quest.id === editUserQuestion.id,
    );
    const [editQuest, setEditQuest] = useState({
        question: filteredQuest?.body,
    });
    const { editQuestion } = useQuestions();

    return (
        <ContainerBoxModal>
            <Form>
                <CloseModal
                    onClick={() =>
                        setShowEditModal({ ...editUserQuestion, isOpen: false })
                    }
                />
                <InputField
                    placeholder="Escreva sua nova pergunta..."
                    value={editQuest.question}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setEditQuest({
                            ...editQuest,
                            question: event.target.value,
                        })
                    }
                />
                <MenuButton
                    onClick={() => {
                        editQuestion(
                            Number(filteredQuest?.id),
                            editQuest.question,
                        );
                        setShowEditModal({
                            ...editUserQuestion,
                            isOpen: false,
                        });
                    }}
                >
                    Editar
                </MenuButton>
            </Form>
        </ContainerBoxModal>
    );
};

export default EditQuestModal;
