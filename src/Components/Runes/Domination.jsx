import InspirationSec from './SecondaryRunes/InspirationSec'
import PrecisionSec from './SecondaryRunes/PrecisionSec'
import ResolveSec from './SecondaryRunes/ResolveSec'
import SorcerySec from './SecondaryRunes/SorcerySec'
import RuneShard from "./SecondaryRunes/RuneShard"
import InspirationIcon from "./runeIcon/Inspiration_runes/Inspiration_icon.png"
import PrecisionIcon from "./runeIcon/Precision_runes/Precision_icon.png"
import ResolveIcon from "./runeIcon/Resolve_runes/Resolve_icon.png"
import SorceryIcon from "./runeIcon/Sorcery_runes/Sorcery_icon.png"
import Electrocute from "./runeIcon/Domination_runes/Electrocute_rune.png"
import Predator from "./runeIcon/Domination_runes/Predator_rune.png"
import DarkHarvest from "./runeIcon/Domination_runes/Dark_Harvest_rune.png"
import HailOfBlades from "./runeIcon/Domination_runes/Hail_of_Blades_rune.png"
import CheapShot from "./runeIcon/Domination_runes/Cheap_Shot_rune.png"
import TasteOfBlood from "./runeIcon/Domination_runes/Taste_of_Blood_rune.png"
import SuddenImpact from "./runeIcon/Domination_runes/Sudden_Impact_rune.png"
import ZombieWard from "./runeIcon/Domination_runes/Zombie_Ward_rune.png"
import GhostPoro from "./runeIcon/Domination_runes/Ghost_Poro_rune.png"
import EyeballCollection from "./runeIcon/Domination_runes/Eyeball_Collection_rune.png"
import TreasureHunter from "./runeIcon/Domination_runes/Treasure_Hunter_rune.png"
import IngeniousHunter from "./runeIcon/Domination_runes/Ingenious_Hunter_rune.png"
import RelentlessHunter from "./runeIcon/Domination_runes/Relentless_Hunter_rune.png"
import UltimateHunter from "./runeIcon/Domination_runes/Ultimate_Hunter_rune.png"
import "./MainRuneStyle.css"

function Domination(props) {

    let rune = props.rune

    return (
        <div className='main-container'>
            <div>
                <div className='main-rune'>
                    <button onClick={(event) => props.newStyle(event, rune.id, 1)} style={{backgroundColor: rune.mainRune === 1 ? "#ba3a3a" : "transparent"}} ><img src={Electrocute} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 2)} style={{backgroundColor: rune.mainRune === 2 ? "#ba3a3a" : "transparent"}} ><img src={Predator} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 3)} style={{backgroundColor: rune.mainRune === 3 ? "#ba3a3a" : "transparent"}} ><img src={DarkHarvest} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 4)} style={{backgroundColor: rune.mainRune === 4 ? "#ba3a3a" : "transparent"}} ><img src={HailOfBlades} /></button>
                </div>            
                <div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune1 === 1 ? "#ba3a3a" : "transparent"}}><img src={CheapShot} /></button>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune1 === 2 ? "#ba3a3a" : "transparent"}}><img src={TasteOfBlood} /></button>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune1 === 3 ? "#ba3a3a" : "transparent"}}><img src={SuddenImpact} /></button>    
                    </div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune2 === 1 ? "#ba3a3a" : "transparent"}}><img src={ZombieWard} /></button>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune2 === 2 ? "#ba3a3a" : "transparent"}}><img src={GhostPoro} /></button>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune2 === 3 ? "#ba3a3a" : "transparent"}}><img src={EyeballCollection} /></button>
                    </div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune3 === 1 ? "#ba3a3a" : "transparent"}}><img src={TreasureHunter} /></button>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune3 === 2 ? "#ba3a3a" : "transparent"}}><img src={IngeniousHunter} /></button>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune3 === 3 ? "#ba3a3a" : "transparent"}}><img src={RelentlessHunter} /></button>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 4)} style={{backgroundColor: rune.miniMainRune3 === 4 ? "#ba3a3a" : "transparent"}}><img src={UltimateHunter} /></button>
                    </div>    
                </div>
            </div>
            <div>
                <div className='sec-runes'>
                    <div className='sec-buttons'>
                        <button onClick={(event) => props.changePage(event, rune.id, 1)} style={{backgroundColor: rune.secRune === 1 ? "#d1d444" : "transparent"}} ><img src={PrecisionIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 2)} style={{backgroundColor: rune.secRune === 2 ? "#6133a6" : "transparent"}} ><img src={SorceryIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 3)} style={{backgroundColor: rune.secRune === 3 ? "#52ba4a" : "transparent"}} ><img src={ResolveIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 4)} style={{backgroundColor: rune.secRune === 4 ? "#4aa7ba" : "transparent"}} ><img src={InspirationIcon} /></button>
                    </div>
                    {rune.secRune === 1 ? <PrecisionSec
                        newStyle1={props.newStyle1}
                        newStyle2={props.newStyle2}
                        newStyle3={props.newStyle3}
                        rune={rune}
                    /> : 
                        rune.secRune === 2 ? <SorcerySec
                            newStyle1={props.newStyle1}
                            newStyle2={props.newStyle2}
                            newStyle3={props.newStyle3}
                            rune={rune}
                        /> :
                        rune.secRune === 3 ? <ResolveSec
                            newStyle1={props.newStyle1}
                            newStyle2={props.newStyle2}
                            newStyle3={props.newStyle3}
                            rune={rune}
                        /> :
                        rune.secRune === 4 ? <InspirationSec
                            newStyle1={props.newStyle1}
                            newStyle2={props.newStyle2}
                            newStyle3={props.newStyle3}
                            rune={rune}
                        /> :
                            <p className="text">Seleziona runa secondaria</p>}
                </div>
                <div className='shard-container'>
                    <RuneShard
                        rune={rune}
                        newShardStyle1={props.newShardStyle1}
                        newShardStyle2={props.newShardStyle2}
                        newShardStyle3={props.newShardStyle3}
                    />
                </div>
            </div>
        </div> 
    )
}

export default Domination