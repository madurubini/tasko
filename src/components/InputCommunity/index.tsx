import { ChangeEvent } from 'react';
import { useQuestions } from '../../providers/Questions';
import {
    InputButton,
    InputContent,
    InputHeader,
    InputTitle,
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
                <InputTitle>Comunidade</InputTitle>
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
