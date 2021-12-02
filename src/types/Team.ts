import Player from "./Player"
import Venue from "./Venue";

interface PlayersData {
    ['data']: Player[]
}

export default interface Team {
    id: number,
    players: PlayersData,
    venue: Venue,
    remark: string | void
}