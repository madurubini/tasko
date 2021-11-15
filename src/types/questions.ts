export interface Quest {
    id: number | boolean;
    body: string;
    likes: number;
    userId: number | boolean;
}

export interface QuestionsContextData {
    allQuestions: Quest[] | [];
    userQuests: Quest[] | [];
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
