import CheapShot from "./miniIcons/DominationMini/Cheap_Shot_rune.png"
import TasteOfBlood from "./miniIcons/DominationMini/Taste_of_Blood_rune.png"
import SuddenImpact from "./miniIcons/DominationMini/Sudden_Impact_rune.png"
import ZombieWard from "./miniIcons/DominationMini/Zombie_Ward_rune.png"
import GhostPoro from "./miniIcons/DominationMini/Ghost_Poro_rune.png"
import EyeballCollection from "./miniIcons/DominationMini/Eyeball_Collection_rune.png"
import TreasureHunter from "./miniIcons/DominationMini/Treasure_Hunter_rune.png"
import IngeniousHunter from "./miniIcons/DominationMini/Ingenious_Hunter_rune.png"
import RelentlessHunter from "./miniIcons/DominationMini/Relentless_Hunter_rune.png"
import UltimateHunter from "./miniIcons/DominationMini/Ultimate_Hunter_rune.png"
import "./SecondaryRuneStyle.css"

function DominationSec(props) {

    let rune = props.rune

    return (
        <div className='mini-rune-container'>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle1(event, rune.id, 1)} style={{backgroundColor: rune.miniRune1 === 1 ? "#ba3a3a" : "transparent"}}><img src={CheapShot} /></button>
                <button onClick={(event) => props.newStyle1(event, rune.id, 2)} style={{backgroundColor: rune.miniRune1 === 2 ? "#ba3a3a" : "transparent"}}><img src={TasteOfBlood} /></button>
                <button onClick={(event) => props.newStyle1(event, rune.id, 3)} style={{backgroundColor: rune.miniRune1 === 3 ? "#ba3a3a" : "transparent"}}><img src={SuddenImpact} /></button>    
            </div>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle2(event, rune.id, 1)} style={{backgroundColor: rune.miniRune2 === 1 ? "#ba3a3a" : "transparent"}}><img src={ZombieWard} /></button>
                <button onClick={(event) => props.newStyle2(event, rune.id, 2)} style={{backgroundColor: rune.miniRune2 === 2 ? "#ba3a3a" : "transparent"}}><img src={GhostPoro} /></button>
                <button onClick={(event) => props.newStyle2(event, rune.id, 3)} style={{backgroundColor: rune.miniRune2 === 3 ? "#ba3a3a" : "transparent"}}><img src={EyeballCollection} /></button>
            </div>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle3(event, rune.id, 1)} style={{backgroundColor: rune.miniRune3 === 1 ? "#ba3a3a" : "transparent"}}><img src={TreasureHunter} /></button>
                <button onClick={(event) => props.newStyle3(event, rune.id, 2)} style={{backgroundColor: rune.miniRune3 === 2 ? "#ba3a3a" : "transparent"}}><img src={IngeniousHunter} /></button>
                <button onClick={(event) => props.newStyle3(event, rune.id, 3)} style={{backgroundColor: rune.miniRune3 === 3 ? "#ba3a3a" : "transparent"}}><img src={RelentlessHunter} /></button>
                <button onClick={(event) => props.newStyle3(event, rune.id, 4)} style={{backgroundColor: rune.miniRune3 === 4 ? "#ba3a3a" : "transparent"}}><img src={UltimateHunter} /></button>
            </div>    
        </div>
        )
}

export default DominationSec 