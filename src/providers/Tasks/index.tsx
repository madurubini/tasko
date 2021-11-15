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
import toast from 'react-hot-toast';
import useSound from 'use-sound';

// @ts-ignore
import NewTask from '../../assets/audio/new-task.wav';

interface TitleProps {
    title: string;
}

interface EditTaskProps {
    title?: string;
    xp?: number;
}

interface TaskContextProps {
    createNewTask: (title: TitleProps, userId: string) => void;
    completeTask: (taskId: number) => void;
    updateTask: (taskId: number, update: EditTaskProps) => void;
    deleteTask: (taskId: number) => void;
    getUserTasks: (userId: string) => void;
    tasks: TasksProps[];
    showEditModal: Boolean;
    setShowEditModal: React.Dispatch<React.SetStateAction<Boolean>>;
}

export const TasksContext = createContext<TaskContextProps>(
    {} as TaskContextProps,
);

export const TasksProvider = ({ children }: ChildrenProps) => {
    const { xp, auth, id, patchXp } = useUser();
    const [addTask] = useSound(NewTask, { volume: 0.3 });

    const [tasks, setTasks] = useState<TasksProps[]>([] as TasksProps[]);
    const [showEditModal, setShowEditModal] = useState<Boolean>(false);

    const createNewTask = (title: TitleProps, userId: string) => {
        const data = {
            title: title,
            xp: 1,
            difficulty: 'Easy',
            finished: false,
            userId: userId,
        };

        api.post('/tasks', data, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => {
                console.log(res);
                getUserTasks(id);

                toast('Nova quest criada!', {
                    icon: '🐍',
                    style: {
                        border: '2px groove #008000',
                        borderRadius: '10px',
                        background: '#333',
                        color: '#008000',
                        fontFamily: 'Press Start 2P',
                        fontWeight: 'bold',
                    },
                });

                addTask();
            })
            .catch((err) => console.log(err));
    };

    const completeTask = (taskId: number) => {
        const data = { finished: true };

        api.patch(`/tasks/${taskId}`, data, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => {
                const xpPoints = { xp: xp + res.data.xp };
                patchXp(xpPoints);

                toast('Quest finalizada!', {
                    icon: '🐍',
                    style: {
                        border: '2px groove #008000',
                        borderRadius: '10px',
                        background: '#333',
                        color: '#008000',
                        fontFamily: 'Press Start 2P',
                        fontWeight: 'bold',
                    },
                });
            })
            .catch((err) => console.log(err));
    };

    const updateTask = (taskId: number, update: EditTaskProps) => {
        api.patch(`/tasks/${taskId}`, update, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => {
                console.log(res);
                getUserTasks(id);
                toast('Quest atualizada!', {
                    icon: '🐍',
                    style: {
                        border: '2px groove #FFD700',
                        borderRadius: '10px',
                        background: '#333',
                        color: '#FFD700',
                        fontFamily: 'Press Start 2P',
                        fontWeight: 'bold',
                    },
                });
            })
            .catch((err) => console.log(err));
    };

    const deleteTask = (taskId: number) => {
        api.delete(`/tasks/${taskId}`, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => {
                console.log(res);
                getUserTasks(id);
                toast('Quest excluída!', {
                    icon: '🐍',
                    style: {
                        border: '2px groove #FF0000',
                        borderRadius: '10px',
                        background: '#333',
                        color: '#FF0000',
                        fontFamily: 'Press Start 2P',
                        fontWeight: 'bold',
                    },
                });
            })
            .catch((err) => console.log(err));
    };

    const getUserTasks = useCallback(
        (userId: string) => {
            api.get(`/users/${userId}/tasks`, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
                .then((res) => {
                    setTasks(res.data);
                })
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
                showEditModal,
                setShowEditModal,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export const useTasks = () => useContext(TasksContext);
