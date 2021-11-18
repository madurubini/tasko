import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { InputCommunity } from '../../components/InputCommunity';
import Community from '../../pages/Community';
import api from './../../services/api';

const mock = new MockAdapter(api);
const searchMock = jest.fn();
const userQuests: never[] = [];

jest.mock('./../../providers/Questions', () => {
    return {
        useQuests: () => ({
            search: searchMock,
            quests: userQuests,
        }),
    };
});

describe('Community Page search tests', () => {
    it('should be able to get the input from screen', async () => {
        mock.onGet('/questions').replyOnce(200, [
            {
                body: 'Como saber o dia de amanhã?',
                likes: 2,
                userId: 1,
                id: 2,
            },
        ]);
        render(<Community />);
        const allQuestions = screen.getByTestId('allQuestions-tab');

        await waitFor(() => {
            expect(allQuestions).toHaveTextContent('amanhã');
        });
    });
});
