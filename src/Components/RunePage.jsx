import Domination from "./Runes/Domination"
import Inspiration from "./Runes/Inspiration"
import Precision from "./Runes/Precision"
import Resolve from "./Runes/Resolve"
import Sorcery from "./Runes/Sorcery"
import DominationIcon from "./icons/Domination_icon.png"
import InspirationIcon from "./icons/Inspiration_icon.png"
import PrecisionIcon from "./icons/Precision_icon.png"
import ResolveIcon from "./icons/Resolve_icon.png"
import SorceryIcon from "./icons/Sorcery_icon.png"

import "./RunePage.css"


function RunePage(props) {
    // mapping the runes array into a rune page
    const runeElement = props.runes.map( rune => (
        <div key={rune.id}>
            <input className="input-field" type="text" value={rune.title} onChange={(event) => props.handleChange(event, rune.id)} />
            <button className="dropdown" onClick={(event) => props.handleOpen(event, rune.id)} > Apri </button>
            <button className="dropdown" onClick={(event) => props.handleClose(event, rune.id)} > Chiudi </button>
            {rune.open ? <div>
                <button className="delete" onClick={(event) => props.deleteRune(event, rune.id, rune.open)} >Cancella {rune.title}</button>
                <div className='select-rune'>
                    <button
                        className='rune-button' 
                        onClick={(event) => props.changeRune(event, rune.id, 1)}
                        style={{backgroundColor: rune.selectedRune === 1 ? "#d1d444" : "transparent"}}
                    >
                        <img src={PrecisionIcon} />
                    </button>
                    <button
                        className='rune-button' 
                        onClick={(event) => props.changeRune(event, rune.id, 2)}
                        style={{backgroundColor: rune.selectedRune === 2 ? "#ba3a3a" : "transparent"}} 
                    >
                        <img src={DominationIcon} />
                    </button>
                    <button
                        className='rune-button' 
                        onClick={(event) => props.changeRune(event, rune.id, 3)} 
                        style={{backgroundColor: rune.selectedRune === 3 ? "#6133a6" : "transparent"}}
                    >
                        <img src={SorceryIcon} />
                    </button>
                    <button
                        className='rune-button' 
                        onClick={(event) => props.changeRune(event, rune.id, 4)}
                        style={{backgroundColor: rune.selectedRune === 4 ? "#52ba4a" : "transparent"}} 
                    >
                        <img src={ResolveIcon} />
                    </button>
                    <button
                        className='rune-button' 
                        onClick={(event) => props.changeRune(event, rune.id, 5)}
                        style={{backgroundColor: rune.selectedRune === 5 ? "#4aa7ba" : "transparent"}} 
                    >
                        <img src={InspirationIcon} />
                    </button>   
                </div>
                <div className="main-container">            
                    {
                    rune.selectedRune === 1 ? <Precision
                        changePage={props.changePage}
                        newStyle={props.newStyle}
                        newStyle1={props.newStyle1}
                        newStyle2={props.newStyle2}
                        newStyle3={props.newStyle3}
                        newMainStyle1={props.newMainStyle1}
                        newMainStyle2={props.newMainStyle2}
                        newMainStyle3={props.newMainStyle3}
                        newShardStyle1={props.newShardStyle1}
                        newShardStyle2={props.newShardStyle2}
                        newShardStyle3={props.newShardStyle3}
                        rune={rune}
                    /> : 
                        rune.selectedRune === 2 ? <Domination
                            changePage={props.changePage}
                            newStyle={props.newStyle}
                            newStyle1={props.newStyle1}
                            newStyle2={props.newStyle2}
                            newStyle3={props.newStyle3}
                            newMainStyle1={props.newMainStyle1}
                            newMainStyle2={props.newMainStyle2}
                            newMainStyle3={props.newMainStyle3}
                            newShardStyle1={props.newShardStyle1}
                            newShardStyle2={props.newShardStyle2}
                            newShardStyle3={props.newShardStyle3}
                            rune={rune}
                        /> :
                        rune.selectedRune === 3 ? <Sorcery
                            changePage={props.changePage}
                            newStyle={props.newStyle}
                            newStyle1={props.newStyle1}
                            newStyle2={props.newStyle2}
                            newStyle3={props.newStyle3}
                            newMainStyle1={props.newMainStyle1}
                            newMainStyle2={props.newMainStyle2}
                            newMainStyle3={props.newMainStyle3}
                            newShardStyle1={props.newShardStyle1}
                            newShardStyle2={props.newShardStyle2}
                            newShardStyle3={props.newShardStyle3}
                            rune={rune}
                        /> :
                        rune.selectedRune === 4 ? <Resolve
                            changePage={props.changePage}
                            newStyle={props.newStyle}
                            newStyle1={props.newStyle1}
                            newStyle2={props.newStyle2}
                            newStyle3={props.newStyle3}
                            newMainStyle1={props.newMainStyle1}
                            newMainStyle2={props.newMainStyle2}
                            newMainStyle3={props.newMainStyle3}
                            newShardStyle1={props.newShardStyle1}
                            newShardStyle2={props.newShardStyle2}
                            newShardStyle3={props.newShardStyle3}
                            rune={rune}
                        /> :
                        rune.selectedRune === 5 ? <Inspiration
                            changePage={props.changePage}
                            newStyle={props.newStyle}
                            newStyle1={props.newStyle1}
                            newStyle2={props.newStyle2}
                            newStyle3={props.newStyle3}
                            newMainStyle1={props.newMainStyle1}
                            newMainStyle2={props.newMainStyle2}
                            newMainStyle3={props.newMainStyle3}
                            newShardStyle1={props.newShardStyle1}
                            newShardStyle2={props.newShardStyle2}
                            newShardStyle3={props.newShardStyle3}
                            rune={rune}
                        /> :
                            <h1 className="text">Seleziona runa principale</h1>
                    }
                </div>
            </div> : <div></div>}
        </div>        
    ) )

    return (
        <div>
            {runeElement}
        </div>
    )
}

export default RunePage