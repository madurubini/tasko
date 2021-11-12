import { ChildrenProps } from '../types/children';
import { CommentsProvider } from './Comments';
import { QuestionsProvider } from './Questions';
import { TasksProvider } from './Tasks';
import { UserProvider } from './User';
import { LevelsProvider } from './Levels';

const Providers = ({ children }: ChildrenProps) => (
    <UserProvider>
        <QuestionsProvider>
            <CommentsProvider>
                <LevelsProvider>
                    <TasksProvider>{children}</TasksProvider>
                </LevelsProvider>
            </CommentsProvider>
        </QuestionsProvider>
    </UserProvider>
);

export default Providers;
