import { ReactNode } from 'react';

export interface User {
    name: string;
    lastname: string;
    email: string;
    password: string;
    matchedPassword?: string;
    xp?: number;
}

export interface UserProps {
    children: ReactNode;
}

export interface UserContextData {
    auth: string;
    userName: string;
    signup: (data: User) => void;
    login: ({ email, password }: User) => void;
    logout: () => void;
}
