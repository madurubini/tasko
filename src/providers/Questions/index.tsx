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
                .catch((error) =>
                    console.error('Pergunta não encontrada: ', error),
                );
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

/* 

tu precisa fazer um get pra pegar as questions e a lógica pra encontrar um titulo parecido no array de acordo com o user id

*/
