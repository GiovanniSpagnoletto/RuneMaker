import PrecisionSec from './SecondaryRunes/PrecisionSec'
import DominationSec from './SecondaryRunes/DominationSec'
import ResolveSec from './SecondaryRunes/ResolveSec'
import InspirationSec from './SecondaryRunes/InspirationSec'
import RuneShard from "./SecondaryRunes/RuneShard"
import DominationIcon from "./runeIcon/Domination_runes/Domination_icon.png"
import InspirationIcon from "./runeIcon/Inspiration_runes/Inspiration_icon.png"
import PrecisionIcon from "./runeIcon/Precision_runes/Precision_icon.png"
import ResolveIcon from "./runeIcon/Resolve_runes/Resolve_icon.png"
import SummonAery from "./runeIcon/Sorcery_runes/Summon_Aery_rune.png"
import ArcaneComet from "./runeIcon/Sorcery_runes/Arcane_Comet_rune.png"
import PhaseRush from "./runeIcon/Sorcery_runes/Phase_Rush_rune.png"
import NulliFyingOrb from "./runeIcon/Sorcery_runes/Nullifying_Orb_rune.png"
import ManaflowBand from "./runeIcon/Sorcery_runes/Manaflow_Band_rune.png"
import NimbusCloak from "./runeIcon/Sorcery_runes/Nimbus_Cloak_rune.png"
import Transcendence from "./runeIcon/Sorcery_runes/Transcendence_rune.png"
import Celerity from "./runeIcon/Sorcery_runes/Celerity_rune.png"
import AbsoluteFocus from "./runeIcon/Sorcery_runes/Absolute_Focus_rune.png"
import Scorch from "./runeIcon/Sorcery_runes/Scorch_rune.png"
import WaterWalking from "./runeIcon/Sorcery_runes/Waterwalking_rune.png"
import GatheringStorm from "./runeIcon/Sorcery_runes/Gathering_Storm_rune.png"
import "./MainRuneStyle.css"

function Sorcery(props) {
 
    let rune = props.rune

    return (
        <div className='main-container'>
            <div>
                <div className='main-rune' >
                    <button onClick={(event) => props.newStyle(event, rune.id, 1)} style={{backgroundColor: rune.mainRune === 1 ? "#6133a6" : "transparent"}}><img src={SummonAery} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 2)} style={{backgroundColor: rune.mainRune === 2 ? "#6133a6" : "transparent"}}><img src={ArcaneComet} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 3)} style={{backgroundColor: rune.mainRune === 3 ? "#6133a6" : "transparent"}}><img src={PhaseRush} /></button>
                </div>
                <div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune1 === 1 ? "#6133a6" : "transparent"}} ><img src={NulliFyingOrb} /></button>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune1 === 2 ? "#6133a6" : "transparent"}} ><img src={ManaflowBand} /></button>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune1 === 3 ? "#6133a6" : "transparent"}} ><img src={NimbusCloak} /></button>
                    </div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune2 === 1 ? "#6133a6" : "transparent"}} ><img src={Transcendence} /></button>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune2 === 2 ? "#6133a6" : "transparent"}} ><img src={Celerity} /></button>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune2 === 3 ? "#6133a6" : "transparent"}} ><img src={AbsoluteFocus} /></button>
                    </div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune3 === 1 ? "#6133a6" : "transparent"}} ><img src={Scorch} /></button>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune3 === 2 ? "#6133a6" : "transparent"}} ><img src={WaterWalking} /></button>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune3 === 3 ? "#6133a6" : "transparent"}} ><img src={GatheringStorm} /></button>
                    </div>   
                </div> 
            </div>
            <div>
                <div className='sec-runes'>
                    <div className='sec-buttons'>
                        <button onClick={(event) => props.changePage(event, rune.id, 1)} style={{backgroundColor: rune.secRune === 1 ? "#d1d444" : "transparent"}} ><img src={PrecisionIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 2)} style={{backgroundColor: rune.secRune === 2 ? "#ba3a3a" : "transparent"}} ><img src={DominationIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 3)} style={{backgroundColor: rune.secRune === 3 ? "#52ba4a" : "transparent"}} ><img src={ResolveIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 4)} style={{backgroundColor: rune.secRune === 4 ? "#4aa7ba" : "transparent"}} ><img src={InspirationIcon} /></button>
                    </div>
                    {rune.secRune === 1 ? <PrecisionSec
                        newStyle1={props.newStyle1}
                        newStyle2={props.newStyle2}
                        newStyle3={props.newStyle3}
                        rune={rune}
                    /> : 
                        rune.secRune === 2 ? <DominationSec
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
                <div className='shard-container' >
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

export default Sorcery