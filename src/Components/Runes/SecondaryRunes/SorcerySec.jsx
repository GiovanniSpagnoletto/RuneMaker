import NullifyingOrb from "./miniIcons/SorceryMini/Nullifying_Orb_rune.png"
import ManaflowBand from "./miniIcons/SorceryMini/Manaflow_Band_rune.png"
import NimbusCloak from "./miniIcons/SorceryMini/Nimbus_Cloak_rune.png"
import Transcendence from "./miniIcons/SorceryMini/Celerity_rune.png"
import Celerity from "./miniIcons/SorceryMini/Celerity_rune.png"
import AbsoluteFocus from "./miniIcons/SorceryMini/Absolute_Focus_rune.png"
import Scorch from "./miniIcons/SorceryMini/Scorch_rune.png"
import WaterWalking from "./miniIcons/SorceryMini/Waterwalking_rune.png"
import GatheringStorm from "./miniIcons/SorceryMini/Gathering_Storm_rune.png"
import "./SecondaryRuneStyle.css"

function SorcerySec(props) {

    let rune = props.rune

    return (
        <div className='mini-rune-container'>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle1(event, rune.id, 1)} style={{backgroundColor: rune.miniRune1 === 1 ? "#6133a6" : "transparent"}} ><img src={NullifyingOrb} /></button>
                <button onClick={(event) => props.newStyle1(event, rune.id, 2)} style={{backgroundColor: rune.miniRune1 === 2 ? "#6133a6" : "transparent"}} ><img src={ManaflowBand} /></button>
                <button onClick={(event) => props.newStyle1(event, rune.id, 3)} style={{backgroundColor: rune.miniRune1 === 3 ? "#6133a6" : "transparent"}} ><img src={NimbusCloak} /></button>
            </div>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle2(event, rune.id, 1)} style={{backgroundColor: rune.miniRune2 === 1 ? "#6133a6" : "transparent"}} ><img src={Transcendence} /></button>
                <button onClick={(event) => props.newStyle2(event, rune.id, 2)} style={{backgroundColor: rune.miniRune2 === 2 ? "#6133a6" : "transparent"}} ><img src={Celerity} /></button>
                <button onClick={(event) => props.newStyle2(event, rune.id, 3)} style={{backgroundColor: rune.miniRune2 === 3 ? "#6133a6" : "transparent"}} ><img src={AbsoluteFocus} /></button>
            </div>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle3(event, rune.id, 1)} style={{backgroundColor: rune.miniRune3 === 1 ? "#6133a6" : "transparent"}} ><img src={Scorch} /></button>
                <button onClick={(event) => props.newStyle3(event, rune.id, 2)} style={{backgroundColor: rune.miniRune3 === 2 ? "#6133a6" : "transparent"}} ><img src={WaterWalking} /></button>
                <button onClick={(event) => props.newStyle3(event, rune.id, 3)} style={{backgroundColor: rune.miniRune3 === 3 ? "#6133a6" : "transparent"}} ><img src={GatheringStorm} /></button>
            </div>   
        </div>    
        )
}

export default SorcerySec