import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import RunePage from "./Components/RunePage"

function App() {
  // state declaration
  const [runes, setRunes] = useState(
    () => JSON.parse(localStorage.getItem("runes")) || []
  )

  // saving in local storage 
  useEffect(() => {
    localStorage.setItem("runes", JSON.stringify(runes))
  }, [runes])

  // creating a new rune page
  function newPage(){
    const newRune = {
      id: nanoid(),
      selectedRune: 0,
      title: "Inserisci Nome",
      mainRune: 0,
      secRune: 0,
      miniMainRune1: 0,
      miniMainRune2: 0,
      miniMainRune3: 0,
      miniRune1: 0,
      miniRune2: 0,
      miniRune3: 0,
      shard1: 0,
      shard2: 0,
      shard3: 0,
      open: false

    }
    setRunes(old => [newRune, ...old])
  }

  // Dropdown menu

  // open
  function handleOpen(event, runeId){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId){
              rune.open=true
            } else { rune.open=false }
          return rune
      })
    return newRunes
    })
  }

  // close
  function handleClose(event, runeId){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
              rune.open=false
          return rune
      })
    return newRunes
    })
  }

  // changing the secondary rune  
  function changePage(event, runeId, i) {
    event.stopPropagation()
    setRunes(oldRunes=>{
    const newRunes = oldRunes.map((rune)=>{
        if (rune.id==runeId){
             rune.secRune=i
             rune.miniRune1=0
             rune.miniRune2=0
             rune.miniRune3=0
          }
        return rune
      })
    return newRunes
    })  
  }

  // changing the style of the main rune
  function newStyle(event, runeId, i){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
              rune.mainRune=i
          return rune
      })
    return newRunes
    })  
  }

  // changing the style of the mini rune 1
  function newStyle1(event, runeId, i){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
              rune.miniRune1=i
          return rune
      })
    return newRunes
    })  
  }

  // changing the style of the mini rune 2
  function newStyle2(event, runeId, i){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
              rune.miniRune2=i
          return rune
      })
    return newRunes
    })  
  }

  // changing the style of the mini rune 3
  function newStyle3(event, runeId, i){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
              rune.miniRune3=i
          return rune
      })
    return newRunes
    })  
  }

  // changing the style of the mini main rune 1
  function newMainStyle1(event, runeId, i){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
              rune.miniMainRune1=i
          return rune
      })
    return newRunes
    })  
  }

  // changing the style of the mini main rune 2
  function newMainStyle2(event, runeId, i){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
              rune.miniMainRune2=i
          return rune
      })
    return newRunes
    })  
  }

  // changing the style of the mini main rune 3
  function newMainStyle3(event, runeId, i){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
              rune.miniMainRune3=i
          return rune
      })
    return newRunes
    })  
  }

  // changing the style of the rune shard 1
  function newShardStyle1(event, runeId, i){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
              rune.shard1=i
          return rune
      })
    return newRunes
    })  
  }

  // changing the style of the rune shard 2
  function newShardStyle2(event, runeId, i){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
              rune.shard2=i
          return rune
      })
    return newRunes
    })  
  }

  // changing the style of the rune shard 3
  function newShardStyle3(event, runeId, i){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
              rune.shard3=i
          return rune
      })
    return newRunes
    })  
  }

  // deleting a rune page
  function deleteRune(event, runeId) {
    event.stopPropagation()
    setRunes(oldRunes => oldRunes.filter(old => old.id !== runeId))
  }

  // changing the rune page i.e. from domination to precision
  function changeRune(event, runeId, i) {
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId){
                rune.selectedRune=i
                rune.mainRune=0
                rune.secRune=0
                rune.miniMainRune1=0
                rune.miniMainRune2=0
                rune.miniMainRune3=0
                rune.miniRune1=0
                rune.miniRune2=0
                rune.miniRune3=0
                rune.shard1=0
                rune.shard2=0
                rune.shard3=0
              }
          return rune
      })
    return newRunes
    })
  }

  // changing the name of the rune page
  function handleChange(event, runeId){
    event.stopPropagation()
    setRunes(oldRunes=>{
      const newRunes = oldRunes.map((rune)=>{
          if (rune.id==runeId)
               rune.title= event.target.value
          return rune
      })
    return newRunes
    })
  }

  // rendering all
  return (
    <div>
      <button className='main-button' onClick={newPage}>New Runepage</button>
      <div className='runes'>
        {
          runes.length > 0
          ?
          <RunePage
            runes={runes}
            deleteRune={deleteRune}
            changeRune={changeRune}
            handleChange={handleChange}
            newPage={newPage}
            changePage={changePage}
            newStyle={newStyle}
            newStyle1={newStyle1}
            newStyle2={newStyle2}
            newStyle3={newStyle3}
            newMainStyle1={newMainStyle1}
            newMainStyle2={newMainStyle2}
            newMainStyle3={newMainStyle3}
            newShardStyle1={newShardStyle1}
            newShardStyle2={newShardStyle2}
            newShardStyle3={newShardStyle3}
            handleOpen={handleOpen}
            handleClose={handleClose}         
          />
          :
          <h1 className="text">Crea nuova pagina</h1>
        }
      </div>
    </div>
  )
}

export default App