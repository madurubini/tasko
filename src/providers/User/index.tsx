import { createContext, useContext, useState } from 'react';
import request from './../../services/api';
import { User, UserContextData, UserProps } from './../../types/user';

export const UserContext = createContext<UserContextData>(
    {} as UserContextData,
);

export const UserProvider = ({ children }: UserProps) => {
    const [auth, setAuth] = useState<string>(
        localStorage.getItem('@token') || '',
    );
    const [id, setId] = useState<string>(localStorage.getItem('@id') || '');

    const [userName, setUserName] = useState<string>('');

    const login = (data: User) => {
        request
            .post('/login', data)
            .then(({ data }) => {
                setAuth(data.accessToken);
                localStorage.setItem('@token', data.accessToken);
                localStorage.setItem('@id', data.user.id);
                setId(data.user.id);
                setUserName(data.user.name);
            })
            .catch((error) => console.error('Miss', error));
    };

    const logout = () => {
        localStorage.removeItem('@token');
        localStorage.clear();
        setAuth('');
    };

    const signup = (user: User) => {
        request
            .post(`/users`, user)
            .then((_) => login(user))
            .catch((_) => console.error('Miss'));
    };

    return (
        <UserContext.Provider
            value={{ auth, userName, signup, login, logout, id }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
