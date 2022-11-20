import DominationSec from './SecondaryRunes/DominationSec'
import SorcerySec from './SecondaryRunes/SorcerySec'
import ResolveSec from './SecondaryRunes/ResolveSec'
import PrecisionSec from './SecondaryRunes/PrecisionSec'
import RuneShard from "./SecondaryRunes/RuneShard"
import DominationIcon from "./runeIcon/Domination_runes/Domination_icon.png"
import PrecisionIcon from "./runeIcon/Precision_runes/Precision_icon.png"
import ResolveIcon from "./runeIcon/Resolve_runes/Resolve_icon.png"
import SorceryIcon from "./runeIcon/Sorcery_runes/Sorcery_icon.png"
import GlacialAugment from "./runeIcon/Inspiration_runes/Glacial_Augment_rune.png"
import UnsealedSpellbook from "./runeIcon/Inspiration_runes/Unsealed_Spellbook_rune.png"
import FirstStrike from "./runeIcon/Inspiration_runes/First_Strike_rune.png"
import HextechFlash from "./runeIcon/Inspiration_runes/Hextech_Flashtraption_rune.png"
import MagicalFootwear from "./runeIcon/Inspiration_runes/Magical_Footwear_rune.png"
import PerfectTiming from "./runeIcon/Inspiration_runes/Perfect_Timing_rune.png"
import FuturesMarket from "./runeIcon/Inspiration_runes/Futures_Market_rune.png"
import MinionDematerializer from "./runeIcon/Inspiration_runes/Minion_Dematerializer_rune.png"
import BiscuitDelivery from "./runeIcon/Inspiration_runes/Biscuit_Delivery_rune.png"
import CosmicInsight from "./runeIcon/Inspiration_runes/Cosmic_Insight_rune.png"
import AppropachVelocity from "./runeIcon/Inspiration_runes/Approach_Velocity_rune.png"
import TimeWarpTonic from "./runeIcon/Inspiration_runes/Time_Warp_Tonic_rune.png"
import "./MainRuneStyle.css"


function Inspiration(props) {

    let rune = props.rune

    return (
        <div className='main-container'>
            <div>
                <div className='main-rune' >
                    <button onClick={(event) => props.newStyle(event, rune.id, 1)} style={{backgroundColor: rune.mainRune === 1 ? "#4aa7ba" : "transparent"}} ><img src={GlacialAugment} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 2)} style={{backgroundColor: rune.mainRune === 2 ? "#4aa7ba" : "transparent"}}><img src={UnsealedSpellbook} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 3)} style={{backgroundColor: rune.mainRune === 3 ? "#4aa7ba" : "transparent"}}><img src={FirstStrike} /></button>
                </div>
                <div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune1 === 1 ? "#4aa7ba" : "transparent"}} ><img src={HextechFlash} /></button>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune1 === 2 ? "#4aa7ba" : "transparent"}} ><img src={MagicalFootwear} /></button>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune1 === 3 ? "#4aa7ba" : "transparent"}} ><img src={PerfectTiming} /></button>
                    </div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune2 === 1 ? "#4aa7ba" : "transparent"}} ><img src={FuturesMarket} /></button>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune2 === 2 ? "#4aa7ba" : "transparent"}} ><img src={MinionDematerializer} /></button>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune2 === 3 ? "#4aa7ba" : "transparent"}} ><img src={BiscuitDelivery} /></button>
                    </div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune3 === 1 ? "#4aa7ba" : "transparent"}} ><img src={CosmicInsight} /></button>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune3 === 2 ? "#4aa7ba" : "transparent"}} ><img src={AppropachVelocity} /></button>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune3 === 3 ? "#4aa7ba" : "transparent"}} ><img src={TimeWarpTonic} /></button>
                    </div>
                </div>
            </div>
            <div>
                <div className='sec-runes'>
                    <div className='sec-buttons'>
                        <button onClick={(event) => props.changePage(event, rune.id, 1)} style={{backgroundColor: rune.secRune === 1 ? "#d1d444" : "transparent"}} ><img src={PrecisionIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 2)} style={{backgroundColor: rune.secRune === 2 ? "#ba3a3a" : "transparent"}} ><img src={DominationIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 3)} style={{backgroundColor: rune.secRune === 3 ? "#6133a6" : "transparent"}} ><img src={SorceryIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 4)} style={{backgroundColor: rune.secRune === 4 ? "#52ba4a" : "transparent"}} ><img src={ResolveIcon} /></button>
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
                        rune.secRune === 3 ? <SorcerySec
                            newStyle1={props.newStyle1}
                            newStyle2={props.newStyle2}
                            newStyle3={props.newStyle3}
                            rune={rune}
                        /> :
                        rune.secRune === 4 ? <ResolveSec
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

export default Inspiration