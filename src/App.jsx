import React from "react";
import { Route, Routes } from "react-router-dom"

import { HomePage, CreateGame, JoinGame, WaitingRoom, Game, Result, Leaderboard, NotFound } from "./pages"

const App = () => {
    return <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/create" element={<CreateGame />}></Route>
                <Route path="/join" element={<JoinGame />}></Route>
                <Route path="/waiting" element={<WaitingRoom />}></Route>
                <Route path="/game" element={<Game />}></Route>
                <Route path="/result" element={<Result />}></Route>
                <Route path="/leaderboard" element={<Leaderboard />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
}

export default App