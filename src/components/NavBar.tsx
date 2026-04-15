import { NavLink, useLocation } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { BookOpenText, Home, Zap } from 'lucide-react'
import type { ReactNode } from 'react'

type Links = {
    to: string
    label?: string
    icon?: ReactNode
}

const links: Links[] = [
    { to: '/', label: 'Game', icon: <Home /> },
    { to: '/rule', label: 'Rules', icon: <BookOpenText /> },
    { to: '/event', label: 'Events', icon: <Zap /> },
]

const NavBar = () => {
    const location = useLocation()

    return (
        <nav className={styles.navBar}>
            {links.map(({ to, label, icon }) => {
                const isActive = location.pathname === to

                return (
                    <NavLink
                        key={to}
                        to={to}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            pointerEvents: isActive ? 'none' : 'auto',
                            cursor: isActive ? 'default' : 'pointer',
                        }}
                        className={isActive ? styles.active : undefined}
                    >
                        <span>{icon ?? label}</span>
                    </NavLink>
                )
            })}
        </nav>
    )
}

export default NavBar
