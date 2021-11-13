import { BadgeProps } from '../../types/badge';
import { BadgeCard, BadgeText, BadgeTitle } from './styles';

interface BadgeInterface {
    item: BadgeProps;
}

const CardBadge = ({ item }: BadgeInterface) => {
    return (
        <BadgeCard>
            <BadgeTitle>{item.title}</BadgeTitle>
            <img src={item.img} alt="badge"></img>
            <BadgeText>{item.description}</BadgeText>
        </BadgeCard>
    );
};

export default CardBadge;
