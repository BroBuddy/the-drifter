import type { TableType } from '@/features/rule/types/RuleType'
import { parseLinks } from '@/lib/parseLinks'

function ListTable({ table }: { table: TableType }) {
    return (
        <table>
            <thead>
                <tr>
                    {table.cols?.map((col, i) => (
                        <th key={i} className="px-2 pt-3 pb-2">
                            {col}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {table.rows.map((row, i) => (
                    <tr key={i}>
                        {row.map((cell, j) => (
                            <td key={j} className="px-2 py-2">
                                {parseLinks(cell)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default ListTable
