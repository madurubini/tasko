import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import api from '../../services/api';
import { BadgeProps } from '../../types/badge';
import { ChildrenProps } from '../../types/children';
import { useUser } from '../User';

interface BadgeContextProps {
    getUserBadges: (userId: string) => void;
    userBadges: BadgeProps[];
}

export const BadgeContext = createContext<BadgeContextProps>(
    {} as BadgeContextProps,
);

export const BadgeProvider = ({ children }: ChildrenProps) => {
    const { auth, id } = useUser();

    const [userBadges, setUserBadges] = useState<BadgeProps[]>(
        [] as BadgeProps[],
    );

    const getUserBadges = useCallback(
        (userId: string) => {
            api.get(`/users/${userId}/allBadges`, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
                .then((res) => {
                    setUserBadges(res.data);
                    console.log(userBadges);
                })
                .catch((err) => console.log(err));
        },
        [auth],
    );

    useEffect(() => {
        getUserBadges(id);
    }, [getUserBadges, id]);

    return (
        <BadgeContext.Provider value={{ getUserBadges, userBadges }}>
            {children}
        </BadgeContext.Provider>
    );
};

export const useBadges = () => useContext(BadgeContext);
