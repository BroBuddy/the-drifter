import PageHeader from '@/components/PageHeader'
import TableRoll from '../components/TableRoll'
import { tableA, tableB, tableC, tableD, tableD2 } from '../data/tableData'
import Tabs, { type TabItem } from '@/components/Tabs'
import type { TableType } from '@/features/rule/types/RuleType'
import { Brain, Gem, Package, ScrollText, Sword } from 'lucide-react'
import type { ReactNode } from 'react'

type TableConfig = {
    label: string
    icon: ReactNode
    content: string
    table: TableType
    dice: number
}
const tables: Record<string, TableConfig> = {
    A: {
        label: 'Event Table - Bounty Suit',
        icon: <ScrollText size={16} />,
        content: 'Event Table - Bounty Suit',
        table: tableA,
        dice: 100,
    },
    B: {
        label: 'Combat Table – Weapon Suit',
        icon: <Sword size={16} />,
        content:
            'Combat Table – Weapon Suit, * Fast! – attacker immediately gets another attack, ** Countered! – attacker immediately takes a LW',
        table: tableB,
        dice: 10,
    },
    C: {
        label: 'Skill Test Table – Difficulty Suit',
        icon: <Brain size={16} />,
        content:
            'Skill Test Table – Difficulty Suit, * Immediately gain 1 Karma Point (Max of 4)',
        table: tableC,
        dice: 10,
    },
    D: {
        label: 'Loot Table – Loot Suit',
        icon: <Package size={16} />,
        content:
            "Loot Table – Loot Suit, * There's more! Roll again on the same suit.",
        table: tableD,
        dice: 10,
    },
    D2: {
        label: 'Loot Table II',
        icon: <Gem size={16} />,
        content:
            "Loot Table – Loot Suit, * There's more! Roll again on the same suit.",
        table: tableD2,
        dice: 6,
    },
}

function TablePage() {
    const tabs: TabItem[] = Object.entries(tables).map(([key, value]) => ({
        label: `T${key}`,
        icon: value.icon,
        content: (
            <TableRoll
                key={key}
                content={value.content}
                dice={value.dice}
                table={value.table}
            />
        ),
    }))

    return (
        <>
            <PageHeader title="Tables" tag="Matrix" />

            <Tabs tabs={tabs} />
        </>
    )
}

export default TablePage
