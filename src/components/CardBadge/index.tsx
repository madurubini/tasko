import { BadgeProps } from '../../types/badge';
import { BadgeCard, BadgeText, BadgeTitle } from './styles';

interface BadgeInterface {
    item: BadgeProps;
}

const CardBadge = ({ item }: BadgeInterface) => {
    return (
        <BadgeCard>
            <BadgeTitle>{item.title}</BadgeTitle>
            <div className={item.title[0]}>
                <img src={item.img} alt="badge"></img>
            </div>
            <BadgeText>{item.description}</BadgeText>
        </BadgeCard>
    );
};

export default CardBadge;
