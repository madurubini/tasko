import { useState } from 'react';
import { GiHeartMinus, GiHeartPlus } from 'react-icons/gi';
import { useQuestions } from '../../providers/Questions';
import { Container } from './styles';

const LikeButton = () => {
    const [liked, setLiked] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const { like } = useQuestions();

    return (
        <Container>
            {liked ? (
                <GiHeartMinus
                    onClick={() => {
                        setLiked(!liked);
                        // like(id, likes - 1)
                    }}
                />
            ) : (
                <GiHeartPlus
                    onClick={() => {
                        setLiked(!liked);
                        // like(id, likes + 1)
                    }}
                />
            )}
            <span>{count}</span>
        </Container>
    );
};

export default LikeButton;
