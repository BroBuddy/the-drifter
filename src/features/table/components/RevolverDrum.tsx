import Card from '@/components/Card'
import styles from './RevolverDrum.module.scss'
import { rollAndFind } from '@/lib/tableMatrix'
import type { TableType } from '@/features/rule/types/RuleType'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RevolverDrum({ table }: { table: TableType }) {
    const navigate = useNavigate()
    const [isRolling, setIsRolling] = useState<boolean>(false)

    const rollDrum = (position: number) => {
        const { roll, row } = rollAndFind(100, table)

        if (!row) {
            console.log('No row found', roll)
            return
        }

        const event = row[position + 1].toLowerCase()

        setIsRolling(true)

        setTimeout(() => {
            navigate(`/event/${event}`)
        }, 1000)
    }

    return (
        <Card title="Table A">
            <div
                className={`${styles.revolverDrum} ${
                    isRolling ? styles.rolling : ''
                }`}
            >
                {!isRolling && (
                    <>
                        <span
                            className={styles.ammoA}
                            onClick={() => rollDrum(0)}
                        >
                            ❌
                        </span>
                        <span
                            className={styles.ammoB}
                            onClick={() => rollDrum(1)}
                        >
                            ♣️
                        </span>
                        <span
                            className={styles.ammoC}
                            onClick={() => rollDrum(2)}
                        >
                            ♦️
                        </span>
                        <span
                            className={styles.ammoD}
                            onClick={() => rollDrum(3)}
                        >
                            ♥️
                        </span>
                        <span
                            className={styles.ammoE}
                            onClick={() => rollDrum(4)}
                        >
                            ♠️
                        </span>
                    </>
                )}
            </div>
        </Card>
    )
}

export default RevolverDrum
