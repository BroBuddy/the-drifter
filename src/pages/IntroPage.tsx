import { Link } from 'react-router-dom'

function IntroPage() {
    return (
        <>
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
            <p>
                <strong>Booklets:</strong>
                <br />
                Each of the two booklets contain numbered sections. These are
                the Rule booklet and the Events booklet. The booklets should be
                combined into one book for ease of access.
            </p>
            <p>
                <strong>Mapboard:</strong>
                <br />
                The colour mapboard is gridded into hexagons for ease in
                movement and location. Each hex has a numerical identification
                code. You do not leave the mapboard, instead stop at the edge
                and use that hex instead. Each hex has a single dominant terrain
                type, illustrated on the game map key. Some hexes may have extra
                structures in them (a town).
            </p>
            <p>
                <strong>Edge of the Game Map:</strong>
                <br />
                During the game, the Drifter cannot leave the game map. If an
                event or rule would normally land him off the map, he simply
                stops at the map edge instead. In other cases, “points of
                interest” and other locations may be off the game map, in which
                case they are simply not available.
            </p>
            <p>
                <strong>What you will need:</strong>
                <br />
                You will need a pencil, a copy of the two page Tracking Sheet,
                copy of the Tables sheet, a D10(10 sided die), D4(4 sided die),
                D6(6 sided die), a copy of the mapboard, tokens for the Tracking
                Sheet, one to Track your movement as you move along the map and
                others to use on the Tracking Sheet.
            </p>
            <p>
                To begin, open the Events booklet and read{' '}
                <Link to="/event/e001">E001</Link>.
            </p>
        </>
    )
}

export default IntroPage
