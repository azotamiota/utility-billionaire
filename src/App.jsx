import React from "react";
import { Route, Routes } from "react-router-dom"

import { HomePage, TeamPage, DemoPage, PurposePage, PlanningPage, ChallengesPage, SignificantPage, FuturePage, TechnologiesPage, TestCoveragePage } from "./pages"
import { Footer } from "./components"
const App = () => {
    return <Routes>
                <Route path="/" element={<><HomePage /><Footer /></>}></Route>
                <Route path="/team" element={<><TeamPage /><Footer /></>}></Route>
                <Route path="/demo" element={<><DemoPage /><Footer /></>}></Route>
                <Route path="/purpose" element={<><PurposePage /><Footer /></>}></Route>
                <Route path="/planning-and-delivery" element={<><PlanningPage /><Footer /></>}></Route>
                <Route path="/challenges-and-solutions" element={<><ChallengesPage /><Footer /></>}></Route>
                <Route path="/significant-code" element={<><SignificantPage /><Footer /></>}></Route>
                <Route path="/future-features-and-what-we-have-learnt" element={<><FuturePage /><Footer /></>}></Route>
                <Route path="/technologies" element={<><TechnologiesPage /><Footer /></>}></Route>
                <Route path="/test-coverage" element={<><TestCoveragePage /><Footer /></>}></Route>
        </Routes>
}
export default App
