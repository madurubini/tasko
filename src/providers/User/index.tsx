import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import toast from 'react-hot-toast';
import request from './../../services/api';
import { User, UserContextData, UserProps, Xp } from './../../types/user';
import { History } from 'history';

export const UserContext = createContext<UserContextData>(
    {} as UserContextData,
);

export const UserProvider = ({ children }: UserProps) => {
    const [auth, setAuth] = useState<string>(
        localStorage.getItem('@token') || '',
    );
    const [id, setId] = useState<string>(localStorage.getItem('@id') || '');

    const [userName, setUserName] = useState<string>('');
    const [xp, setXp] = useState<number>(0);

    const login = (data: User, history: History) => {
        request
            .post('/login', data)
            .then(({ data }) => {
                setAuth(data.accessToken);
                setXp(data.user.xp);
                localStorage.setItem('@token', data.accessToken);
                localStorage.setItem('@id', data.user.id);
                setId(data.user.id);
                setUserName(data.user.firstName);
                history.push('/dashboard');

                toast('Bem vindo!', {
                    icon: '🐍',
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
            .catch((error) => {
                console.error('Miss', error);
                toast('Email ou senha incorretos!', {
                    icon: '🐍',
                    style: {
                        border: '2px groove #FF0000',
                        borderRadius: '10px',
                        background: '#333',
                        color: '#FF0000',
                        fontFamily: 'Press Start 2P',
                        fontWeight: 'bold',
                    },
                });
            });
    };

    const logout = () => {
        localStorage.removeItem('@token');
        localStorage.clear();
        setAuth('');
    };

    const signup = (user: User, history: History) => {
        request
            .post(`/users`, user)
            .then((_) => {
                toast('Cadastro realizado com sucesso!', {
                    icon: '🐍',
                    style: {
                        border: '2px groove #008000',
                        borderRadius: '10px',
                        background: '#333',
                        color: '#008000',
                        fontFamily: 'Press Start 2P',
                        fontWeight: 'bold',
                    },
                });
                history.push('/login');
            })
            .catch((_) => console.error('Miss'));
    };

    const patchXp = (xpPoints: Xp) => {
        request
            .patch(`/users/${id}`, xpPoints, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
            .then((res) => {
                setXp(res.data.xp);
                // getUserXp(localStorage.getItem('@id'));
            })
            .catch((err) => console.error(err));
    };
    const getUserXp = useCallback(
        (id: any) => {
            request
                .get(`/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${auth}`,
                    },
                })
                .then((res) => setXp(res.data.xp))
                .catch((err) => console.error(err));
        },
        [auth],
    );
    useEffect(() => {
        getUserXp(id);
    }, [getUserXp, id]);

    return (
        <UserContext.Provider
            value={{
                auth,
                userName,
                signup,
                login,
                logout,
                id,
                xp,
                patchXp,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
