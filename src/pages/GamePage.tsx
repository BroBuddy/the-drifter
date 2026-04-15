import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'
import Tabs, { type TabItem } from '@/components/Tabs'
import KeywordPage from './KeywordPage'
import { ClipboardList, Pen } from 'lucide-react'
import IntroPage from './IntroPage'

const tabs: TabItem[] = [
    {
        label: 'Intro',
        icon: <ClipboardList size={16} />,
        content: <IntroPage />,
    },
    { label: 'Keywords', icon: <Pen size={16} />, content: <KeywordPage /> },
]

function GamePage() {
    return (
        <>
            <PageHeader tag="A Wild West Adventure" title="The Drifter" />

            <Card>
                <Tabs tabs={tabs} />
            </Card>
        </>
    )
}

export default GamePage
