import Tabs, { type TabItem } from '@/components/Tabs'
import CharacterCreationPage from './CharacterCreationPage'
import { ClipboardList, User } from 'lucide-react'
import IntroPage from './IntroPage'

const tabs: TabItem[] = [
    {
        label: 'Intro',
        icon: <ClipboardList size={16} />,
        content: <IntroPage />,
    },
    {
        label: 'Character Creation',
        icon: <User size={16} />,
        content: <CharacterCreationPage />,
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
