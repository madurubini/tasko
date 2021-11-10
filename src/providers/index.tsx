import { ChildrenProps } from "../types";
import { CommentsProvider } from "./Comments";
import { QuestionsProvider } from "./Questions";
import { TasksProvider } from "./Tasks";
import { UserProvider } from "./User";

const Providers = ({ children }: ChildrenProps) => (
  <UserProvider>
    <QuestionsProvider>
      <CommentsProvider>
        <TasksProvider>{children}</TasksProvider>
      </CommentsProvider>
    </QuestionsProvider>
  </UserProvider>
);

export default Providers;
