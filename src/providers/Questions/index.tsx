import { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { ChildrenProps } from '../../types/children';
import api from "../../services/api"
import {QuestionsProps} from "../../types/questions"
import { useUser } from '../User';
interface BodyProps{
    body:string
}

interface EditQuestProps{
    body:string;
    likes?:string;
}

interface QuestionsContextProps{
    createNewQuest:(body:BodyProps,userId:string)=>void
    updateQuest:(questId:string,update:EditQuestProps)=>void
    deleteQuest: (questId:string) => void;
    getUserQuestions:(questId:string)=>void;
    questions:QuestionsProps[]
    showQuestions:(questionTitle:string,userId:string)=>void
    
}

export const QuestionsContext = createContext<QuestionsContextProps>({} as QuestionsContextProps);

export const QuestionsProvider = ({ children }: ChildrenProps) => {
    const{auth, id} = useUser()
    const[questions,setQuestions] = useState<QuestionsProps[]>([] as QuestionsProps[])

    const createNewQuest = (body:BodyProps,userId:string) => {
        const data = {
            body: body,
            likes: 0,
            userId: userId
        }

        api.post("/quests",data,{
            headers:{
                Authorization: `Bearer ${auth}`
            },
        })
            .then((res)=>{
                console.log(res)
                getUserQuestions(id)
            })
            .catch((err)=>console.log(err))
    }

    const updateQuest = (questId:string,update:EditQuestProps) =>{
        api.patch(`/quests/${questId}`,update,{
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

    const deleteQuest = (questId:string) =>{
        api.delete(`/quests/${questId}`,{
            headers: {
                Authorization: `Bearer ${auth}`,
            },
        })
        .then((res)=>{
            console.log(res)
            getUserQuestions(id)
        })
        .catch((err)=>console.log(err))
    }

    const getUserQuestions = useCallback(
        (questId:string) =>{
            api.get(`/users/${questId}/quests`,{
                headers: {
                    Authorization: `Bearer ${auth}`,
                },  
            })
            .then((res)=>{
                setQuestions(res.data)
            })
            .catch((err)=>console.log(err))
        },
        [auth],
    )

    const showQuestions = useCallback(
        (questionTitle:string) =>{
        api.get(`/quests?body_like=${questionTitle}`,{
            headers: {
                Authorization: `Bearer ${auth}`,
            }, 
        })
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>console.log("Pergunta não encontrada"))
    },
    [auth],
    )

    useEffect(()=>{
        getUserQuestions(id)
    },[getUserQuestions,id])

    return (
        <QuestionsContext.Provider value={{
            createNewQuest,
            deleteQuest,
            updateQuest,
            questions,
            getUserQuestions,
            showQuestions
        }}>
            {children}
        </QuestionsContext.Provider>
    );
};

export const useQuestions = () => useContext(QuestionsContext);

/* 

tu precisa fazer um get pra pegar as questions e a lógica pra encontrar um titulo parecido no array de acordo com o user id

*/