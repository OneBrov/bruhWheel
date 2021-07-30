import React from 'react'

import styles from './SliderWithText.module.scss'

function SliderWithText ({ name, myValue, maxValue, minValue, changeValue}) {

    const [error, setError] = React.useState('')

    const onChangeValue = (e) => {
        if (e.target.value >= minValue && e.target.value<=maxValue){
            setError('')
        } else{
            setError(`The value mast be in range ${minValue} to ${maxValue}`)
        }
        changeValue(e.target.value)
    }
    return (
        <div className="row">
            <div className="d-flex justify-content-between mb-1">
                <label>{name}</label>
                <input name={name} onChange={onChangeValue} type="number" value={myValue} min={minValue} max={maxValue}></input>
            </div>
            <div className={`d-flex justify-content-center ${styles.barContainer}`}>
                <p> {minValue}</p>
                <input onChange={onChangeValue} className={`d-flex mx-3  ${styles.slider}`}  value={myValue} placeholder="3" type="range"  min={minValue} max={maxValue} step="1"></input>
                <p> {maxValue}</p>
            </div>
            {error.length ? <div className="alert alert-danger" role="alert">{error}</div>  : <></>}
        </div>
    )
}

export default SliderWithText;