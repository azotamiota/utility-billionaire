import React, { useState, useContext, createContext } from "react";

const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
    const [ data, setData ] = useState();
    
    return (
        <QuestionsContext.Provider value={{ data, setData }}>
            {children}
        </QuestionsContext.Provider>
    );
};

export const useQuestions = () => useContext(QuestionsContext);

