import { Dispatch, SetStateAction, useState } from 'react';
import { useQuestions } from '../../providers/Questions';
import { useUser } from '../../providers/User';
import { QuestBody } from './../../types/questions';
import {
    CloseModal,
    ContainerBoxModal,
    Form,
    InputField,
    MenuButton,
} from './styles';

interface AddQuestModalProps {
    setShowAddModal: Dispatch<SetStateAction<boolean>>;
}

const AddQuestModal = ({ setShowAddModal }: AddQuestModalProps) => {
    const [quest, setQuest] = useState<QuestBody>({} as QuestBody);
    const { postQuestion } = useQuestions();
    const { id } = useUser();

    const handleClick = () => {
        const newQuestion = {
            ...quest,
            likes: 0,
            userId: Number(id),
        };
        postQuestion(newQuestion);
    };

    return (
        <ContainerBoxModal>
            <Form>
                <CloseModal onClick={() => setShowAddModal(false)} />
                <InputField
                    type="text"
                    name="body"
                    placeholder="Escreva a sua pergunta aqui..."
                    onChange={(event: { target: { value: string } }) =>
                        setQuest({ ...quest, body: event.target.value })
                    }
                />
                <MenuButton
                    onClick={() => {
                        handleClick();
                        setShowAddModal(false);
                    }}
                >
                    Perguntar
                </MenuButton>
            </Form>
        </ContainerBoxModal>
    );
};

export default AddQuestModal;
