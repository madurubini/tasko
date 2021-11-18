import React, { useCallback, useEffect, useState } from 'react';
import { CircularProgress } from '@chakra-ui/react';
import { useUser } from '../../providers/User';
import { useLevels } from '../../providers/Levels';
import { ChildrenProps } from '../../types/children';

const CircleProgress = ({ children }: ChildrenProps) => {
    const { xp } = useUser();
    const { userLevel } = useLevels();
    const [percent, setPercent] = useState<number>(0);
    const [max, setMax] = useState<number>(0);

    const patchPercent = useCallback(() => {
        switch (userLevel.level) {
            case 0:
                setMax(10);
                break;

            case 1:
                setMax(30);
                break;

            case 2:
                setMax(60);
                break;

            case 3:
                setMax(10);
                break;

            case 4:
                setMax(15);
                break;

            case 5:
                setMax(20);
                break;

            case 6:
                setMax(26);
                break;

            case 7:
                setMax(33);
                break;

            case 8:
                setMax(40);
                break;

            case 9:
                setMax(50);
                break;

            case 10:
                setMax(50);
                break;
        }
        setPercent((xp * 100) / max);
    }, [xp, max, userLevel.level]);

    useEffect(() => {
        patchPercent();
    }, [patchPercent]);

    return (
        <>
            <CircularProgress
                value={percent}
                color="green.400"
                size="150px"
                thickness="6px"
            >
                {children}
            </CircularProgress>
        </>
    );
};

export default CircleProgress;
