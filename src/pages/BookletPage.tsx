import Tabs, { type TabItem } from '@/components/Tabs'
import { BookOpenText, Zap } from 'lucide-react'
import RulePage from '@/features/rule/pages/RulePage'
import EventPage from '@/features/event/pages/EventPage'

const tabs: TabItem[] = [
    {
        label: 'Rules',
        icon: <BookOpenText size={16} />,
        content: <RulePage />,
    },
    {
        label: 'Events',
        icon: <Zap size={16} />,
        content: <EventPage />,
    },
]

function BookletPage() {
    return (
        <>
            <Tabs title="Booklets" tabs={tabs} />
        </>
    )
}

export default BookletPage
