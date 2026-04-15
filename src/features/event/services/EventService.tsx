import eventData from '../data/eventData'
import type { Event, EventItem } from '../types/EventType'

export function useEventService() {
    const getEventData = (): EventItem[] => {
        if (!eventData) return []
        return eventData.map(({ tag, title }) => ({ tag, title }))
    }

    const getEventByTag = (tag: string): Event | undefined => {
        return eventData.find((item: Event) => item.tag === tag) as Event
    }

    const getEventCount = (): number => eventData.length

    return { getEventData, getEventByTag, getEventCount }
}
