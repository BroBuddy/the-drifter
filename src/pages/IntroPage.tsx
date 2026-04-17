import type { Section } from '@/types/SectionTypes'
import { Link } from 'react-router-dom'

const sections: Section[] = [
    {
        title: 'Start Here:',
        content: (
            <p>
                This game will be a new experience. You are about to become a
                character in a story - a story that changes each game. You are a
                gunslinger in the fictional Wild West. This is a solitaire game;
                you play it alone. In this “story game” you read one numbered
                section after another. Each describes a new situation, or
                provides rules about the choices and actions you can make. There
                are hundreds of events and situations, so each game will be a
                new, fresh experience.
            </p>
        ),
    },
    {
        title: 'What you will need:',
        content: (
            <p>
                You will need a pencil, a copy of the two page Tracking Sheet,
                copy of the Tables sheet, a D10(10 sided die), D4(4 sided die),
                D6(6 sided die), a copy of the mapboard, tokens for the Tracking
                Sheet, one to Track your movement as you move along the map and
                others to use on the Tracking Sheet.
            </p>
        ),
    },
    {
        content: (
            <p>
                To begin, open the Events booklet and read{' '}
                <Link to="/event/e001" className="text-gold">
                    E001
                </Link>
                .
            </p>
        ),
    },
]

function IntroPage() {
    return (
        <>
            {sections.map((section, index: number) => (
                <section key={index}>
                    {section.title && <strong>{section.title}</strong>}
                    {section.content}
                </section>
            ))}
        </>
    )
}

export default IntroPage
