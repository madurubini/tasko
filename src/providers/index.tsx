import { ChildrenProps } from '../types/children';
import { CommentsProvider } from './Comments';
import { QuestionsProvider } from './Questions';
import { TasksProvider } from './Tasks';
import { UserProvider } from './User';
import { LevelsProvider } from './Levels';
import { BadgeProvider } from './Badges';

const Providers = ({ children }: ChildrenProps) => (
    <UserProvider>
        <QuestionsProvider>
            <CommentsProvider>
                <LevelsProvider>
                    <BadgeProvider>
                        <TasksProvider>{children}</TasksProvider>
                    </BadgeProvider>
                </LevelsProvider>
            </CommentsProvider>
        </QuestionsProvider>
    </UserProvider>
);

export default Providers;
