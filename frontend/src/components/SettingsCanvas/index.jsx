import React from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setSettingsByObject } from '../../features/settings/settingsSlice';

import styles from './SettingsCanvas.module.scss'

import SliderWithText from '../SliderWithText/index';
import TwoEndSlider from '../TwoEndSlider';
import exit from '../../img/exit.svg'

function SettingsCanvas ( {settingsOpen, onToggleSettings}) {
    const [countGames, setCountGames] = React.useState(3)
    const [priceLess, setPriceLess] = React.useState(9999)
    const [priceMore, setPriceMore] = React.useState(0)
    const [genres, setGenres] = React.useState([])

    const dispatch = useDispatch()
    const formRef = React.useRef(null)

    React.useEffect( () =>{
        const getGenres = async() => {
            try {
                const {data} = await axios({
                    method:'GET',
                    url: 'https://onebruh.pythonanywhere.com/api/genre/all/'
                  })
                setGenres(data)
            } catch (err){
                alert(`Oops!!! ${err}`)
            }
        }
        getGenres()
      },[]);

    const validateForm = () => {
        if (countGames >=3 && countGames <=20 
            && priceLess >= priceMore
            && priceLess <= 9999
            && priceMore >= 0    
        ) {
            let genresList = []
            for (let o of formRef.current.elements.genres){
                if (o.selected){
                    genresList.push(encodeURIComponent(o.value))
                }
            }

            const settings = {
                countGames:countGames, 
                priceLess: priceLess,
                priceMore: priceMore,
                genres: genresList.join(',')
            }
            dispatch(setSettingsByObject(settings))
            onToggleSettings()
        } else {
            console.log("Form is not valid!!! Please try again")
        }
       
    }

    return (
        <div  className={`${styles.overlay} ${settingsOpen ? styles.overlayVisible : ""}`}>
            <div className={`${styles.settings} p-4`} >
                <div className="d-flex justify-content-between pb-4">
                    <h3 >Settings:</h3>
                    <img onClick={onToggleSettings} className={`my-auto  ${styles.close}`} width={24} height={24} src={exit} alt="Exit" />
                </div>
                <h1 > Wheel settings!</h1>
                <form ref={formRef} id="settingsForm" onSubmit={() => false}  action="?">
                    <SliderWithText 
                        name={'Count Games:'}
                        myValue={countGames} 
                        maxValue={20} 
                        minValue={3} 
                        changeValue = {setCountGames}
                        
                    />
                    <TwoEndSlider
                        name={'Price:'}
                        leftValue={priceMore}
                        rightValue={priceLess}
                        maxValue={9999} 
                        minValue={0} 
                        changeLeftValue = {setPriceMore}
                        changeRightValue = {setPriceLess}
                    />
                    <div className="row mb-3 ">
                        <label>Genres:</label>
                        <select className="" multiple name="genres">
                            {genres.length && 
                                genres.map( (genre) => <option key={genre.id}>{genre.genre}</option> )
                            }
                        </select>
                    </div>
                </form>
                    <div className="row">
                        <button type="submit" onClick={validateForm}  className="btn btn-dark">Submit</button>
                    </div>
            </div>
            <div onClick={onToggleSettings} className={styles.outside} ></div>
            
        </div>
    )
}

export default SettingsCanvas;