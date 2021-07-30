import React from 'react'

import styles from './TwoEndSlider.module.scss'

function TwoEndSlider ({ name, leftValue, rightValue, maxValue, minValue, changeLeftValue, changeRightValue}) {

    const [error, setError] = React.useState('')

    const onChangeLeftValue = (e) => {
        if (e.target.value >= minValue && e.target.value<=maxValue && leftValue <= rightValue){
            setError('')
            
        } else{
            setError(`Left value must be in range ${minValue} to ${maxValue} and less than right value=${rightValue}`)
        }
        changeLeftValue(e.target.value)
    }

    const onChangeRightValue = (e) => {
        if (e.target.value >= minValue && e.target.value<=maxValue && leftValue <= rightValue){
            setError('')
        } else{
            setError(`Right value must be in range ${minValue} to ${maxValue} and more than left value=${leftValue}`)
        }
        changeRightValue(e.target.value)
    }

    return (
        <div>
            <div className="d-flex justify-content-between mb-3">
                <label className="me-3">{name}</label>
                <label>Min</label>
                    <input name={name} onChange={onChangeLeftValue} className="mx-2 w-100" type="number" value={leftValue} min={minValue} max={maxValue}></input>
                    <p className="align-center m-0 my-auto mx-2">-</p>
                    <input name={name} onChange={ onChangeRightValue} className="mx-2 w-100" type="number" value={rightValue} min={minValue} max={maxValue}></input>
                    <label>Max</label>
            </div>
            {error.length ? <div className="alert alert-danger" role="alert">{error}</div>  : <></>}
        </div>
    )
}

export default TwoEndSlider;