import { NavLink, useLocation } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { Coffee, Home } from 'lucide-react'
import type { ReactNode } from 'react'

type Links = {
    to: string
    label?: string
    icon?: ReactNode
}

const links: Links[] = [
    { to: '/', label: 'Game', icon: <Home /> },
    { to: '/table/a', label: 'TA' },
    { to: '/table/b', label: 'TB' },
    { to: '/table/c', label: 'TC' },
    { to: '/table/d', label: 'TD' },
    { to: '/rule/r101a', label: 'Actions', icon: <Coffee /> },
]

const NavBar = () => {
    const location = useLocation()

    return (
        <nav className={styles.navBar}>
            {links.map(({ to, label, icon }) => {
                const isActive = location.pathname === to

                return (
                    <NavLink
                        key={label}
                        to={to}
                        style={{
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
