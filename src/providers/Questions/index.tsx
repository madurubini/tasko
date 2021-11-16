import request from './../../services/api';

import {
    createContext,
    useState,
    useContext,
    useEffect,
    useCallback,
} from 'react';
import { ChildrenProps } from '../../types/children';
import { Quest, QuestBody, QuestionsContextData } from '../../types/questions';
import { useUser } from '../User';
import toast from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';

export const QuestionsContext = createContext<QuestionsContextData>(
    {} as QuestionsContextData,
);

export const QuestionsProvider = ({ children }: ChildrenProps) => {
    const { auth, id } = useUser();
    const [allQuestions, setAllQuestions] = useState<Quest[]>([] as Quest[]);
    const [userQuests, setUserQuests] = useState<Quest[]>([] as Quest[]);

    const postQuestion = (quest: QuestBody) => {
        request
            .post(`/quests`, quest, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
            .then((_) => {
                console.log('Nova pergunta postada!');
                getAllQuestions();
                getUserQuestions(parseInt(id));
            })
            .catch((_) => console.error('Falha ao postar nova pergunta'));
        console.log('quest', quest);
    };

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

    const editQuestion = (questId: number, question: string | any) => {
        request
            .patch(
                `/quests/${questId}`,
                { body: question },
                {
                    headers: {
                        Authorization: `Bearer ${auth}`,
                    },
                },
            )
            .then((res) => {
                getAllQuestions();
                getUserQuestions(parseInt(id));
            })
            .catch((error) => console.error(error));
    };

    const deleteQuestion = (questId: number) => {
        request
            .delete(`/quests/${questId}`, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
            .then((response) => {
                getAllQuestions();
                getUserQuestions(parseInt(id));
                toast('Pergunta removida com sucesso!', {
                    icon: (
                        <MdDeleteForever style={{ color: 'var(--redToast)' }} />
                    ),
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
            .catch((error) => console.error(error));
    };

    const like = (questId: number, update: number) => {
        const data = { likes: update };
        request
            .patch(`/quests/${questId}/`, data, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
            .then((res) => {
                getAllQuestions();
                getUserQuestions(parseInt(id));
            })
            .catch((err) => console.error(err));
    };

    return (
        <QuestionsContext.Provider
            value={{
                allQuestions,
                userQuests,
                postQuestion,
                editQuestion,
                deleteQuestion,
                getAllQuestions,
                getUserQuestions,
                getAllQuestsByTitle,
                like,
            }}
        >
            {children}
        </QuestionsContext.Provider>
    );
};

export const useQuestions = () => useContext(QuestionsContext);
