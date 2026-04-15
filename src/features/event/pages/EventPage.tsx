import TagList from '@/components/TagList'
import { useEventService } from '../services/EventService'
import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'

function EventPage() {
    const { getEventData } = useEventService()
    const data = getEventData()

    return (
        <>
            <PageHeader tag="Reference" title="Event Booklet" />

            <Card>
                <TagList tags={data} />
            </Card>
        </>
    )
}

export default EventPage
