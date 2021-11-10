import { createContext, useState, useEffect, useContext } from "react";
import { ChildrenProps } from "../../types";

export const CommentsContext = createContext({});

export const CommentsProvider = ({ children }: ChildrenProps) => {
  return (
    <CommentsContext.Provider value={{}}>{children}</CommentsContext.Provider>
  );
};

export const useComments = () => useContext(CommentsContext);
