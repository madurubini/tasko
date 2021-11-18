import React, { Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router';
import User from '../../assets/image/user.png';
import { useLevels } from '../../providers/Levels';
import { useUser } from '../../providers/User';

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
    const { logout } = useUser();

    return (
        <ContainerStatusModal>
            <ContainerStatus>
                <CloseModal onClick={() => setShowStatusModal(false)} />
                <div>
                    <img src={User} alt="" />
                    <h3>Usuário</h3>
                    <p>Level: {userLevel.LevelId}</p>
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
