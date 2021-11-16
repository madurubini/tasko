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
import { useLevels } from '../Levels';
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
    const { userLevel } = useLevels();

    const [userBadges, setUserBadges] = useState<BadgeProps[]>(
        [] as BadgeProps[],
    );

    const getUserBadges = useCallback(() => {
        api.get(`/users/${id}/allBadges`, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => {
                setUserBadges(res.data);
                console.log(userBadges);
            })
            .catch((err) => console.log(err));
    }, [auth, id]);

    useEffect(() => {
        getUserBadges();
    }, [getUserBadges]);

    const getUserBadgeLevel = useCallback(() => {
        const badge1 = {
            title: 'Começo da trilha...',
            img: 'https://picsum.photos/200',
            description: 'Você não é mais noob, bem-vindo ao nível 1',
            BadgeId: 4,
            status: false,
            userId: id,
        };

        const badge2 = {
            title: 'Pausa para água',
            img: 'https://picsum.photos/200',
            description: 'Hora de respirar, você chegou no nível 5!',
            BadgeId: 5,
            status: false,
            userId: id,
        };

        const badge3 = {
            title: 'Foguete não tem ré',
            img: 'https://picsum.photos/200',
            description: 'Parabéns você chegou no nível 10, hora de descansar!',
            BadgeId: 6,
            status: false,
            userId: id,
        };

        if (
            userLevel?.level === 1 &&
            userBadges.filter((badge) => badge.BadgeId === badge1.BadgeId)
                .length === 0
        ) {
            api.post(`/allBadges`, badge1, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
                .then((res) => {
                    console.log(res.data);
                    getUserBadges();
                    console.log(userBadges);
                })
                .catch((err) => console.log(err));
        }
        if (
            userLevel?.level === 5 &&
            userBadges.filter((badge) => badge.BadgeId === badge2.BadgeId)
                .length === 0
        ) {
            api.post(`/allBadges`, badge2, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
                .then((res) => {
                    console.log(res.data);
                    getUserBadges();
                    console.log(userBadges);
                })
                .catch((err) => console.log(err));
        }
        if (
            userLevel?.level === 10 &&
            userBadges.filter((badge) => badge.BadgeId === badge3.BadgeId)
                .length === 0
        ) {
            api.post(`/allBadges`, badge3, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
                .then((res) => {
                    console.log(res.data);
                    getUserBadges();
                    console.log(userBadges);
                })
                .catch((err) => console.log(err));
        }
    }, [userLevel?.level, auth, id, userBadges, getUserBadges]);

    useEffect(() => {
        getUserBadgeLevel();
    }, [getUserBadgeLevel]);

    const getUserBadgesQuest = useCallback(() => {
        api.get(`/users/${id}/quests`, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        }).then((res) => {
            const badge1 = {
                title: 'Parceir@',
                img: 'https://picsum.photos/200',
                description:
                    'Você fez seu primeiro comentário em uma pergunta!',
                BadgeId: 3,
                status: false,
                userId: id,
            };
            const badge2 = {
                title: 'Voz da Comunidade',
                img: 'https://picsum.photos/200',
                description: 'Você fez +5 perguntas na comunidade',
                BadgeId: 7,
                status: false,
                userId: id,
            };

            if (
                res.data.length === 1 &&
                userBadges.filter((badge) => badge.BadgeId === badge1.BadgeId)
                    .length === 0
            ) {
                api.post(`/allBadges`, badge1, {
                    headers: {
                        Authorization: `Bearer ${auth}`,
                    },
                })
                    .then((res) => {
                        console.log(res.data);
                        getUserBadges();
                        console.log(userBadges);
                    })
                    .catch((err) => console.log(err));
            }
            if (
                res.data.length === 6 &&
                userBadges.filter((badge) => badge.BadgeId === badge2.BadgeId)
                    .length === 0
            ) {
                api.post(`/allBadges`, badge2, {
                    headers: {
                        Authorization: `Bearer ${auth}`,
                    },
                })
                    .then((res) => {
                        console.log(res.data);
                        getUserBadges();
                        console.log(userBadges);
                    })
                    .catch((err) => console.log(err));
            }
        });
    }, [auth, id, getUserBadges, userBadges]);

    useEffect(() => {
        getUserBadgesQuest();
    }, [getUserBadgesQuest]);

    const getUserBadgesComments = useCallback(() => {
        api.get(`/users/${id}/comments`, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        }).then((res) => {
            const badge1 = {
                title: 'Fofoqueir@',
                img: 'https://picsum.photos/200',
                description: 'Você fez +5 comentários',
                BadgeId: 8,
                status: false,
                userId: id,
            };

            if (
                res.data.length === 6 &&
                userBadges.filter((badge) => badge.BadgeId === badge1.BadgeId)
                    .length === 0
            ) {
                api.post(`/allBadges`, badge1, {
                    headers: {
                        Authorization: `Bearer ${auth}`,
                    },
                })
                    .then((res) => {
                        console.log(res.data);
                        getUserBadges();
                        console.log(userBadges);
                    })
                    .catch((err) => console.log(err));
            }
        });
    }, [auth, id, getUserBadges, userBadges]);
    useEffect(() => {
        getUserBadgesComments();
    }, [getUserBadgesComments]);

    return (
        <BadgeContext.Provider value={{ getUserBadges, userBadges }}>
            {children}
        </BadgeContext.Provider>
    );
};

export const useBadges = () => useContext(BadgeContext);
