import { ChangeEvent } from 'react';
import { useQuestions } from '../../providers/Questions';
import { InputButton, InputContent, InputHeader, TextField } from './styles';

export const InputCommunity = () => {
    const { getAllQuestsByTitle } = useQuestions();

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        getAllQuestsByTitle(event.target.value);

    return (
        <InputContent>
            <InputHeader>
                <h1>Comunidade</h1>
            </InputHeader>
            <TextField
                variant="outline"
                type="text"
                placeholder="e.g. Como arrumar a cama..."
            />
            <InputButton onClick={onChange}>Pesquisar</InputButton>
        </InputContent>
    );
};
