import { ChangeEvent } from 'react';
import { useQuestions } from '../../providers/Questions';
import {
    InputButton,
    InputContent,
    InputHeader,
    InputTypes,
    TextField,
} from './styles';

export const InputCommunity = () => {
    const { getAllQuestsByTitle } = useQuestions();

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        getAllQuestsByTitle(event.target.value);

    return (
        <InputContent>
            <InputHeader>
                <h1>Comunidade</h1>
            </InputHeader>
            <InputTypes>
                <TextField
                    variant="outline"
                    onChange={onChange}
                    type="text"
                    placeholder="e.g. Como arrumar a cama..."
                />
                <InputButton>Pesquisar</InputButton>
            </InputTypes>
        </InputContent>
    );
};
