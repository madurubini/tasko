import {
    createContext,
    useState,
    useEffect,
    useContext,
    useCallback,
} from 'react';
import api from '../../services/api';
import { ChildrenProps } from '../../types/children';
import { CommentsProps } from '../../types/comments';
import { useUser } from '../User';

interface CommentsContextProps {
    comments: CommentsProps[];
    addComment: (comment: string, userId: number, questId: number) => void;
    editComment: (commentId: number, update: string) => void;
    getAllComments: () => void;
    getQuestComments: (id: number) => void;
    getUserComments: (id: number) => void;
    userComments: CommentsProps[];
}

export const CommentsContext = createContext<CommentsContextProps>(
    {} as CommentsContextProps,
);

export const CommentsProvider = ({ children }: ChildrenProps) => {
    const [comments, setComments] = useState<CommentsProps[]>(
        [] as CommentsProps[],
    );

    const [userComments, setUserComments] = useState<CommentsProps[]>(
        [] as CommentsProps[],
    );

    const { auth, id } = useUser();

    const addComment = (comment: string, userId: number, questId: number) => {
        const data = { comment: comment, questId: questId, userId: userId };

        api.post('/comments', data, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => {
                getAllComments();
            })
            .catch((err) => console.log(err));
    };

    const editComment = (commentId: number, update: string) => {
        const data = { comment: update };

        api.patch(`/comments/${commentId}`, data, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const getAllComments = useCallback(() => {
        api.get(`/comments`)
            .then((res) => setComments(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        getAllComments();
    }, [getAllComments]);

    const getQuestComments = (id: number) => {
        api.get(`/quests/${id}/comments`)
            .then((res) => {
                console.log(res);
                setComments(res.data);
            })
            .catch((err) => console.log(err));
    };

    const getUserComments = useCallback(
        (id: number) => {
            api.get(`/users/${id}/comments`, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
                .then((res) => {
                    console.log(res);
                    setUserComments(res.data);
                })
                .catch((err) => console.log(err));
        },
        [auth],
    );

    useEffect(() => {
        getUserComments(Number(id));
    }, [getUserComments, id]);

    return (
        <CommentsContext.Provider
            value={{
                addComment,
                editComment,
                getQuestComments,
                getAllComments,
                comments,
                getUserComments,
                userComments,
            }}
        >
            {children}
        </CommentsContext.Provider>
    );
};

export const useComments = () => useContext(CommentsContext);
