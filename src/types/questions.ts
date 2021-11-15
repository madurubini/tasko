export interface Quest {
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
