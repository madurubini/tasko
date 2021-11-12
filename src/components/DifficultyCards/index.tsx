import { BsLightningChargeFill, BsLightningCharge } from 'react-icons/bs';
import { DifficultyBox, LightningBox } from './styles';

export const EasyDifficulty = () => {
    return (
        <DifficultyBox>
            <LightningBox>
                <BsLightningChargeFill />
                <BsLightningCharge />
                <BsLightningCharge />
            </LightningBox>
            <h3>Easy</h3>
        </DifficultyBox>
    );
};

export const MediumDifficulty = () => {
    return (
        <DifficultyBox>
            <LightningBox>
                <BsLightningChargeFill />
                <BsLightningChargeFill />
                <BsLightningCharge />
            </LightningBox>
            <h3>Medium</h3>
        </DifficultyBox>
    );
};

export const HardDifficulty = () => {
    return (
        <DifficultyBox>
            <LightningBox>
                <BsLightningChargeFill />
                <BsLightningChargeFill />
                <BsLightningChargeFill />
            </LightningBox>
            <h3>Hard</h3>
        </DifficultyBox>
    );
};
