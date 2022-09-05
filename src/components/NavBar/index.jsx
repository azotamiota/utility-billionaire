import React from "react";
import styles from "./index.module.css"

import DefaultNavigation from "./DefaultNavigation"
import MobileNavigation from "./MobileNavigation"

function NavBar() {
    return (
        <div role="nav" className={styles.navContainer}>
            <DefaultNavigation />
            <MobileNavigation />
        </div>
    )
}

export default NavBar