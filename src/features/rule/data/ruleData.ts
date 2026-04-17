import type { Rule } from '../types/RuleType'

const ruleData: Rule[] = [
    {
        tag: 'r101',
        title: 'Goal',
        desc: [
            'Acquire a total of $300 (unspent) without getting killed. As soon as you achieve $300, you immediately win the game.',
            'You are a gunslinger who has been living a hazy existence of too much whiskey. Your time has been mostly spent on the outside of the law, killing, stealing, carousing with undesirables, living a dangerous life full of excess and violence. As of late, your feelings have perhaps shifted and you know this way of life might not last and now looking to perhaps put your wild ways away, buy a ranch and settle into obscurity. You need $300 and are willing to get it by any means you feel necessary. Can you acquire the $300 without perishing or being locked away in jail to rot?',
        ],
        note: [
            'The Drifter is a realistic adventure game. You play the game in turns (one turn equals one full day). A turn is always made up of an Action and at least one Event (from the Event Booklet). Each turn starts with you selecting an action, such as travelling to a new hex on the map. Depending on the action selected, you could be referred to a specific Event, or have to roll for a random Event (Table A on the Table Sheet).',
            'After the Event has been resolved, that is considered a Turn (full day). Some Events will have you turn to another Event, you would keep following Events until no options remain. When no options remain, you then move onto the next day (Turn) doing it all over again, choosing an action, resolving that action, encountering another Event. Some Actions will instruct you to go to a specific Event in the Events Booklet and some actions have you roll for a random Event (Events Table - Table A on the Tables Sheet), this will be specified in that actions rules.',
            'Regardless of what action you take, you will always encounter an Event(s) in the Events Book. A Turn (full day) is always comprised of an Action and then an Event.',
            'All events (located in the Events Booklet) are self explanatory, and refer to the main rules section that describes how they are resolved. There are times when Events will redirect you to another Event. For some Events, you can choose what you would like to do. When given a choice in a situation, imagine yourself acting out the Event, and select the resolution that seems most fitting to you.',
        ],
        tables: [
            {
                cols: ['Ref', 'Outcome'],
                rows: [
                    ['r101a', 'Actions'],
                    ['r101b', 'Travel (To A New Hex)'],
                    ['r101c', 'Heal'],
                    ['r101d', 'Part Ways'],
                ],
            },
        ],
    },
    {
        tag: 'r101a',
        title: 'Actions',
        desc: [
            'At the start of each Turn (day), you select one action for yourself. Any partners you may have, will perform the action with you. Each action has separate rules, Possible actions include:',
        ],
        tables: [
            {
                cols: ['Actions allowed in any hex'],
                rows: [
                    [
                        'Travel - to an adjacent hex R101b, your most common choice.',
                    ],
                    [
                        'Heal - in current hex to attempt healing yourself R101c, Requires certain equipment.',
                    ],
                    [
                        'Part ways - in current hex and willingly disband with a partner R101d, Requires having a partner.',
                    ],
                ],
            },
            {
                cols: ['Actions allowed only in certain types of hexes'],
                rows: [
                    [
                        'Point of Interest - only on a Hex that contains a known “Point of Interest” R102',
                    ],
                    ['Enter Town - only on a hex with a town R103'],
                ],
            },
            {
                cols: ['Actions allowed only in combat'],
                rows: [['Flee - Attempt to escape combat R109']],
            },
        ],
    },
    {
        tag: 'r101b',
        title: 'Travel (To A New Hex)',
        desc: [
            'Move your token into any adjacent hex of your choice. After you have moved your token into the new hex, roll for an Event using the Event Table (Table A on the Table Sheet), under the column based on your current Bounty Suit, to determine the Event you encounter. Turn to that Event in the Event Booklet.',
        ],
    },
    {
        tag: 'r101c',
        title: 'Heal',
        desc: [
            'This action is only allowed if you have certain Equipment that allows healing (balms, tonics etc).',
            'You remain in the same hex to spend time tending to you or a partners injuries; E175',
        ],
    },
    {
        tag: 'r101d',
        title: 'Part Ways',
        desc: [
            'This action is only available if you have a partner.',
            'You remain in the same hex and discuss about going separate ways.',
        ],
        note: [
            'If you have more than one partner, you may disband with all of them at once, but it could be dangerous, depending on the D4 result. ',
            'You may return to E001 and continue onto the second paragraph or continue reading through to R136 to go over all the rules.',
        ],
        tables: [
            {
                cols: ['1D4', 'Outcome'],
                rows: [
                    ['1', 'r113'],
                    ['2', 'r112'],
                    ['3', 'r112'],
                    ['4', 'r114'],
                ],
            },
        ],
    },
    {
        tag: 'r102',
        title: 'Points of Interest',
        desc: [
            'When in a hex that has a point of interest, you may perform a Point of Interest Action. ',
            'This action is only available when on a hex that has been identified to have a point of interest. Any Points of Interest you discover, you will have recorded under Points of Interest on your Tracking Sheet.',
            'Any Event with a point of interest will provide the Hex number (where it is located on the mapboard) or, at times, a specific place (i.e. any town) and the Event number (which Event to directly go to, when in the hex that contains the point of interest).',
        ],
        note: [
            'As soon as you encounter the Point of Interest in the Events booklet, it is no longer available, erase it from your tracking sheet. You would need to re-discover the Point of Interest again to be able to revisit it.',
            'You can have the same Point of Interest at the same time, and more than once if discovered again in the future. ',
            'You can have a maximum of five Points of Interest at a time. If you discover another Points of Interest and you already have five, you ignore it (you are considered too busy focusing on your current tasks to take on anymore).',
        ],
        tables: [
            {
                cols: ['I.e,', 'Hex'],
                rows: [
                    [
                        '#1',
                        'Hex#10,7/Mine/E152. This Points of Interest indicates, on Hex# 10,7, there is a Mine. When you’re map token is on Hex#10,7 you can perform a Points of Interest action and go directly to E152 in the Events Booklet.',
                    ],
                    [
                        '#2',
                        'Hex#any town/hotel/E136. This Points of Interest indicates any Hex that contains a Town. When you’re map token is on any Hex that contains a town, you can perform a Points of Interest action and go directly to E136 in the Events Booklet.',
                    ],
                ],
            },
        ],
    },
    {
        tag: 'r103',
        title: 'Enter Town',
        desc: [
            'This Action is only available when on a hex with a town.',
            '*Roll a D6 to determine available/open places in the town that day, and then choose which location to visit:',
        ],
        note: [
            '*You always roll on the above table when performing an Enter Town action to determine which businesses are open that day, even if you performed an Enter Town action the previous Turn. The same business that was open yesterday might not be open today. ',
            '**Only available if the Towns hex has a railroad track running through it.',
        ],
        tables: [
            {
                cols: ['1d6', 'Outcome', '', '', ''],
                rows: [
                    ['1', 'Military Presence R130', '', '', ''],
                    ['2', 'Saloon R106', 'Train Station R108**', '', ''],
                    [
                        '3-4',
                        'Saloon R106',
                        'Shops R104',
                        'Train Station R108**',
                        '',
                    ],
                    [
                        '5-6',
                        'Saloon R106',
                        'Shops R104',
                        "Sheriff's Office R132",
                        'Train Station R108**',
                    ],
                ],
            },
        ],
    },
    {
        tag: 'r104',
        title: 'Shops',
        desc: [
            '"I’ll take a gander."',
            'You peruse the towns market area.',
            'Roll a D6:',
        ],
        tables: [
            {
                cols: ['1d6', 'Outcome'],
                rows: [
                    ['1', '+1 Karma. Accused of loitering; E155'],
                    [
                        '2',
                        'If your Bounty Suit is ♦️,♥️,♠️ you attract the attention of a fervent Lawman; E155. If you are on a marshland hex and your Bounty Suit is X or ♣️; E029. If you are not on a marshland hex and your Bounty Suit is X or ♣️; E039',
                    ],
                    [
                        '3',
                        'There is a stagecoach here offering rides to any hex for $2. If you pay the $2; E241. If you don’t pay the $2, you go to the saloon instead; R106',
                    ],
                    [
                        '4',
                        'If your Bounty Suit is ♠️ you attract the attention of the authorities; E155. Gunshop: If you wish to rob the shop, roll a D4: 1-E155; 2-E044; 3-E056; 4-E090. If you wish to browse; E114',
                    ],
                    [
                        '5',
                        'Pharmacy: The doctor offers to tend to your (and any partners) wounds. He will heal one Wound Level for $2.00 per character. He will heal two Wound Levels for $3.00 per character. He will heal three Wound Levels for $4.00 per character. You can choose any of the above options as many times as you can afford. Whether you heal or not; E118',
                    ],
                    ['6', 'Choose any Roll Result.'],
                ],
            },
        ],
    },
    {
        tag: 'r106',
        title: 'Saloon',
        desc: ['"I could use a drink."', 'Roll a D10:'],
        tables: [
            {
                cols: ['1D10', 'Outcome'],
                rows: [
                    ['1', 'E128'],
                    ['2', 'E148'],
                    ['3', 'E122'],
                    ['4', 'E171'],
                    ['5', 'E146'],
                    ['6', 'E187'],
                    ['7', 'E111'],
                    ['8', 'E028'],
                    ['9', 'E012'],
                    ['10', 'E220'],
                ],
            },
        ],
    },
    {
        tag: 'r108',
        title: 'Train Station',
        desc: [
            'Train Station is only available if the town is located on a hex with a train track.',
            '"All aboard!"',
            'You may ride the train for $5 (if you don’t spend the $5; choose a different available Town action).',
            'If you pay the $5, roll a D10:',
        ],
        tables: [
            {
                cols: ['1D10', 'Outcome'],
                rows: [
                    [
                        '1',
                        'If your Bounty Suit is ♠️ you are spotted before you get a chance to board; E155. Train has a serious break down. To determine where it breaks down, choose a direction (north or south) and then roll a D6 to determine how many hexes away from where you boarded. Exit train by placing your token on that hex, then roll on the Event Table (Table A).',
                    ],
                    [
                        '2',
                        'The train is over crowded and burdened with mechanical issues. Unforeseen consequences - remove a Point of Interest (of your choice) from your Tracking Sheet. Exit train by placing your token on any other hex with a railroad, then roll for a random Event (Table A).',
                    ],
                    [
                        '3',
                        'Three Brigands hijack and rob all the passengers. You can either give them all your money or fight them in combat. If you give them all your money, they then leave and you get off at your destination - Exit train by placing your token on any other hex with a railroad, then roll for a random Event (Table A). If you decide to fight them; E135',
                    ],
                    [
                        '4-6',
                        '+1 Karma. Uneventful ride. Exit train by placing your token on any other hex with a railroad, then roll for a random Event (Table A).',
                    ],
                    [
                        '7',
                        'You meet a travelling salesman. He will sell you his last “miracle tonic” for $2. If you buy the tonic, record it under your Equipment. it can be used as a one time Healing action (R101c). Finally, Exit train by placing your token on any other hex with a railroad, then roll for a random Event (Table A).',
                    ],
                    [
                        '8',
                        'The ride rocks you into a deep slumber. +1 Karma. You (and any partners) heal one Wound Level. Exit train by placing your token on any other hex with a railroad; E234',
                    ],
                    [
                        '9',
                        'Uneventful ride. Exit train by placing your token on any other hex with a railroad. There is a stagecoach here offering rides to any hex for $3. If you pay the $3; E241. If you don’t pay the $3, roll for a random Event (Table A).',
                    ],
                    [
                        '10',
                        'You meet a writer who pays to hear of your latest exploits: If your Bounty Suit is X he pays you $1. If your Bounty Suit is ♣️ he pays you $5. If your Bounty Suit is ♦️ he pays you $10. If your Bounty Suit is ♥️ he pays you $15. If your Bounty Suit is ♠️ he pays you $30. Finally, exit train by placing your token on any other hex with a railroad, then roll for a random Event (Table A).',
                    ],
                ],
            },
        ],
    },
    {
        tag: 'r109',
        title: 'Flee',
        desc: [
            'At the end of a Combat Round (after everyone has attacked), you can attempt to Flee, unless the Event states otherwise.',
            '"I’m gettin outta here!"',
            'You are attempting to escape combat.',
            'Roll a D6:',
        ],
        tables: [
            {
                cols: ['1d6', 'Outcome'],
                rows: [
                    ['1', 'R133'],
                    ['2', 'R115'],
                    ['3', 'R120'],
                    ['4', 'R119'],
                    ['5', 'R125'],
                    ['6', 'R136'],
                ],
            },
        ],
    },
    {
        tag: 'r110',
        title: 'Combat',
        desc: [
            'Combat takes place in Rounds. A full round of combat is when every character has attacked.You, partners and opponents all use the same Combat Table (Table B) for their attack.',
            'You can use any of your weapons during combat unless stated otherwise in the Event.',
            'There will be a Rule to refer to in the Event to determine who attacks first, you or your opponent(s), this is called Initiative.',
            'The formula for all attacks, regardless of the weapon, is as follows:',
            'Attackers current Finesse skill - Opponents current Finesse skill = Attackers Roll Adjustment.',
            'After the roll adjustment is determined, roll a D10 under the attackers weapon suit (♣️ ,♦️,♥️,or ♠️), on the Combat Table (Table B), adding or subtracting the attackers roll adjustment, to determine any Wound Level. ',
            'I.e. The Drifter is determined to attack first (wins Initiative). The Drifter has a Finesse of 4 and is using a Pistol♦️. The opponent has a Finesse of 2. Therefore, the Drifters roll adjustment will be +2 (4 - 2 = 2), under the ♦️ column on the Combat Table (Table B). If the Bandit survives the attack, it is now his attack. You would follow the same formula to determine the bandits roll adjustment for his roll, on the Combat Table (Table B), against the Drifter.',
            'All characters Finesse score drops depending on Wound Level. -1 for Medium Wound, -2 for Heavy Wound, -3 for Debilitating Wound (see Tracking Sheet and Combat Sheet).',
            'A characters base Finesse score doesn’t fall below zero regardless of Wound Level but they would have a negative to their Finesse Roll Adjustment on their attack, if their Finesse is lower than their opponents.',
            'I.e. A bandit attacks the Drifter. The bandits Finesse skill is currently 2 and the Drifters Finesse skill is currently 4. The bandits Roll Adjustment would be -2 (2 - 4 = -2) on the Combat table (Table B).',
            'All weapons cause Wound Levels and they compound on themselves. So if a character already has a Light Wound and then receives a Heavy Wound, they would now have a Debilitating Wound. If a character already has a Medium Wound and takes a Light Wound, they would now have a Heavy Wound etc. If you reach the unfortunate Wound Level of Dead, the game immediately ends and you would have to start again.',
            'As soon as you defeat all the opponents, you immediately roll on their Loot Suit (Table D1) to determine any money or items you may find, then return to the Event to complete any further instructions.',
            'If you have a partner(s), they always attack right after The Drifters attack.',
            "If in combat against multiple opponents, you may attack any of them in any order you wish. Multiple opponents attack you in the order they are presented in the Event and it is up to you if they are attacking you or a partner (before rolling the opponent's attack).",
        ],
        tables: [
            {
                cols: ['Ref', 'Outcome'],
                rows: [
                    ['r110a', 'Combat - Initiative'],
                    ['r110b', 'Combat - Initiative'],
                    ['r110c', 'Combat - Initiative'],
                    ['r110d', 'Combat - Initiative'],
                    ['r110e', 'Combat - Initiative'],
                    ['r110f', 'Combat - Initiative'],
                    ['r110g', 'Combat - Initiative'],
                    ['r110h', 'Combat - Initiative'],
                ],
            },
        ],
    },
    {
        tag: 'r110a',
        title: 'Combat - Initiative',
        desc: [
            'Attempt a Hunch Skill Test (Table C/♣️/Hunch-1)R111.',
            'If you PASS, you attack first.',
            'If you FAIL, opponents attack first.',
        ],
    },
    {
        tag: 'r110b',
        title: 'Combat - Initiative',
        desc: [
            'Attempt a Hunch Skill Test (Table C/♦️/Hunch-1)R111.',
            'If you PASS, you attack first.',
            'If you FAIL, opponents attack first.',
        ],
    },
    {
        tag: 'r110c',
        title: 'Combat - Initiative',
        desc: [
            'Attempt a Hunch Skill Test (Table C/♥️/Hunch-1)R111.',
            'If you PASS, you attack first.',
            'If you FAIL, opponents attack first.',
        ],
    },
    {
        tag: 'r110d',
        title: 'Combat - Initiative',
        desc: [
            'Attempt a Hunch Skill Test (Table C/♠️/Hunch-1)R111.',
            'If you PASS, you attack first.',
            'If you FAIL, opponents attack first.',
        ],
    },
    {
        tag: 'r110e',
        title: 'Combat - Initiative',
        desc: [
            'Attempt a Hunch Skill Test (Table C/♣️/Hunch-2)R111.',
            'If you PASS, you attack first.',
            'If you FAIL, opponents attack first.',
        ],
    },
    {
        tag: 'r110f',
        title: 'Combat - Initiative',
        desc: [
            'Attempt a Hunch Skill Test (Table C/♦️/Hunch-2)R111.',
            'If you PASS, you attack first.',
            'If you FAIL, opponents attack first.',
        ],
    },
    {
        tag: 'r110g',
        title: 'Combat - Initiative',
        desc: [
            'Attempt a Hunch Skill Test (Table C/♥️/Hunch-2)R111.',
            'If you PASS, you attack first.',
            'If you FAIL, opponents attack first.',
        ],
    },
    {
        tag: 'r110h',
        title: 'Combat - Initiative',
        desc: [
            'Attempt a Hunch Skill Test (Table C/♠️/Hunch-2)R111.',
            'If you PASS, you attack first.',
            'If you FAIL, opponents attack first.',
        ],
    },
    {
        tag: 'r111',
        title: 'Skill Tests',
        desc: [
            'There may be times when you will be asked to attempt a skill test. Either the Event will provide a table to roll on, or you would be directed to one of the Tables on the Table Sheet. the Event paragraph will always specify which Table, Difficulty Suit and skill to use (Finesse, Hunch or Karma). If the skill test is not on the Table Sheet, the Event will walk you through the process.',
            'All Skill checks will direct you to one of the Tables on the Table Sheet and will be presented in brackets, as follows:',
        ],
        note: [
            'i.e. The Event Book paragraph instructs you to attempt a Finesse skill test (Table C/♥️/Finesse-1) For this example, you would use Table C (located on your Table Sheet), rolling under the ♥️ column, using your Finesse Skill but with a -1. Your current Finesse score is 4, but you are told to negate 1, so therefore you would get a +3 (4 - 1 = 3). You roll the D10 and get a 5, then add 3 for a total of 8. A result of PASS, we are successful at making this Finesse skill test!',
            'Opposing Skill Test: When a Finesse Opposing skill test is required, you take your Finesse score and subtract your opponents Finesse score, to determine the roll adjustment on the assigned Table. If there are multiple opponents, choose the opponent with the highest Finesse.',
        ],
        tables: [
            {
                cols: ['Ref', 'Outcome'],
                rows: [
                    [
                        'Table',
                        'Indicates which table to use from the Table Sheet.',
                    ],
                    [
                        'DifficultySuit',
                        'Indicates which column you will be rolling under on the assigned Table.',
                    ],
                    [
                        'Skill',
                        'Indicates which Skill to use and any plus or minuses to the roll.',
                    ],
                ],
            },
        ],
    },
    {
        tag: 'r112',
        title: 'Partner',
        desc: [
            '"Shakes hands and leaves peacefully."',
            'Then roll on the Event Table (Table A).',
        ],
    },
    {
        tag: 'r113',
        title: 'Partner',
        desc: [
            'Demands payment of $5.00 (for each partner that is disbanding) for their troubles.',
            'If you pay, you part ways, then roll Event Table (Table A).',
            'If you refuse to pay, attempt a Hunch Skill test (Table C/♥️/Hunch-1) R111.',
        ],
        tables: [
            {
                cols: ['Result', 'Outcome'],
                rows: [
                    [
                        'PASS',
                        'They apologize for overreacting and part ways. Roll on Event Table (Table A).',
                    ],
                    [
                        'FAIL',
                        'They attack you R110. Initiative R110b. If you defeat them, roll on Event Table (Table A).',
                    ],
                ],
            },
        ],
    },
    {
        tag: 'r114',
        title: 'Partner',
        desc: [
            '+1 Karma. Wishes you luck and leaves.',
            'Roll on the Event Table (Table A).',
        ],
    },
    {
        tag: 'r115',
        title: 'Escape',
        desc: [
            '"Ain’t no gettin’ out of this!"',
            'You don’t get far and are unable to flee.',
            'Combat continues. Opponent(s) get first attack.',
        ],
    },

    {
        tag: 'r119',
        title: 'Escape',
        desc: [
            '"I think I’m clear!"',
            'You have successfully escaped to a random adjacent hex.',
            'Roll a D6 to determine which adjacent hex:',
            '1-N; 2-NE; 3-SE; 4-S; 5-SW; 6-NW, move your token to that hex.',
            'Roll on the Event Table (Table A).',
        ],
    },
    {
        tag: 'r120',
        title: 'Escape',
        desc: [
            '"Hard to shake em!"',
            'Attempt an *Opposing Finesse skill test (Table C/♥️)R111.',
        ],
        note: [
            '*If more than one opponent, choose the opponent with highest Finesse',
        ],
        tables: [
            {
                cols: ['Result', 'Outcome'],
                rows: [
                    [
                        'PASS',
                        'You have escaped. Bounty Suit up one. Move to an adjacent hex of your choice and then roll on the Event Table (Table A).',
                    ],
                    [
                        'FAIL',
                        '+1 Karma. You are unable to escape and combat continues (you get first attack).',
                    ],
                ],
            },
        ],
    },
    {
        tag: 'r125',
        title: 'Escape',
        desc: [
            '"I think they\'re gone.."',
            'You escaped.',
            'Move to an adjacent hex of your choice then roll on the Event Table (Table A).',
        ],
    },
    {
        tag: 'r130',
        title: 'Military Presence',
        desc: [
            '"I’d be in over my head.."',
            'A large regiment of soldiers are passing through and you figure it is best not to stay.',
            'Move to any adjacent Hex and then roll on the Event Table (Table A).',
        ],
    },
    {
        tag: 'r131',
        title: 'Partner(s)',
        desc: [
            'You can have a maximum of three partners. If you find another partner and already have three, you can replace a partner or refuse the partnership.',
            'A partner follows the same rules for Wound Levels as the Drifter (and opponents), their Finesse drops depending on the Wound Level.',
            'In combat, partners always attack right after your attack, unless Event states otherwise.',
            'In combat, a partner uses their own Finesse score when attacking an opponent.',
            'In combat, you determine if the opponent is attacking the Drifter or a partner before rolling the attack.',
            'If a partner dies, remove them from your Tracking Sheet.',
            'A partners Loot Suit is only available if you end up in combat with them and defeat them.',
            'Partners won’t carry anything for you.',
            'You cannot exchange weapons with a partner or give them a different weapon.',
            'You can disband with a partner by taking the Part Ways action (R101d).',
            'Partners are not provided names, so feel free to give a name to any partner that joins you!',
        ],
    },
    {
        tag: 'r132',
        title: 'Sheriff’s Office',
        desc: [
            'You visit the Sheriff’s office to check for available Bounties; E087',
        ],
    },
    {
        tag: 'r133',
        title: 'Escape',
        desc: [
            '"ahh dang it!!"',
            '+1 Karma. You don’t escape and have taken a LW (Light Wound) in your haste.',
            'Combat resumes and opponent(s) get first attack.',
        ],
    },
    {
        tag: 'r136',
        title: 'Escape',
        desc: [
            '"They’re gone!',
            'You have successfully escaped.',
            'Move to an adjacent hex of your choice, then roll on Event Table (Table A)',
        ],
    },
    {
        tag: 'r201a',
        title: 'Table A',
        desc: ['Event Table - Bounty Suit', 'Roll a D100:'],
        tables: [
            {
                cols: ['🎲', '❌', '♣️️', '♦️️', '♥️️', '♠️️'],
                rows: [
                    ['1-2', 'E235', 'E134', 'E134', 'E134', 'E134'],
                    ['3-4', 'E004', 'E130', 'E243', 'E222', 'E068'],
                    ['5-6', 'E098', 'E216', 'E068', 'E134', 'E134'],
                    ['7-8', 'E130', 'E243', 'E179', 'E229', 'E146'],
                    ['9-10', 'E172', 'E093', 'E243', 'E177', 'E107'],
                    ['11-12', 'E177', 'E007', 'E093', 'E179', 'E004'],
                    ['13-14', 'E068', 'E082', 'E169', 'E243', 'E134'],
                    ['15-16', 'E216', 'E229', 'E098', 'E093', 'E163'],
                    ['17-18', 'E086', 'E222', 'E177', 'E007', 'E134'],
                    ['19-20', 'E113', 'E004', 'E216', 'E172', 'E082'],
                    ['21-22', 'E172', 'E234', 'E129', 'E113', 'E134'],
                    ['23-24', 'E038', 'E172', 'E229', 'E093', 'E103'],
                    ['25-26', 'E130', 'E222', 'E225', 'E153', 'E134'],
                    ['27-28', 'E243', 'E036', 'E086', 'E004', 'E129'],
                    ['29-30', 'E169', 'E129', 'E222', 'E172', 'E098'],
                    ['31-32', 'E177', 'E028', 'E107', 'E045', 'E082'],
                    ['33-34', 'E229', 'E177', 'E130', 'E065', 'E060'],
                    ['35-36', 'E065', 'E098', 'E038', 'E230', 'E243'],
                    ['37-38', 'E086', 'E068', 'E153', 'E169', 'E239'],
                    ['39-40', 'E153', 'E172', 'E004', 'E082', 'E091'],
                    ['41-42', 'E036', 'E086', 'E091', 'E146', 'E035'],
                    ['43-44', 'E045', 'E022', 'E172', 'E068', 'E086'],
                    ['45-46', 'E154', 'E169', 'E007', 'E149', 'E134'],
                    ['47-48', 'E068', 'E098', 'E082', 'E146', 'E038'],
                    ['49-50', 'E022', 'E149', 'E036', 'E086', 'E042'],
                    ['51-52', 'E091', 'E035', 'E093', 'E243', 'E045'],
                    ['53-54', 'E055', 'E179', 'E055', 'E022', 'E055'],
                    ['55-56', 'E093', 'E130', 'E060', 'E042', 'E164'],
                    ['57-58', 'E101', 'E229', 'E028', 'E177', 'E082'],
                    ['59-60', 'E107', 'E038', 'E065', 'E107', 'E022'],
                    ['61-62', 'E172', 'E216', 'E146', 'E229', 'E103'],
                    ['63-64', 'E028', 'E113', 'E035', 'E098', 'E146'],
                    ['65-66', 'E146', 'E045', 'E095', 'E035', 'E169'],
                    ['67-68', 'E060', 'E086', 'E172', 'E077', 'E068'],
                    ['69-70', 'E038', 'E153', 'E149', 'E129', 'E065'],
                    ['71-72', 'E069', 'E021', 'E164', 'E069', 'E179'],
                    ['73-74', 'E129', 'E055', 'E042', 'E239', 'E093'],
                    ['75-76', 'E022', 'E225', 'E098', 'E101', 'E042'],
                    ['77-78', 'E093', 'E177', 'E086', 'E036', 'E130'],
                    ['79-80', 'E035', 'E172', 'E045', 'E086', 'E069'],
                    ['81-82', 'E149', 'E065', 'E113', 'E103', 'E022'],
                    ['83-84', 'E042', 'E091', 'E130', 'E095', 'E077'],
                    ['85-86', 'E129', 'E107', 'E021', 'E068', 'E113'],
                    ['87-88', 'E055', 'E154', 'E086', 'E038', 'E149'],
                    ['89-90', 'E045', 'E093', 'E243', 'E091', 'E177'],
                    ['91-92', 'E098', 'E060', 'E177', 'E055', 'E028'],
                    ['93-94', 'E021', 'E146', 'E239', 'E243', 'E172'],
                    ['95', 'E054', 'E235', 'E101', 'E223', 'E077'],
                    ['96', 'E082', 'E103', 'E068', 'E021', 'E103'],
                    ['97', 'E095', 'E042', 'E077', 'E154', 'E098'],
                    ['98', 'E177', 'E069', 'E103', 'E054', 'E101'],
                    ['99', 'E091', 'E101', 'E069', 'E216', 'E021'],
                    ['100', 'E216', 'E129', 'E230', 'E225', 'E217'],
                ],
            },
        ],
    },
    {
        tag: 'r201b',
        title: 'Table B',
        desc: [
            'Combat Table – Weapon Suit',
            '"+" Fast! – attacker gets another attack',
            '"-" Countered! – attacker takes a LW',
        ],
        tables: [
            {
                cols: ['1d10', '❌', '♣️️', '♦️️', '♥️️', '♠️️'],
                rows: [
                    ['<2', 'Miss-', 'Miss-', 'Miss-', 'Miss-', 'Miss-'],
                    ['2', 'Miss', 'Miss', 'Miss', 'Miss', 'LW'],
                    ['3-4', 'Miss', 'Miss', 'Miss', 'LW', 'MW'],
                    ['5', 'Miss', 'LW', 'LW', 'LW', 'MW'],
                    ['6-7', 'LW', 'LW', 'LW', 'MW', 'HW'],
                    ['8-9', 'LW', 'MW', 'MW', 'HW', 'DW'],
                    ['10', 'MW', 'MW', 'HW', 'DW', 'D'],
                    ['11+', 'MW+', 'HW+', 'D+', 'D+', 'D+'],
                ],
            },
        ],
    },
    {
        tag: 'r201c',
        title: 'Table C',
        desc: [
            'Skill Test Table – Difficulty Suit',
            '"*" Immediately gain 1 Karma Point (Max of 4)',
        ],
        tables: [
            {
                cols: ['1d10', '♣️️', '♦️️', '♥️️', '♠️️'],
                rows: [
                    ['<2', 'Fail*', 'Fail*', 'Fail*', 'Fail*'],
                    ['2', 'Fail', 'Fail', 'Fail', 'Fail'],
                    ['3-4', 'Pass', 'Fail', 'Fail', 'Fail'],
                    ['5', 'Pass', 'Pass', 'Fail', 'Fail'],
                    ['6-7', 'Pass', 'Pass', 'Pass', 'Fail'],
                    ['8-9', 'Pass', 'Pass', 'Pass', 'Pass'],
                    ['10+', 'Pass', 'Pass', 'Pass', 'Pass'],
                ],
            },
        ],
    },
    {
        tag: 'r201d',
        title: 'Table D',
        desc: [
            'Loot Table – Loot Suit',
            '"*" There\'s more! Roll again on the same suit.',
        ],
        tables: [
            {
                cols: ['1d10', '❌', '♣️️', '♦️️', '♥️️', '♠️️'],
                rows: [
                    ['1', '$0', '$0', '$0', '$1', '$2'],
                    ['2', '$0', '$0', '$2', '$3', '$4'],
                    ['3-4', '$0', '$1', '$8*', '$12*', '$15'],
                    ['5-6', '$1', '$4*', '$12', '$15', '$20'],
                    ['7-8', '$2*', '$8', '$15', '$20', '$30'],
                    ['9', '$4', 'Q', 'Q', 'K', '$45'],
                    ['10', 'Q', 'K', 'A', 'A', '$150*'],
                ],
            },
            {
                cols: ['1d6', 'Q', 'K', 'A'],
                rows: [
                    ['1', 'E023', '$8', '$12'],
                    ['2-4', 'E009', '$15', '$20'],
                    ['5', 'E010', 'E019', 'E019'],
                    ['6', 'E040', 'E040', 'E040'],
                ],
            },
        ],
    },
]

export default ruleData
