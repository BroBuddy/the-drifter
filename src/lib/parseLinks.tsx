import { Link } from 'react-router-dom'

export function parseLinks(text: string = '') {
    const parts = text.split(/([Ee]\d{3,4}[a-zA-Z]?|[Rr]\d{3,4}[a-zA-Z]?)/g)

    return parts.map((part, i) => {
        if (/^[Ee]\d{3,4}[a-zA-Z]?$/.test(part)) {
            return (
                <Link
                    key={i}
                    to={`/event/${part.toLowerCase()}`}
                    className="text-black"
                >
                    {part}
                </Link>
            )
        }

        if (/^[Rr]\d{3,4}[a-zA-Z]?$/.test(part)) {
            return (
                <Link key={i} to={`/rule/${part.toLowerCase()}`}>
                    {part}
                </Link>
            )
        }

        return part
    })
}
