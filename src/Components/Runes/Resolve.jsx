import PrecisionSec from './SecondaryRunes/PrecisionSec'
import DominationSec from './SecondaryRunes/DominationSec'
import SorcerySec from './SecondaryRunes/SorcerySec'
import InspirationSec from './SecondaryRunes/InspirationSec'
import RuneShard from "./SecondaryRunes/RuneShard"
import DominationIcon from "./runeIcon/Domination_runes/Domination_icon.png"
import InspirationIcon from "./runeIcon/Inspiration_runes/Inspiration_icon.png"
import PrecisionIcon from "./runeIcon/Precision_runes/Precision_icon.png"
import SorceryIcon from "./runeIcon/Sorcery_runes/Sorcery_icon.png"
import Grasp from "./runeIcon/Resolve_runes/Grasp_of_the_Undying_rune.png"
import Aftershock from "./runeIcon/Resolve_runes/Aftershock_rune.png"
import Guardian from "./runeIcon/Resolve_runes/Guardian_rune.png"
import Demolish from "./runeIcon/Resolve_runes/Demolish_rune.png"
import FontOfLife from "./runeIcon/Resolve_runes/Font_of_Life_rune.png"
import ShieldBash from "./runeIcon/Resolve_runes/Shield_Bash_rune.png"
import Contitioning from "./runeIcon/Resolve_runes/Conditioning_rune.png"
import SecondWind from "./runeIcon/Resolve_runes/Second_Wind_rune.png"
import BonePlating from "./runeIcon/Resolve_runes/Bone_Plating_rune.png"
import Overgrowth from "./runeIcon/Resolve_runes/Overgrowth_rune.png"
import Revitalize from "./runeIcon/Resolve_runes/Revitalize_rune.png"
import Unflinching from "./runeIcon/Resolve_runes/Unflinching_rune.png"
import "./MainRuneStyle.css"

function Resolve(props) {

    let rune = props.rune

    return (
        <div className='main-container'>
            <div>
                <div className='main-rune' >
                    <button onClick={(event) => props.newStyle(event, rune.id, 1)} style={{backgroundColor: rune.mainRune === 1 ? "#52ba4a" : "transparent"}}><img src={Grasp} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 2)} style={{backgroundColor: rune.mainRune === 2 ? "#52ba4a" : "transparent"}}><img src={Aftershock} /></button>
                    <button onClick={(event) => props.newStyle(event, rune.id, 3)} style={{backgroundColor: rune.mainRune === 3 ? "#52ba4a" : "transparent"}}><img src={Guardian} /></button>
                </div>
                <div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune1 === 1 ? "#52ba4a" : "transparent"}} ><img src={Demolish} /></button>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune1 === 2 ? "#52ba4a" : "transparent"}} ><img src={FontOfLife} /></button>
                        <button onClick={(event) => props.newMainStyle1(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune1 === 3 ? "#52ba4a" : "transparent"}} ><img src={ShieldBash} /></button>
                    </div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune2 === 1 ? "#52ba4a" : "transparent"}} ><img src={Contitioning} /></button>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune2 === 2 ? "#52ba4a" : "transparent"}} ><img src={SecondWind} /></button>
                        <button onClick={(event) => props.newMainStyle2(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune2 === 3 ? "#52ba4a" : "transparent"}} ><img src={BonePlating} /></button>
                    </div>
                    <div className='mini-main-rune'>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 1)} style={{backgroundColor: rune.miniMainRune3 === 1 ? "#52ba4a" : "transparent"}} ><img src={Overgrowth} /></button>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 2)} style={{backgroundColor: rune.miniMainRune3 === 2 ? "#52ba4a" : "transparent"}} ><img src={Revitalize} /></button>
                        <button onClick={(event) => props.newMainStyle3(event, rune.id, 3)} style={{backgroundColor: rune.miniMainRune3 === 3 ? "#52ba4a" : "transparent"}} ><img src={Unflinching} /></button>
                    </div>   
                </div> 
            </div>
            <div>
                <div className='sec-runes'>
                    <div className='sec-buttons'>
                        <button onClick={(event) => props.changePage(event, rune.id, 1)} style={{backgroundColor: rune.secRune === 1 ? "#d1d444" : "transparent"}} ><img src={PrecisionIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 2)} style={{backgroundColor: rune.secRune === 2 ? "#ba3a3a" : "transparent"}} ><img src={DominationIcon} /></button>
                        <button onClick={(event) => props.changePage(event, rune.id, 3)} style={{backgroundColor: rune.secRune === 3 ? "#6133a6" : "transparent"}} ><img src={SorceryIcon} /></button>
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
                        rune.secRune === 3 ? <SorcerySec
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

export default Resolve