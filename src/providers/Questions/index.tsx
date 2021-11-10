import { createContext, useState, useEffect, useContext } from 'react';
import { ChildrenProps } from '../../types/children';

export const QuestionsContext = createContext({});

export const QuestionsProvider = ({ children }: ChildrenProps) => {
    return (
        <QuestionsContext.Provider value={{}}>
            {children}
        </QuestionsContext.Provider>
    );
};

export const useQuestions = () => useContext(QuestionsContext);
