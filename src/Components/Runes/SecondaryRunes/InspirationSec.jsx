import HextechFlash from "./miniIcons/InspirationMini/Hextech_Flashtraption_rune.png"
import MagicalFootwear from "./miniIcons/InspirationMini/Magical_Footwear_rune.png"
import PerfectTiming from "./miniIcons/InspirationMini/Perfect_Timing_rune.png"
import FuturesMarket from "./miniIcons/InspirationMini/Futures_Market_rune.png"
import MinionDematerializer from "./miniIcons/InspirationMini/Minion_Dematerializer_rune.png"
import BiscuitDelivery from "./miniIcons/InspirationMini/Biscuit_Delivery_rune.png"
import CosmicInsight from "./miniIcons/InspirationMini/Cosmic_Insight_rune.png"
import ApproachVelocity from "./miniIcons/InspirationMini/Approach_Velocity_rune.png"
import TimeWarpTonic from "./miniIcons/InspirationMini/Time_Warp_Tonic_rune.png"
import "./SecondaryRuneStyle.css"

function InspirationSec(props) {

    let rune = props.rune

    return (
        <div className='mini-rune-container'>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle1(event, rune.id, 1)} style={{backgroundColor: rune.miniRune1 === 1 ? "#4aa7ba" : "transparent"}} ><img src={HextechFlash} /></button>
                <button onClick={(event) => props.newStyle1(event, rune.id, 2)} style={{backgroundColor: rune.miniRune1 === 2 ? "#4aa7ba" : "transparent"}} ><img src={MagicalFootwear} /></button>
                <button onClick={(event) => props.newStyle1(event, rune.id, 3)} style={{backgroundColor: rune.miniRune1 === 3 ? "#4aa7ba" : "transparent"}} ><img src={PerfectTiming} /></button>
            </div>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle2(event, rune.id, 1)} style={{backgroundColor: rune.miniRune2 === 1 ? "#4aa7ba" : "transparent"}} ><img src={FuturesMarket} /></button>
                <button onClick={(event) => props.newStyle2(event, rune.id, 2)} style={{backgroundColor: rune.miniRune2 === 2 ? "#4aa7ba" : "transparent"}} ><img src={MinionDematerializer} /></button>
                <button onClick={(event) => props.newStyle2(event, rune.id, 3)} style={{backgroundColor: rune.miniRune2 === 3 ? "#4aa7ba" : "transparent"}} ><img src={BiscuitDelivery} /></button>
            </div>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle3(event, rune.id, 1)} style={{backgroundColor: rune.miniRune3 === 1 ? "#4aa7ba" : "transparent"}} ><img src={CosmicInsight} /></button>
                <button onClick={(event) => props.newStyle3(event, rune.id, 2)} style={{backgroundColor: rune.miniRune3 === 2 ? "#4aa7ba" : "transparent"}} ><img src={ApproachVelocity} /></button>
                <button onClick={(event) => props.newStyle3(event, rune.id, 3)} style={{backgroundColor: rune.miniRune3 === 3 ? "#4aa7ba" : "transparent"}} ><img src={TimeWarpTonic} /></button>
            </div>
        </div>
        )
}

export default InspirationSec