import AttackSpeed from "./shard_icon/Rune_shard_Attack_Speed.png"
import Adaptive from "./shard_icon/Rune_shard_Adaptive_Force.png"
import Cooldown from "./shard_icon/Rune_shard_Cooldown_Reduction.png"
import Armor from "./shard_icon/Rune_shard_Armor.png"
import MagicResist from "./shard_icon/Rune_shard_Magic_Resistance.png"
import Health from "./shard_icon/Rune_shard_Health.png"
import "./SecondaryRuneStyle.css"

function RuneShard(props) {

    let rune = props.rune

    return (
        <div>
            <div className="shard-button" >
                <button onClick={(event) => props.newShardStyle1(event, rune.id, 1)} style={{backgroundColor: rune.shard1 === 1 ? "#bfff00" : "transparent"}} ><img src={Adaptive} /></button>
                <button onClick={(event) => props.newShardStyle1(event, rune.id, 2)} style={{backgroundColor: rune.shard1 === 2 ? "#bfff00" : "transparent"}} ><img src={AttackSpeed} /></button>
                <button onClick={(event) => props.newShardStyle1(event, rune.id, 3)} style={{backgroundColor: rune.shard1 === 3 ? "#bfff00" : "transparent"}} ><img src={Cooldown} /></button>
            </div>
            <div className="shard-button" >
                <button onClick={(event) => props.newShardStyle2(event, rune.id, 1)} style={{backgroundColor: rune.shard2 === 1 ? "#bfff00" : "transparent"}} ><img src={Adaptive} /></button>
                <button onClick={(event) => props.newShardStyle2(event, rune.id, 2)} style={{backgroundColor: rune.shard2 === 2 ? "#bfff00" : "transparent"}} ><img src={Armor} /></button>
                <button onClick={(event) => props.newShardStyle2(event, rune.id, 3)} style={{backgroundColor: rune.shard2 === 3 ? "#bfff00" : "transparent"}} ><img src={MagicResist} /></button>
            </div>
            <div className="shard-button" >
                <button onClick={(event) => props.newShardStyle3(event, rune.id, 1)} style={{backgroundColor: rune.shard3 === 1 ? "#bfff00" : "transparent"}} ><img src={Health} /></button>
                <button onClick={(event) => props.newShardStyle3(event, rune.id, 2)} style={{backgroundColor: rune.shard3 === 2 ? "#bfff00" : "transparent"}} ><img src={Armor} /></button>
                <button onClick={(event) => props.newShardStyle3(event, rune.id, 3)} style={{backgroundColor: rune.shard3 === 3 ? "#bfff00" : "transparent"}} ><img src={MagicResist} /></button>                  
            </div>
        </div>
    )
}

export default RuneShard