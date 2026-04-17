import type { Section } from '@/types/SectionTypes'
import { Link } from 'react-router-dom'

const sections: Section[] = [
    {
        title: 'Actions:',
        content: (
            <p>
                At the start of each Turn (day), you select one action for
                yourself. Any partners you may have, will perform the action
                with you. Each action has separate rules, Possible actions
                include:
            </p>
        ),
    },
    {
        title: 'Actions allowed in any hex:',
        content: (
            <ul>
                <li>
                    <em>Travel</em> - to an adjacent hex{' '}
                    <Link to="/rule/r101b" className="text-red">
                        R101b
                    </Link>
                    , your most common choice.{' '}
                </li>
                <li>
                    <em>Heal</em> - in current hex to attempt healing yourself
                    R101c, Requires certain equipment.{' '}
                </li>
                <li>
                    <em>Part ways</em> - in current hex and willingly disband
                    with a partner R101d, Requires having a partner.
                </li>
            </ul>
        ),
    },
    {
        title: 'Actions allowed only in certain types of hexes:',
        content: (
            <ul>
                <li>
                    <em>Point of Interest</em> - only on a Hex that contains a
                    known “Point of Interest”{' '}
                    <Link to="/rule/r102" className="text-red">
                        R102
                    </Link>
                </li>
                <li>
                    <em>Enter Town</em> - only on a hex with a town{' '}
                    <Link to="/rule/r103" className="text-red">
                        R103
                    </Link>
                </li>
            </ul>
        ),
    },
    {
        title: 'Actions allowed only in combat:',
        content: (
            <ul>
                <li>
                    <em>Flee</em> - Attempt to escape combat{' '}
                    <Link to="/rule/r109" className="text-red">
                        R109
                    </Link>
                </li>
            </ul>
        ),
    },
]

function ActionPage() {
    return (
        <>
            {sections.map((section, index: number) => (
                <section key={index}>
                    <strong>{section.title}</strong>
                    {section.content}
                </section>
            ))}
        </>
    )
}

export default ActionPage
