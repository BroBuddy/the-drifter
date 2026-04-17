import Tabs, { type TabItem } from '@/components/Tabs'
import { BookOpenText, Zap } from 'lucide-react'
import EventPage from '@/features/event/pages/EventPage'
import RulePage from '@/features/rule/pages/RulePage'

const tabs: TabItem[] = [
    {
        label: 'Events',
        icon: <Zap size={16} />,
        content: <EventPage />,
    },
    {
        label: 'Rules',
        icon: <BookOpenText size={16} />,
        content: <RulePage />,
    },
]

function BookletPage() {
    return <Tabs title="Booklets" tabs={tabs} />
}

export default BookletPage
