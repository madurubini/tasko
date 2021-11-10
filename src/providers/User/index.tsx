import { createContext, useState, useEffect, useContext } from 'react';
import { ChildrenProps } from '../../types/children';

export const UserContext = createContext({});

export const UserProvider = ({ children }: ChildrenProps) => {
    return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useUsers = () => useContext(UserContext);
