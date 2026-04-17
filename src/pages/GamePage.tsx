import Tabs, { type TabItem } from '@/components/Tabs'
import KeywordPage from './KeywordPage'
import { BookText, ClipboardList, Sun } from 'lucide-react'
import IntroPage from './IntroPage'
import ActionPage from './ActionPge'

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
    {
        label: 'Keywords',
        icon: <BookText size={16} />,
        content: <KeywordPage />,
    },
]

function GamePage() {
    return (
        <>
            <Tabs title="The Drifter" tabs={tabs} />
        </>
    )
}

export default GamePage
