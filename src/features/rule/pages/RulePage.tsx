import Card from '@/components/Card'
import { useRuleService } from '../services/RuleService'
import TagList from '@/components/TagList'
import PageHeader from '@/components/PageHeader'

function RulePage() {
    const { getRuleData } = useRuleService()
    const data = getRuleData()

    return (
        <>
            <PageHeader tag="Reference" title="Rule Booklet" />

            <Card>
                <TagList tags={data} />
            </Card>
        </>
    )
}

export default RulePage
