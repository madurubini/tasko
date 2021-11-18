import { render, screen, waitFor } from '@testing-library/react';
import { InputCommunity } from '../../components/InputCommunity';
import QuestCard from '../../components/QuestCard';
import Community from '../../pages/Community';
import { QuestionsProvider } from '../../providers/Questions';

describe('Community Page elements', () => {
    it('should be get input from screen', async () => {
        render(
            <QuestionsProvider>
                <InputCommunity />
            </QuestionsProvider>,
        );
        await waitFor(() => {
            expect(screen.getByText('Comunidade')).toBeInTheDocument();
            expect(
                screen.getByPlaceholderText('e.g. Como arrumar a cama...'),
            ).toBeTruthy();
        });
    });

    it('should be get titles from screen', async () => {
        render(
            <QuestionsProvider>
                <Community />
            </QuestionsProvider>,
        );
        await waitFor(() => {
            expect(screen.getByText('Perguntas')).toBeInTheDocument();
            expect(screen.getByText('Minhas perguntas')).toBeInTheDocument();
        });
    });
});
