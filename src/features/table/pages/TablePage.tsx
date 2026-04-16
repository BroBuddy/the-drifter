import TableRoll from '../components/TableRoll'
import { tableA, tableB, tableC, tableD, tableD2 } from '../data/tableData'
import Tabs, { type TabItem } from '@/components/Tabs'
import type { TableType } from '@/features/rule/types/RuleType'
import { Brain, Gem, Package, ScrollText, Sword } from 'lucide-react'
import type { ReactNode } from 'react'

type TableConfig = {
    icon: ReactNode
    table: TableType
    dice: number
}
const tables: Record<string, TableConfig> = {
    A: {
        icon: <ScrollText size={16} />,
        table: tableA,
        dice: 100,
    },
    B: {
        icon: <Sword size={16} />,
        table: tableB,
        dice: 10,
    },
    C: {
        icon: <Brain size={16} />,
        table: tableC,
        dice: 10,
    },
    D: {
        icon: <Package size={16} />,
        table: tableD,
        dice: 10,
    },
    D2: {
        icon: <Gem size={16} />,
        table: tableD2,
        dice: 6,
    },
}

function TablePage() {
    const tabs: TabItem[] = Object.entries(tables).map(([key, value]) => ({
        label: `T${key}`,
        icon: value.icon,
        content: <TableRoll key={key} table={value.table} />,
    }))

    return (
        <>
            <Tabs showCard={false} title="Tables" tabs={tabs} />
        </>
    )
}

export default TablePage
