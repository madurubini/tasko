import { createContext, useState, useEffect, useContext } from 'react';
import { ChildrenProps } from '../../types/children';
import api from "../../services/api"
import {QuestionsProps} from "../../types/questions"
interface QuestionsContextProps{
    
}

export const QuestionsContext = createContext({});

export const QuestionsProvider = ({ children }: ChildrenProps) => {
    return (
        <QuestionsContext.Provider value={{}}>
            {children}
        </QuestionsContext.Provider>
    );
};

export const useQuestions = () => useContext(QuestionsContext);

/* 

tu precisa fazer um get pra pegar as questions e a lógica pra encontrar um titulo parecido no array de acordo com o user id

*/