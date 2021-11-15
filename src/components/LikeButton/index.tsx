import { useState } from 'react';
import { GiHeartMinus, GiHeartPlus } from 'react-icons/gi';
import { useQuestions } from '../../providers/Questions';
import { LikeProps } from '../../types/questions';
import { Container } from './styles';

const LikeButton = ({ id, likes }: LikeProps) => {
    const [liked, setLiked] = useState<boolean>(false);
    const [count, setCount] = useState<number>(likes);
    const { like } = useQuestions();

    return (
        <Container>
            {liked ? (
                <GiHeartMinus
                    onClick={() => {
                        setLiked(!liked);
                        setCount(likes--);
                        like(id, likes - 1);
                    }}
                />
            ) : (
                <GiHeartPlus
                    onClick={() => {
                        setLiked(!liked);
                        setCount(likes++);
                        like(id, likes + 1);
                    }}
                />
            )}
            <span>{likes}</span>
        </Container>
    );
};

export default LikeButton;
