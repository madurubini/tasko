import { Input } from '@chakra-ui/input';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { MenuButton } from '../MenuDesktop/styles';
import { useTasks } from '../../providers/Tasks';

import {
    CloseModal,
    ContainerBoxModal,
    FormContainer,
    InputBox,
    TitleModal,
} from './styles';
import { useUser } from '../../providers/User';

interface AddTaskModalProps {
    setShowAddModal: Dispatch<SetStateAction<Boolean>>;
}

const AddTaskModal = ({ setShowAddModal }: AddTaskModalProps) => {
    const [taskTitle, setTaskTitle] = useState<any>();

    const { id } = useUser();

    const { createNewTask } = useTasks();

    return (
        <ContainerBoxModal>
            <FormContainer>
                <CloseModal onClick={() => setShowAddModal(false)} />
                <TitleModal>Adicione uma nova Quest!</TitleModal>
                <InputBox>
                    <Input
                        placeholder={'Tirar o lixo...'}
                        type="text"
                        value={taskTitle}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setTaskTitle(e.target.value)
                        }
                    />
                </InputBox>
                <MenuButton
                    onClick={() => {
                        createNewTask(taskTitle, id);
                        setShowAddModal(false);
                    }}
                >
                    Adicionar Tarefa
                </MenuButton>
            </FormContainer>
        </ContainerBoxModal>
    );
};

export default AddTaskModal;
