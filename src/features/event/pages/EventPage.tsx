import TagList from '@/components/TagList'
import { useEventService } from '../services/EventService'

function EventPage() {
    const { getEventData } = useEventService()
    const data = getEventData()

    return <TagList tags={data} />
}

export default EventPage
