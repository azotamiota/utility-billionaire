import React from "react";
import { Route, Routes } from "react-router-dom"

import { HomePage, CreateGame, JoinGame, WaitingRoom, Game, Result, Leaderboard, NotFound } from "./pages"

const App = () => {
    return <Routes>
                <Route path="/" element={<><Header /><HomePage /><Footer /></>}></Route>
                <Route path="/create" element={<><Header /><CreateGame /><Footer /></>}></Route>
                <Route path="/join" element={<><Header /><JoinGame /><Footer /></>}></Route>
                <Route path="/waiting" element={<><Header /><WaitingRoom /><Footer /></>}></Route>
                <Route path="/game" element={<><Header /><Game /><Footer /></>}></Route>
                <Route path="/result" element={<><Header /><Result /><Footer /></>}></Route>
                <Route path="/leaderboard" element={<><Header /><Leaderboard /><Footer /></>}></Route>
                <Route path="*" element={<><Header /><NotFound /><Footer /></>}></Route>
            </Routes>
}

export default App
