import { Dispatch, SetStateAction } from 'react';

export interface Quest {
    id: number | boolean;
    body: string;
    likes: number;
    userId: number | boolean;
}

export interface QuestBody {
    body: string;
    likes: number;
    userId: number;
}

export interface QuestionsContextData {
    allQuestions: Quest[] | [];
    userQuests: Quest[] | [];
    postQuestion: (quest: QuestBody) => void;
    editQuestion: (questId: number, question: string | any) => void;
    getAllQuestions: () => void;
    getUserQuestions: (userId: number) => void;
    getAllQuestsByTitle: (title: string) => void;
    like: (questId: number, update: number) => void;
}

export interface QuestCardProps {
    id: number | boolean;
    userId: number | boolean;
    body: string;
    likes: number;
}

export interface LikeProps {
    id: number;
    likes: number;
}

export interface EditQuestion {
    body: string;
    isOpen: boolean;
    id: number;
}
