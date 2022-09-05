import React from "react"
import { NavLink, useNavigate } from "react-router-dom"

import styles from "./index.module.css"

const NavLinks = () => {
    const navigate = useNavigate()
    return (
            <div className={styles.navLinksContainer}>
                <NavLink to="/" className={styles.neonText}>Home</NavLink>
                <NavLink to="/create" className={styles.neonText}>New Game</NavLink>
                <NavLink to="/leaderboard" className={styles.neonText}>Leaderboard</NavLink>
            </div>
        
    )
}

export default NavLinks