import TagList from '@/components/TagList'
import { useEventService } from '../services/EventService'

function EventPage() {
    const { getEventData } = useEventService()
    const data = getEventData()

    console.log('events', data.length)

    return <TagList tags={data} />
}

export default EventPage
