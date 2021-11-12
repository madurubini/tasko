import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import api from '../../services/api';
import { useUser } from '../User';
import { ChildrenProps } from '../../types/children';
import {
    LevelsProps,
    LevelsContextData,
    UserLevelProps,
} from '../../types/levels';

export const LevelsContext = createContext<LevelsContextData>(
    {} as LevelsContextData,
);

export const LevelsProvider = ({ children }: ChildrenProps) => {
    const [levels, setLevels] = useState<LevelsProps[] | any[]>(
        [] as LevelsProps[] | any[],
    );

    const { auth, id, xp } = useUser();
    const [userLevelId, setUserLevelId] = useState<number>(0);
    const [userLevel, setUserLevel] = useState<UserLevelProps | any>(
        {} as UserLevelProps,
    );
    const [nextlevel, setNextLevel] = useState<LevelsProps>({} as LevelsProps);

    const newUser = useCallback(() => {
        api.get(`/users/${id}/allLevels`, {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => {
                if (res.data.length === 0) {
                    const data = {
                        title: 'Noob',
                        reqXp: 0,
                        level: 0,
                        LevelId: 1,
                        status: false,
                        userId: id,
                    };
                    api.post('/allLevels', data, {
                        headers: {
                            Authorization: `Bearer ${auth}`,
                        },
                    }).then((res) => {
                        setUserLevel(res.data);
                        setUserLevelId(res.data.id);
                    });
                }
                setUserLevel(res.data[0]);
                setUserLevelId(res.data[0].id);
            })
            .catch((err) => console.log(err));
    }, [auth, id]);

    useEffect(() => {
        newUser();
    }, [newUser]);

    const getLevels = useCallback(() => {
        api.get('/levels', {
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
            .then((res) => {
                setLevels(res.data);
            })
            .catch((err) => console.log(err));
    }, [auth]);

    useEffect(() => {
        getLevels();
    }, [getLevels]);

    const patchLevel = useCallback(
        (elo: LevelsProps) => {
            api.patch(`/allLevels/${userLevelId}`, elo, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            })
                .then((res) => setUserLevel(res.data))
                .catch((err) => console.log(err));
        },
        [auth, userLevelId],
    );

    const nextLevel = useCallback(() => {
        setNextLevel(
            levels.find((elo) => elo.LevelId === userLevel.LevelId + 1),
        );

        if (xp >= nextlevel?.reqXp) {
            patchLevel(nextlevel);
        }
    }, [userLevel.LevelId, levels, xp, patchLevel, nextlevel]);

    useEffect(() => {
        nextLevel();
    }, [nextLevel]);

    return (
        <LevelsContext.Provider value={{ levels, userLevelId, getLevels }}>
            {children}
        </LevelsContext.Provider>
    );
};
export const useLevels = () => useContext(LevelsContext);
