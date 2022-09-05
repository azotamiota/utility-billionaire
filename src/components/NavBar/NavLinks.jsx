import React from "react"
import { NavLink, useNavigate } from "react-router-dom"

import styles from "./index.module.css"

const NavLinks = () => {
    const navigate = useNavigate()
    return (
            <div className={styles.navLinksContainer}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">New Game</NavLink>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
            </div>
        
    )
}

export default NavLinks