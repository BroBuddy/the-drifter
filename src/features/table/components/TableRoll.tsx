import { rollAndFind } from '@/lib/tableMatrix'
import { useState } from 'react'
import type { TableType } from '@/features/rule/types/RuleType'
import { parseLinks } from '@/lib/parseLinks'
import { Dices } from 'lucide-react'

type Props = {
    content: string
    dice: number
    table: TableType
}

type RollResult = {
    roll: number
    row: string[] | null
}

function TableRoll({ content, dice, table }: Props) {
    const [result, setResult] = useState<RollResult | null>(null)

    function handleRoll() {
        const rollResult = rollAndFind(dice, table)
        setResult(rollResult)
    }

    return (
        <>
            <p>{content}</p>

            <button onClick={handleRoll}>
                <Dices size={16} />
                <span>Roll 1D{dice}</span>
            </button>

            {result && (
                <>
                    <div className="flex flex-row mt-3">
                        {table.cols &&
                            table.cols.map((col, i) => (
                                <div key={i} className="text-md w-5 mb-2">
                                    {col}
                                </div>
                            ))}
                    </div>

                    <div className="flex flex-row">
                        <div className="text-md w-5">{result.roll}</div>

                        {result.row?.slice(1).map((cell, i) => (
                            <div key={i} className="text-md w-5">
                                {parseLinks(cell)}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    )
}

export default TableRoll
