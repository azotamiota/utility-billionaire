import React from "react";
import styles from "./index.module.css"

import NavLinks from "./NavLinks";

const DefaultNavigation = () => {
    return (
        <nav className={styles.navbar}>
            <NavLinks divName="navLinksContainer"/>
        </nav>
    )
}

export default DefaultNavigation

