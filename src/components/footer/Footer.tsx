import React from 'react'
import styles from './Footer.module.css'

export const Footer: React.FC = React.memo(() => {
    return (
        <footer className={styles.footer__wrapper}>
            Social network ©2022 Created by Malakhov Aleksandr with Ant Design
        </footer>
    )
})