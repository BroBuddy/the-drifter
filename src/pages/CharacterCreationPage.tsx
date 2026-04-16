import type { ReactNode } from 'react'

type CharacterSection = {
    title?: string
    content: ReactNode
}

const characterSections: CharacterSection[] = [
    {
        title: 'Character Creation:',
        content: (
            <p>
                <em>
                    Refer to the two page Tracking Sheet for the remainder of
                    this section.
                </em>
            </p>
        ),
    },
    {
        title: 'Wound Level:',
        content: (
            <>
                <p>Represents your health. The Wound Levels are as follows:</p>
                <ul>
                    <li>None</li>
                    <li>Light Wound (LW)</li>
                    <li>Medium Wound (MW)</li>
                    <li>Heavy Wound (HW)</li>
                    <li>Debilitating Wound (DW)</li>
                    <li>Dead (D)</li>
                </ul>
                <p>
                    On the Tracking Sheet, use a token to keep track of your
                    Wound Level. You start with the Wound Level of None. Wound
                    Level damage compounds on itself, so if you have a Light
                    Wound and receive a Medium Wound, you would now have a Heavy
                    Wound. If you had a Heavy Wound and received a Light Wound,
                    you would now have a Debilitating Wound etc. If you reach
                    the unfortunate Wound Level of Dead, you immediately lose
                    the game and will have to start again. A characters Finesse
                    skill drops depending on Wound Level. -1 for Medium Wound,
                    -2 for Heavy Wound, -3 for Debilitating Wound (see Tracking
                    Sheet). Any opponents and partners you encounter will also
                    follow the same rules for Wound Levels.
                </p>
            </>
        ),
    },
    {
        title: 'Finesse:',
        content: (
            <p>
                Represents all your characters physical skills. Your character
                starts with a Finesse skill of 4. The Finesse skill lowers
                depending on your current Wound Level. Other characters you
                encounter could also have a Finesse skill.
            </p>
        ),
    },
    {
        title: 'Hunch:',
        content: (
            <p>
                Represents all your characters mental skills. Roll a D4 to
                determine your starting Hunch skill. Use a token to keep track
                on the Tracking Sheet.
            </p>
        ),
    },
    {
        title: 'Karma:',
        content: (
            <p>
                The universal balance. Karma represents your characters amount
                of luck. Your character starts with 2 Karma points. Use a token
                to keep track on the Tracking Sheet. Your character can have no
                less than 0 and no more than 4 Karma. Any Karma points you have
                can be spent to re-roll a Combat Table (Table B) roll (Either
                your own, a partners or an opponents) but you must keep the
                second result. Some Events will fluctuate your Karma points. No
                other character in the game has a Karma skill.
            </p>
        ),
    },
    {
        title: 'Bounty Suit:',
        content: (
            <p>
                Indicates how wanted you are by the law. The Higher the Bounty
                Suit, the higher the price on your head. There are Five
                different suits, ❌, ♣️, ♦️, ♥️, and ♠️ (see Table A on Table
                Sheet). The Highest Bounty Suit is ♠️ and the lowest is ❌. Your
                Bounty Suit can go up or down (depending on the Event). Roll a
                D4 to determine your starting Bounty Suit: 1- ♥️; 2- ♦️; 3- ♣️;
                4- ❌. Place a token on that suit on the Event Table (Table A)
                located on the Table Sheet. Your Bounty Suit determines which
                column of the Event Table (Table A) you roll on when determining
                a random Event.
            </p>
        ),
    },
    {
        title: 'Money Tracker:',
        content: (
            <p>
                Used to keep track of how much money you have. Use tokens to
                keep track. Some characters you encounter along the way will
                have potential loot on them which would be indicated by what's
                called a Loot Suit (❌, ♣️, ♦️, ♥️, ♠️). This determines which
                column you roll under on the Loot Table (Table D1 on the Table
                Sheet) after defeating all the opponents. After all opponents
                are defeated, you immediately get to roll on their Loot Suit
                (using the Loot Suit Table - Table D1) to determine if you find
                any money, items etc. There is no limit to the amount of money
                you can carry. It is assumed that you have the appropriate
                satchel and saddle bags. Now roll a D10 on the Loot Table (Table
                D1) on the Table Sheet, under the X column, to determine if you
                start the game with any money etc.
            </p>
        ),
    },
    {
        title: 'Weapons:',
        content: (
            <p>
                You begin the game with Fists ❌ and a Pistol ♦️. This is
                recorded for you on page 1 of the Tracking Sheet. Weapons always
                have a Suit beside them (❌, ♣️, ♦️, ♥️, ♠️), this represents
                how powerful the weapon is. It determines which Suit column you
                roll under on the Combat table (Table B on the Table Sheet)
                whenever attacking with that weapon. You can have a maximum of
                two other weapons beyond what's already on the Tracking Sheet
                (Fists & Pistol), but none the same (only one pistol, one rifle,
                etc)
            </p>
        ),
    },
    {
        title: 'Equipment:',
        content: (
            <p>
                This is where you record any equipment you
                discover/purchase/steal etc along the way. There is no limit to
                the number of items you can carry. It is assumed that between
                you and your horse you can handle the load. An Event will
                specify if any items you find are to be recorded under your
                Equipment.
            </p>
        ),
    },
    {
        title: 'Points of Interest:',
        content: (
            <p>
                This is where you record any relevant information in regards to
                points of interest located on the map (treasures, bounties,
                etc). An Event will specify what information to record for the
                point of interest (The Hexes 4 digit identification code and the
                specific Event in the Event Booklet to encounter when on that
                Hex).
            </p>
        ),
    },
    {
        title: 'Opponents Wound Level:',
        content: (
            <p>
                Used to keep track of any opponents Wound Level during combat.
                When in combat, your opponents Wound Level is measured the same
                as yours. There Finesse score also lowers depending on their
                Wound Level (see Tracking Sheet). If there are more than two
                opponents in a single combat, there is also a Combat Sheet that
                provides extra Wound Trackers for any additional opponents.
            </p>
        ),
    },
]

function CharacterCreationPage() {
    return (
        <>
            {characterSections.map((section, index: number) => (
                <section key={index}>
                    <strong>{section.title}</strong>
                    {section.content}
                </section>
            ))}
        </>
    )
}

export default CharacterCreationPage
