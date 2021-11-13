import { Input } from '@chakra-ui/input';
import { useState } from 'react';
import { useTasks } from '../../providers/Tasks';
import { TasksProps } from '../../types/tasks';
import {
    CloseModal,
    ContainerBoxModal,
    FormContainer,
    TitleModal,
} from '../AddTaskModal/styles';
import { MenuButton } from '../MenuDesktop/styles';

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
                <p>Selecione a dificuldade:</p>
                <select
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
                </select>
                <MenuButton
                    onClick={() => {
                        updateTask(Number(item.id), updateTaskData);
                        setShowEditModal(false);
                    }}
                >
                    Salvar Atualizações
                </MenuButton>
            </FormContainer>
        </ContainerBoxModal>
    );
};

export default EditTaskModal;
