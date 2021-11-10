import { createContext, useState, useEffect, useContext } from "react";
import { ChildrenProps } from "../../types";

export const TasksContext = createContext({});

export const TasksProvider = ({ children }: ChildrenProps) => {
  return <TasksContext.Provider value={{}}>{children}</TasksContext.Provider>;
};

export const useTasks = () => useContext(TasksContext);
