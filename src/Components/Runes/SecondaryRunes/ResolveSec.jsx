import Demolish from "./miniIcons/ResolveMini/Demolish_rune.png"
import FontOfLife from "./miniIcons/ResolveMini/Font_of_Life_rune.png"
import ShieldBash from "./miniIcons/ResolveMini/Shield_Bash_rune.png"
import Conditioning from "./miniIcons/ResolveMini/Conditioning_rune.png"
import SecondWind from "./miniIcons/ResolveMini/Second_Wind_rune.png"
import BonePlating from "./miniIcons/ResolveMini/Bone_Plating_rune.png"
import Overgrowth from "./miniIcons/ResolveMini/Overgrowth_rune.png"
import Revitalize from "./miniIcons/ResolveMini/Revitalize_rune.png"
import Unflinching from "./miniIcons/ResolveMini/Unflinching_rune.png"
import "./SecondaryRuneStyle.css"

function ResolveSec(props) {

    let rune = props.rune

    return (
        <div className='mini-rune-container' >
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle1(event, rune.id, 1)} style={{backgroundColor: rune.miniRune1 === 1 ? "#52ba4a" : "transparent"}} ><img src={Demolish} /></button>
                <button onClick={(event) => props.newStyle1(event, rune.id, 2)} style={{backgroundColor: rune.miniRune1 === 2 ? "#52ba4a" : "transparent"}} ><img src={FontOfLife} /></button>
                <button onClick={(event) => props.newStyle1(event, rune.id, 3)} style={{backgroundColor: rune.miniRune1 === 3 ? "#52ba4a" : "transparent"}} ><img src={ShieldBash} /></button>
            </div>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle2(event, rune.id, 1)} style={{backgroundColor: rune.miniRune2 === 1 ? "#52ba4a" : "transparent"}} ><img src={Conditioning} /></button>
                <button onClick={(event) => props.newStyle2(event, rune.id, 2)} style={{backgroundColor: rune.miniRune2 === 2 ? "#52ba4a" : "transparent"}} ><img src={SecondWind} /></button>
                <button onClick={(event) => props.newStyle2(event, rune.id, 3)} style={{backgroundColor: rune.miniRune2 === 3 ? "#52ba4a" : "transparent"}} ><img src={BonePlating} /></button>
            </div>
            <div className='mini-rune'>
                <button onClick={(event) => props.newStyle3(event, rune.id, 1)} style={{backgroundColor: rune.miniRune3 === 1 ? "#52ba4a" : "transparent"}} ><img src={Overgrowth} /></button>
                <button onClick={(event) => props.newStyle3(event, rune.id, 2)} style={{backgroundColor: rune.miniRune3 === 2 ? "#52ba4a" : "transparent"}} ><img src={Revitalize} /></button>
                <button onClick={(event) => props.newStyle3(event, rune.id, 3)} style={{backgroundColor: rune.miniRune3 === 3 ? "#52ba4a" : "transparent"}} ><img src={Unflinching} /></button>
            </div>   
        </div>    
        )
}

export default ResolveSec