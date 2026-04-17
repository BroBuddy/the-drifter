import Tabs, { type TabItem } from '@/components/Tabs'
import { ClipboardList, Sun } from 'lucide-react'
import IntroPage from './IntroPage'
import ActionPage from './ActionPage'

const tabs: TabItem[] = [
    {
        label: 'Intro',
        icon: <ClipboardList size={16} />,
        content: <IntroPage />,
    },
    {
        label: 'Actions',
        icon: <Sun size={16} />,
        content: <ActionPage />,
    },
]

function GamePage() {
    return <Tabs title="The Drifter" tabs={tabs} />
}

export default GamePage
