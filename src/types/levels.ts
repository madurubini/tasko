export interface LevelsProps {
    title: string;
    reqXp: number;
    level: number;
    LevelId: number;
    status: boolean;
}
export interface UserLevelProps {
    title: string;
    reqXp: number;
    level: number;
    LevelId: number;
    status: boolean;
    id: number;
}

export interface LevelsContextData {
    levels: LevelsProps[];
    userLevelId: number;
    getLevels: () => void;
}
