import DominationSec from './SecondaryRunes/DominationSec'
import SorcerySec from './SecondaryRunes/SorcerySec'
import ResolveSec from './SecondaryRunes/ResolveSec'
import InspirationSec from './SecondaryRunes/InspirationSec'
import RuneShard from "./SecondaryRunes/RuneShard"
import DominationIcon from "./runeIcon/Domination_runes/Domination_icon.png"
import InspirationIcon from "./runeIcon/Inspiration_runes/Inspiration_icon.png"
import ResolveIcon from "./runeIcon/Resolve_runes/Resolve_icon.png"
import SorceryIcon from "./runeIcon/Sorcery_runes/Sorcery_icon.png"
import PressTheAttack from "./runeIcon/Precision_runes/Press_the_Attack_rune.png"
import LethalTempo from "./runeIcon/Precision_runes/Lethal_Tempo_rune.png"
import FleetFootwork from "./runeIcon/Precision_runes/Fleet_Footwork_rune.png"
import Conqueror from "./runeIcon/Precision_runes/Conqueror_rune.png"
import Overheal from "./runeIcon/Precision_runes/Overheal_rune.png"
import Triumph from "./runeIcon/Precision_runes/Triumph_rune.png"
import PresenceOfMind from "./runeIcon/Precision_runes/Presence_of_Mind_rune.png"
import Alacrity from "./runeIcon/Precision_runes/Legend-_Alacrity_rune.png"
import Tenacity from "./runeIcon/Precision_runes/Legend-_Tenacity_rune.png"
import Bloodline from "./runeIcon/Precision_runes/Legend-_Bloodline_rune.png"
import CoupDeGrace from "./runeIcon/Precision_runes/Coup_de_Grace_rune.png"
import CutDown from "./runeIcon/Precision_runes/Cut_Down_rune.png"
import LastStand from "./runeIcon/Precision_runes/Last_Stand_rune.png"
import "./MainRuneStyle.css"

function Precision(props) {

    let rune = props.rune

    return (
        <div className='main-container'>
            <div>
                <div className='main-rune' >
                    <button onClick={(event) => props.newStyle(event, rune.id, 1)} style={{backgroundColor: rune.mainRune === 1 ? "#d1d444" : "transparent"}}><img src={PressTheAttack} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 2)} style={{backgroundColor: rune.mainRune === 2 ? "#d1d444" : "transparent"}}><img src={LethalTempo} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 3)} style={{backgroundColor: rune.mainRune === 3 ? "#d1d444" : "transparent"}}><img src={FleetFootwork} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 4)} style={{backgroundColor: rune.mainRune === 4 ? "#d1d444" : "transparent"}}><img src={Conqueror} /></button>
                </div>
                <div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune1 === 1 ? "#d1d444" : "transparent"}} ><img src={Overheal} /></button>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune1 === 2 ? "#d1d444" : "transparent"}} ><img src={Triumph} /></button>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune1 === 3 ? "#d1d444" : "transparent"}} ><img src={PresenceOfMind} /></button>
                    </div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune2 === 1 ? "#d1d444" : "transparent"}}><img src={Alacrity} /></button>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune2 === 2 ? "#d1d444" : "transparent"}}><img src={Tenacity} /></button>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune2 === 3 ? "#d1d444" : "transparent"}}><img src={Bloodline} /></button>
                    </div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune3 === 1 ? "#d1d444" : "transparent"}}><img src={CoupDeGrace} /></button>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune3 === 2 ? "#d1d444" : "transparent"}}><img src={CutDown} /></button>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune3 === 3 ? "#d1d444" : "transparent"}}><img src={LastStand} /></button>
                    </div>   
                </div>
            </div>
            <div>    
                <div className='sec-runes' >
                    <div className='sec-buttons'>
                        <button onClick={(event) => props.changePage(event, rune.id, 1)} style={{backgroundColor: rune.secRune === 1 ? "#ba3a3a" : "transparent"}} ><img src={DominationIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 2)} style={{backgroundColor: rune.secRune === 2 ? "#6133a6" : "transparent"}} ><img src={SorceryIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 3)} style={{backgroundColor: rune.secRune === 3 ? "#52ba4a" : "transparent"}} ><img src={ResolveIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 4)} style={{backgroundColor: rune.secRune === 4 ? "#4aa7ba" : "transparent"}} ><img src={InspirationIcon} /></button>
                    </div>
                    {rune.secRune === 1 ? <DominationSec
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

export default Precision