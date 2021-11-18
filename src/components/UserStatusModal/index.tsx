import React, { Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router';
import User from '../../assets/image/user.png';
import { useLevels } from '../../providers/Levels';
import { useUser } from '../../providers/User';
import CircleProgress from '../CircleXpProgress';

import {
    CloseModal,
    ContainerStatus,
    ContainerStatusModal,
    LogoutButton,
} from './styles';

interface UserStatusModalProps {
    setShowStatusModal: Dispatch<SetStateAction<Boolean>>;
}

const UserStatusModal = ({ setShowStatusModal }: UserStatusModalProps) => {
    const history = useHistory();
    const { userLevel } = useLevels();
    const { logout, userName } = useUser();

    return (
        <ContainerStatusModal>
            <ContainerStatus>
                <CloseModal onClick={() => setShowStatusModal(false)} />
                <div>
                    <CircleProgress>
                        <img
                            src={User}
                            alt=""
                            style={{
                                position: 'absolute',
                                top: '25px',
                                left: '26px',
                            }}
                        />
                    </CircleProgress>
                    <h3>{userName}</h3>
                    <p>Título: {userLevel.title}</p>
                    <p>Level: {userLevel?.level}</p>
                </div>

                <LogoutButton
                    onClick={() => {
                        logout();
                        history.push('/');
                    }}
                >
                    Logout
                </LogoutButton>
            </ContainerStatus>
        </ContainerStatusModal>
    );
};

export default UserStatusModal;
