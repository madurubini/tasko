import { ReactNode } from 'react';
import { History } from 'history';

export interface User {
    firstName: string;
    lastname: string;
    email: string;
    password: string;
    matchedPassword?: string;
    xp?: number;
}
export interface Xp {
    xp: number;
}

export interface UserProps {
    children: ReactNode;
}

export interface UserContextData {
    auth: string;
    userName: string;
    signup: (data: User, history: History) => void;
    login: (data: User, history: History) => void;
    logout: () => void;
    id: string;
    xp: number;
    patchXp: (xpPoints: Xp) => void;
    setXp: (xp: number) => void;
}
