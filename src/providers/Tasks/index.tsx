import {
    createContext,
    useState,
    useEffect,
    useContext,
    useCallback,
} from 'react';
import { ChildrenProps } from '../../types/children';
import api from '../../services/api';
import { TasksProps } from '../../types/tasks';
import { useUser } from '../User';

interface TitleProps {
    title: string;
}

interface EditTaskProps {
    title?: string;
    difficulty?: string;
}

interface TaskContextProps {
    createNewTask: (title: TitleProps, userId: number) => void;
    completeTask: (taskId: number) => void;
    updateTask: (taskId: number, update: EditTaskProps) => void;
    deleteTask: (taskId: number) => void;
    getUserTasks: (userId: string) => void;
    tasks: any;
}

export const TasksContext = createContext<TaskContextProps>(
    {} as TaskContextProps,
);

export const TasksProvider = ({ children }: ChildrenProps) => {
    const { auth, id } = useUser();

    const [tasks, setTasks] = useState<TasksProps[]>([] as TasksProps[]);

    const createNewTask = (title: TitleProps, userId: number) => {
        const data = { ...title, xp: 1, finished: false, userId: userId };

        api.post('/task', data, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const completeTask = (taskId: number) => {
        const data = { finished: true };

        api.patch(`/tasks/${taskId}`, data, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const updateTask = (taskId: number, update: EditTaskProps) => {
        api.patch(`/tasks/${taskId}`, update, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const deleteTask = (taskId: number) => {
        api.delete(`/tasks/${taskId}`, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const getUserTasks = useCallback(
        (userId: string) => {
            api.get(`/users/${userId}/tasks`, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
                .then((res) => setTasks(res.data))
                .catch((err) => console.log(err));
        },
        [auth],
    );

    useEffect(() => {
        getUserTasks(id);
    }, [getUserTasks, id]);

    return (
        <TasksContext.Provider
            value={{
                createNewTask,
                deleteTask,
                updateTask,
                getUserTasks,
                completeTask,
                tasks,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export const useTasks = () => useContext(TasksContext);
