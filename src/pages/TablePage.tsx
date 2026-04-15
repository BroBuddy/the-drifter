import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'
import TagList from '@/components/TagList'
import type { RuleItem } from '@/features/rule/types/RuleType'

const data: RuleItem[] = [
    {
        tag: 'r201a',
        title: 'Table A – Event Table',
    },
    {
        tag: 'r201b',
        title: 'Table B – Combat Table',
    },
    {
        tag: 'r201c',
        title: 'Table C – Skill Test Table',
    },
    {
        tag: 'r201d',
        title: 'Table D – Loot Table',
    },
]

function TablePage() {
    return (
        <>
            <PageHeader tag="Matrix" title="Tables" />

            <Card>
                <TagList tags={data} />
            </Card>
        </>
    )
}

export default TablePage
