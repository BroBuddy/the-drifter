import ListTable from '@/components/ListTable'
import type { TableType } from '@/features/rule/types/RuleType'

type Props = {
    table: TableType
}

function TableRoll({ table }: Props) {
    return <ListTable table={table} />
}

export default TableRoll
