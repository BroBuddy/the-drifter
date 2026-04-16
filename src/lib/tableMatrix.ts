import type { TableType } from '@/features/rule/types/RuleType'

function rollDice(dice: number) {
    return Math.floor(Math.random() * dice) + 1
}

function findRow(roll: number, table: TableType) {
    return (
        table.rows.find((row) => {
            const range = row[0]

            if (range.includes('-')) {
                const [min, max] = range.split('-').map(Number)
                return roll >= min && roll <= max
            }

            return Number(range) === roll
        }) ?? null
    )
}

export function rollAndFind(dice: number, table: TableType) {
    const roll = rollDice(dice)
    const row = findRow(roll, table)

    return { roll, row }
}
