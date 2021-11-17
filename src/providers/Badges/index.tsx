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
import Headset from '../../assets/headset.svg';
import Gossip from '../../assets/image/gossip.png';
import Rocket from '../../assets/rocket.svg';
import Partner from '../../assets/parceiro.svg';
import Nest from '../../assets/new-born.svg';
import Community from '../../assets/comunidade.svg';
import Bottle from '../../assets/water-bottle.svg';
import Quest from '../../assets/uncertainty.svg';

interface BadgeContextProps {
    controllBadges: BadgeProps[];
}

export const BadgeContext = createContext<BadgeContextProps>(
    {} as BadgeContextProps,
);

export const BadgeProvider = ({ children }: ChildrenProps) => {
    const { auth, id } = useUser();
    const { userLevel } = useLevels();

    const badge = {
        title: 'Novo no pedaço',
        img: Headset,
        description: 'Você fez seu primeiro login!',
        BadgeId: 1,
        status: false,
        userId: id,
    };

    const [controllBadges, setControllBadges] = useState<BadgeProps[]>([
        badge,
    ] as BadgeProps[]);

    const filteredBadge = useCallback(
        (badge: BadgeProps) => {
            return controllBadges.some(
                (item) => item.BadgeId === badge.BadgeId,
            );
        },
        [controllBadges],
    );

    const getUserBadgeLevel = useCallback(() => {
        const badge1 = {
            title: 'Começo da trilha...',
            img: Nest,
            description: 'Você não é mais noob, bem-vindo ao nível 1',
            BadgeId: 4,
            status: false,
            userId: id,
        };

        const badge2 = {
            title: 'Pausa para água',
            img: Bottle,
            description: 'Hora de respirar, você chegou no nível 5!',
            BadgeId: 5,
            status: false,
            userId: id,
        };

        const badge3 = {
            title: 'Foguete não tem ré',
            img: Rocket,
            description: 'Parabéns você chegou no nível 10, hora de descansar!',
            BadgeId: 6,
            status: false,
            userId: id,
        };

        if (userLevel?.level >= 1 && !filteredBadge(badge1)) {
            setControllBadges([...controllBadges, badge1]);
        }
        if (userLevel?.level >= 5 && !filteredBadge(badge2)) {
            setControllBadges([...controllBadges, badge2]);
        }
        if (userLevel?.level >= 10 && !filteredBadge(badge3)) {
            setControllBadges([...controllBadges, badge3]);
        }
    }, [userLevel?.level, controllBadges, filteredBadge, id]);

    useEffect(() => {
        getUserBadgeLevel();
    }, [getUserBadgeLevel]);

    const getUserBadgesComments = useCallback(() => {
        api.get(`/users/${id}/comments`, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        }).then((res) => {
            const badge1 = {
                title: 'Questionad@r',
                img: Quest,
                description: 'Você fez sua primeira pergunta na comunidade!',
                BadgeId: 2,
                status: false,
                userId: id,
            };

            const badge2 = {
                title: 'Fofoqueir@',
                img: Gossip,
                description: 'Você fez +5 comentários',
                BadgeId: 8,
                status: false,
                userId: id,
            };

            if (res.data.length >= 1 && !filteredBadge(badge1)) {
                console.log(res.data);
                setControllBadges([...controllBadges, badge1]);
            }
            if (res.data.length >= 5 && !filteredBadge(badge2)) {
                setControllBadges([...controllBadges, badge2]);
            }
        });
    }, [auth, id, controllBadges, filteredBadge]);
    useEffect(() => {
        getUserBadgesComments();
    }, [getUserBadgesComments]);

    const getUserBadgesQuest = useCallback(() => {
        api.get(`/users/${id}/quests`, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        }).then((res) => {
            const badge1 = {
                title: 'Parceir@',
                img: Partner,
                description:
                    'Você fez seu primeiro comentário em uma pergunta!',
                BadgeId: 3,
                status: false,
                userId: id,
            };
            const badge2 = {
                title: 'Voz da Comunidade',
                img: Community,
                description: 'Você fez +5 perguntas na comunidade',
                BadgeId: 7,
                status: false,
                userId: id,
            };

            if (res.data.length >= 1 && !filteredBadge(badge1)) {
                setControllBadges([...controllBadges, badge1]);
            }
            if (res.data.length >= 5 && !filteredBadge(badge2)) {
                setControllBadges([...controllBadges, badge2]);
            }
        });
    }, [auth, id, controllBadges, filteredBadge]);

    useEffect(() => {
        getUserBadgesQuest();
    }, [getUserBadgesQuest]);

    return (
        <BadgeContext.Provider
            value={{
                controllBadges,
            }}
        >
            {children}
        </BadgeContext.Provider>
    );
};

export const useBadges = () => useContext(BadgeContext);
