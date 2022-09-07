import React, { useState, useContext, createContext } from "react";
import io from 'socket.io-client'

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


const url = 'http://localhost:5000' 
// const url = 'https://utility-billionaire.herokuapp.com/' 

export const socket = io.connect(url)
export const SocketContext = createContext()

export const SocketProvider = ({children}) => {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
    const [ room, setRoom ] = useState();
    const [ players, setPlayers ] = useState();
    const [ currentUser, setCurrentUser ] = useState();
    
    return (
        <RoomContext.Provider value={{ room: [room, setRoom], players: [players, setPlayers], currentUser: [currentUser, setCurrentUser] }}>
            {children}
        </RoomContext.Provider>
    );
};

export const useRoom = () => useContext(RoomContext);

