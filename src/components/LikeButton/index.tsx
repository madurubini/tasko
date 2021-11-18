import { useState } from 'react';
import { GiHeartMinus, GiHeartPlus } from 'react-icons/gi';
import { useQuestions } from '../../providers/Questions';

import { LikeProps } from '../../types/questions';
import { Container } from './styles';

const LikeButton = ({ id, likes }: LikeProps) => {
    const [liked, setLiked] = useState<boolean>(false);

    const { like } = useQuestions();

    return (
        <Container>
            {liked ? (
                <GiHeartMinus
                    onClick={() => {
                        setLiked(!liked);
                        like(id, likes - 1);
                    }}
                />
            ) : (
                <GiHeartPlus
                    onClick={() => {
                        setLiked(!liked);
                        like(id, likes + 1);
                    }}
                />
            )}
            <span>{likes}</span>
        </Container>
    );
};

export default LikeButton;
