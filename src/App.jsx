import React from "react";
import { Route, Routes } from "react-router-dom"

import { HomePage, CreateGame, JoinGame, WaitingRoom, Game, Result, Leaderboard, NotFound } from "./pages"
import { Footer, NavBar } from "./components"
import { QuestionsProvider, RoomProvider, SocketProvider } from "./context";
const App = () => {
    return <QuestionsProvider>
                <SocketProvider>
                    <RoomProvider>
                        <Routes>
                            <Route path="/" element={<><NavBar /><HomePage /><Footer /></>}></Route>
                            <Route path="/create" element={<><NavBar /><CreateGame /><Footer /></>}></Route>
                            <Route path="/join" element={<><NavBar /><JoinGame /><Footer /></>}></Route>
                            <Route path="/waiting" element={<><NavBar /><WaitingRoom /><Footer /></>}></Route>
                            <Route path="/game" element={<><NavBar /><Game /><Footer /></>}></Route>
                            <Route path="/result" element={<><NavBar /><Result /><Footer /></>}></Route>
                            <Route path="/leaderboard" element={<><NavBar /><Leaderboard /><Footer /></>}></Route>
                            <Route path="*" element={<><NavBar /><NotFound /><Footer /></>}></Route>
                        </Routes>
                    </RoomProvider>
                </SocketProvider>
            </QuestionsProvider>
}

export default App
