import {LABELS} from "../Game/constants";

export const LEVELS = [
    {
        [LABELS.CHARACTER]: [{
            x: 550, y: 0,
        }],
        [LABELS.PLATFORM]: [
            {x: 460, y: 600, width: 700, height: 100,},
            {x: 1100, y: 900, width: 400, height: 100,}
        ],
        [LABELS.THORN]: [
            {x: 960, y: 150,},
            {x: 260, y: 150, angle: Math.PI / 2},
        ],
        [LABELS.CIRCLE]: [
            {x: 100, y: 330,},
            {x: 1100, y: 330, radius: 100},
        ],
        [LABELS.DYNAMIC_THORN]: [
            {pos1:{x: 1500, y: 300,}, pos2:{x: 1500, y: 800,}},
        ],
        [LABELS.DOOR]: [
            {x: 760, y: 330,},
        ],
    },
    {
        [LABELS.CHARACTER]: [{
            x: 550, y: 0,
        }],
        [LABELS.PLATFORM]: [
            {x: 460, y: 600, width: 700, height: 100,},
            {x: 1100, y: 900, width: 400, height: 100,}
        ],
        [LABELS.THORN]: [
            {x: 260, y: 150, angle: Math.PI / 2},
        ],
        [LABELS.CIRCLE]: [
            {x: 1100, y: 330, radius: 100},
        ],
        [LABELS.DYNAMIC_THORN]: [
            {pos1:{x: 1500, y: 300,}, pos2:{x: 1500, y: 800,}},
        ],
        [LABELS.DOOR]: [
            {x: 760, y: 330,},
        ],
    }
]