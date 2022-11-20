import Overheal from "./miniIcons/PrecisionMini/Overheal_rune.png"
import Triumph from "./miniIcons/PrecisionMini/Triumph_rune.png"
import PresenceOfMind from "./miniIcons/PrecisionMini/Presence_of_Mind_rune.png"
import Alacrity from "./miniIcons/PrecisionMini/Legend-_Alacrity_rune.png"
import Tenacity from "./miniIcons/PrecisionMini/Legend-_Tenacity_rune.png"
import Bloodline from "./miniIcons/PrecisionMini/Legend-_Bloodline_rune.png"
import CoupDeGrace from "./miniIcons/PrecisionMini/Coup_de_Grace_rune.png"
import CutDown from "./miniIcons/PrecisionMini/Cut_Down_rune.png"
import LastStand from "./miniIcons/PrecisionMini/Last_Stand_rune.png"
import "./SecondaryRuneStyle.css"

function PrecisionSec(props) {

    let rune = props.rune

    return (
        <div className='mini-rune-container'>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle1(event, rune.id, 1)} style={{backgroundColor: rune.miniRune1 === 1 ? "#d1d444" : "transparent"}}><img src={Overheal} /></button>
                <button onClick={(event) => props.newStyle1(event, rune.id, 2)} style={{backgroundColor: rune.miniRune1 === 2 ? "#d1d444" : "transparent"}}><img src={Triumph} /></button>
                <button onClick={(event) => props.newStyle1(event, rune.id, 3)} style={{backgroundColor: rune.miniRune1 === 3 ? "#d1d444" : "transparent"}}><img src={PresenceOfMind} /></button>
            </div>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle2(event, rune.id, 1)} style={{backgroundColor: rune.miniRune2 === 1 ? "#d1d444" : "transparent"}}><img src={Alacrity} /></button>
                <button onClick={(event) => props.newStyle2(event, rune.id, 2)} style={{backgroundColor: rune.miniRune2 === 2 ? "#d1d444" : "transparent"}}><img src={Tenacity} /></button>
                <button onClick={(event) => props.newStyle2(event, rune.id, 3)} style={{backgroundColor: rune.miniRune2 === 3 ? "#d1d444" : "transparent"}}><img src={Bloodline} /></button>
            </div>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle3(event, rune.id, 1)} style={{backgroundColor: rune.miniRune3 === 1 ? "#d1d444" : "transparent"}}><img src={CoupDeGrace} /></button>
                <button onClick={(event) => props.newStyle3(event, rune.id, 2)} style={{backgroundColor: rune.miniRune3 === 2 ? "#d1d444" : "transparent"}}><img src={CutDown} /></button>
                <button onClick={(event) => props.newStyle3(event, rune.id, 3)} style={{backgroundColor: rune.miniRune3 === 3 ? "#d1d444" : "transparent"}}><img src={LastStand} /></button>
            </div>   
        </div>
    )
}

export default PrecisionSec