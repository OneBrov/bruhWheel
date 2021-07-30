import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

import './App.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SettingsCanvas from './components/SettingsCanvas';
import Wheel from './components/Wheel';
import GameCard from './components/GameCard';
import { setRollTrue, setRollFalse } from './features/roll/rollSlice';
import {setNewWinner, clearWinner} from './features/winner/winnerSlice';

function App() {
  const [settingsOpen, setSettingsOpen] = React.useState(false)
  const [games, setGames] = React.useState([])
  const [wheelRotate, setWheelRotate] = React.useState(0)
  const settingsLink = useSelector((state) => state.settings.value)
  const rollCondition = useSelector((state) => state.roll.value)
  const winnerId = useSelector((state) => state.winner.value)

  const dispatch = useDispatch()
 

  React.useEffect ( ()=>{
    if (rollCondition === true || !games.length) {
            
      const getGames = async () => {
        try{
          const {data} = await axios({
            method:'GET',
            url: settingsLink
          })
          setGames(data)
        }
        catch (err) {
          alert(`Cant get games with the given parameters! ${err}`)
        }
      }
      
      getGames()
    }
  },[settingsLink, rollCondition])

  React.useEffect ( ()=> {
    if (rollCondition === true) {
      const  getRandomRotate = (circMin, circMax, countGames, winner) => {
        //number of full circles -> from 10 to 30
        let circles = Math.floor(Math.random()*(circMax - circMin)) + circMin
        circles = circles * 360
        // rotate amount not full circle spin
        let lower_bound = 360/countGames * (winner)
        let upper_bound = 360/countGames * (winner + 1)
        let y = Math.floor(Math.random() *(upper_bound - lower_bound) ) + lower_bound
        return circles + y + 1
      }
      
      const getRandomWinner = (min, max) => {
        return Math.floor(
          Math.random() * (max - min + 1) + min
        )
      }

      let winner = getRandomWinner(0,games.length - 1  )
      let rotateAmount = getRandomRotate(10, 30, games.length, winner)
      let rotate =  wheelRotate + rotateAmount            
      document.getElementById('wheel-canvas').style.transform = 'rotate(' + (rotate) + 'deg)';
      //formula calc from current rotate of wheel game, which will be a winner
      // on python formula looks like: (rotate%360) // (360/len(gamePool))
      //                                
      let actuallyWinner = (~~(  rotate%360 / (360/games.length)  )  ) 
      setTimeout( () => {
        dispatch(setRollFalse())
        dispatch(setNewWinner(actuallyWinner))
      }, 5000)
      setWheelRotate(rotate)
    }


},[games])


  const setImageHeight = () => {
    let height;
    if(window.innerWidth >= 1400) {
      height=140
    } else if(window.innerWidth >= 1200) { 
      height=120
    } else if(window.innerWidth >= 992) { 
      height=90
    } else if(window.innerWidth >= 768) { 
      height=250
    } else if(window.innerWidth >= 576) { 
      height=200
    }
    else {
      height=100
    }  
    return height
  }

  return (
    <>
      <SettingsCanvas onToggleSettings={() => setSettingsOpen(false)} settingsOpen={settingsOpen}/>
      <Navbar onToggleSettings={() => setSettingsOpen(true)}/>
      <div className="container-fluid bg-gradient text-light bg-dark">
        <div className="row">
          <div id="leftColumn" className="col-lg-3 "> 
            <h2 className="text-center pb-4">Rolled game</h2>
            <div className={`shadowBox winnerGame ${!rollCondition ? "winnerGameVisible" : ""}`} >
              {winnerId >=0 ? 
                <GameCard 
                  game={games[winnerId]}
                  picHeight={setImageHeight()}
                  descriptionCollapse={false}
                /> : ""}
             
            </div>

          </div>
          <div id="midColumn" className="col-lg-6 mb-4">
            <h2 className="text-center pb-4">Wheel</h2>
            <div className="shadowBox p-3 position-relative w-100 " >
              <Wheel 
                spinningTime='5s'
                games={games}
              />
              <button onClick={() => dispatch(setRollTrue())} 
              className={`rollButton btn p-0 ${rollCondition ? "rollButtonNotActive" : ""}`}>
                 {rollCondition ? "Rolling" : "Roll"}
              </button>
            </div>
          </div>
          <div id="rightColumn" className="col-lg-3 col">
            <h2 className="text-center pb-4">Game list</h2>
            <div className="shadowBox" >
              {games.length ? 
                games.map((game)=>
                  <GameCard
                    key={game.appid} 
                    game={game} 
                    picHeight={100}
                    descriptionCollapse
                />)
              : ""}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
