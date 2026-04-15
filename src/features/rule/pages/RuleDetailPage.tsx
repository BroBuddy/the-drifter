import Card from '@/components/Card'
import { useParams } from 'react-router-dom'
import { parseLinks } from '@/lib/parseLinks'
import { useRuleService } from '../services/RuleService'
import ListTable from '@/components/ListTable'
import PageHeader from '@/components/PageHeader'

function RuleDetailPage() {
    const { tag } = useParams()
    const { getRuleDataByTag } = useRuleService()
    const rule = getRuleDataByTag(tag as string)

    if (!rule) return null

    return (
        <div style={{ position: 'relative' }}>
            <PageHeader tag={rule.tag} title={rule.title} />

            {rule.desc && rule.desc?.length >= 1 && (
                <Card>
                    {rule.desc.map((p, i) => (
                        <p key={i}>{parseLinks(p)}</p>
                    ))}
                </Card>
            )}

            {rule.tables?.map((table, index) => (
                <ListTable key={index} table={table} />
            ))}

            {rule.note && (
                <Card>
                    <span className="note">Notes</span>

                    {rule.note?.map((p, i) => (
                        <p key={i}>{parseLinks(p)}</p>
                    ))}
                </Card>
            )}
        </div>
    )
}

export default RuleDetailPage
