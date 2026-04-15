import { tagToPath, getLinkClass } from '@/lib/formatters'
import type { TagSheet } from '@/types/TagTypes'
import { Link } from 'react-router-dom'

function TagList({ tags }: { tags: TagSheet[] }) {
    return (
        <div className="flex flex-col mt-3">
            {tags.map((item: TagSheet) => (
                <div key={item.tag} className="flex flex-row my-1">
                    <Link
                        to={tagToPath(item.tag)}
                        className={`${getLinkClass(item.tag)} w-6`}
                    >
                        <span>{item.tag}</span>
                    </Link>

                    <span className="text-gray">{item.title}</span>
                </div>
            ))}
        </div>
    )
}

export default TagList
