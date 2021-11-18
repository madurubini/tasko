import { Input } from '@chakra-ui/input';
import { useState } from 'react';
import { useTasks } from '../../providers/Tasks';
import { TasksProps } from '../../types/tasks';
import {
    CloseModal,
    ContainerBoxModal,
    EditButton,
    EditInputBox,
    FormContainer,
    SelectEdit,
    TitleModal,
} from '../AddTaskModal/styles';

interface EditTaskModalProps {
    setShowEditModal: React.Dispatch<React.SetStateAction<Boolean>>;
    item: TasksProps;
}

const EditTaskModal = ({ setShowEditModal, item }: EditTaskModalProps) => {
    const [updateTaskData, setUpdateTaskData] = useState({
        title: item.title,
        xp: 1,
    });

    const { updateTask } = useTasks();

    return (
        <ContainerBoxModal>
            <FormContainer>
                <CloseModal onClick={() => setShowEditModal(false)} />
                <TitleModal>Edite sua Quest</TitleModal>
                <EditInputBox>
                    <Input
                        placeholder={'Seu novo título vai aqui...'}
                        value={updateTaskData.title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setUpdateTaskData({
                                ...updateTaskData,
                                title: e.target.value,
                            })
                        }
                    />
                </EditInputBox>

                <p>Selecione a dificuldade:</p>
                <SelectEdit
                    value={updateTaskData.xp}
                    onChange={(e) =>
                        setUpdateTaskData({
                            ...updateTaskData,
                            xp: Number(e.target.value),
                        })
                    }
                >
                    <option value="1">Fácil</option>
                    <option value="3">Médio</option>
                    <option value="5">Difícil</option>
                </SelectEdit>
                <EditButton
                    onClick={() => {
                        updateTask(Number(item.id), updateTaskData);

                        setShowEditModal(false);
                    }}
                >
                    Salvar Atualizações
                </EditButton>
            </FormContainer>
        </ContainerBoxModal>
    );
};

export default EditTaskModal;
