import { useRuleService } from '@/features/rule/services/RuleService'
import RevolverDrum from '../components/RevolverDrum'

function TableA() {
    const { getRuleDataByTag } = useRuleService()
    const rule = getRuleDataByTag('r201a')
    const table = rule?.tables?.[0]

    if (!table) return null

    return (
        <>
            <RevolverDrum table={table} />
        </>
    )
}

export default TableA
