import events_001 from '../data/events_001_080.json'
import events_081 from '../data/events_081_160.json'
import events_161 from '../data/events_161_250.json'
import type { Event, EventItem } from '../types/EventType'

export function useEventService() {
    const eventData: Event[] = [...events_001, ...events_081, ...events_161]

    const getEventData = (): EventItem[] => {
        if (!eventData) return []
        return eventData.map(({ tag, title }) => ({ tag, title }))
    }

    const getEventByTag = (tag: string): Event | undefined => {
        return eventData.find((item: Event) => item.tag === tag)
    }

    const getEventCount = (): number => eventData.length

    return { getEventData, getEventByTag, getEventCount }
}
