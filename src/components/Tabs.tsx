import { useState, type ReactNode } from 'react'
import styles from './Tabs.module.scss'
import Card from './Card'

export type TabItem = {
    label: string
    icon?: ReactNode
    content: ReactNode
}

type TabsProps = {
    tabs: TabItem[]
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    return (
        <>
            <div className={styles.tabs}>
                {tabs.map((tab: TabItem, index: number) => (
                    <span
                        key={tab.label}
                        className={`p-1 ${index === activeIndex ? styles.active : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.icon} {tab.label}
                    </span>
                ))}
            </div>

            <Card>{tabs[activeIndex]?.content}</Card>
        </>
    )
}

export default Tabs
