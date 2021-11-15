import request from './../../services/api';

import {
    createContext,
    useState,
    useContext,
    useEffect,
    useCallback,
} from 'react';
import { ChildrenProps } from '../../types/children';
import { Quest, QuestionsContextData } from '../../types/questions';
import { useUser } from '../User';
import toast from 'react-hot-toast';

export const QuestionsContext = createContext<QuestionsContextData>(
    {} as QuestionsContextData,
);

export const QuestionsProvider = ({ children }: ChildrenProps) => {
    const { auth, id } = useUser();
    const [allQuestions, setAllQuestions] = useState<Quest[]>([] as Quest[]);
    const [userQuests, setUserQuests] = useState<Quest[]>([] as Quest[]);

    const getAllQuestions = useCallback(() => {
        request
            .get(`/quests`)
            .then(({ data }) => setAllQuestions([...data]))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        getAllQuestions();
    }, [getAllQuestions]);

    const getUserQuestions = useCallback(
        (userId: number) => {
            request
                .get(`/quests?userId=${id}`)
                .then(({ data }) => setUserQuests([...data]))
                .catch((error) => console.error(error));
        },
        [id],
    );

    useEffect(() => {
        getUserQuestions(parseInt(id));
    }, [getUserQuestions, id]);

    const getAllQuestsByTitle = useCallback(
        (questionTitle: string) => {
            request
                .get(`/quests?body_like=${questionTitle}`, {
                    headers: {
                        Authorization: `Bearer ${auth}`,
                    },
                })
                .then(({ data }) => setAllQuestions([...data]))
                .catch((error) => {
                    console.error('Pergunta não encontrada: ', error);
                    toast('Pergunta não encontrada!', {
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
                });
        },
        [auth],
    );

    return (
        <QuestionsContext.Provider
            value={{
                allQuestions,
                userQuests,
                getAllQuestions,
                getUserQuestions,
                getAllQuestsByTitle,
            }}
        >
            {children}
        </QuestionsContext.Provider>
    );
};

export const useQuestions = () => useContext(QuestionsContext);
