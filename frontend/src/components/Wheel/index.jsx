import React from 'react'

import styles from './Wheel.module.scss'

function Wheel ({games, spinningTime}) {
    const ref = React.useRef(null)
    // const scale = 0.9
    // React.useEffect(()=> {
    //     ref && ref.current.getContext('2d').scale(0.9, 0.9)
    // },[ref])
    React.useEffect(() => {
        const drawCircle = (splitCount) => {
            const canvas = ref.current
            const context = canvas.getContext('2d')
  
   
            const radius = canvas.width /2
            const x = radius
            const y = radius
            
            const splitAngle = 2 * Math.PI / splitCount
            for (let i=0; i< splitCount;i++){
                context.beginPath()
                context.moveTo(x, y)
                context.arc(x, y, radius, i*splitAngle, (i+1)*splitAngle,false);
                context.lineWidth = radius;
                let hueValue = i*15;
                context.fillStyle = 'hsl(' + hueValue + ',70%, 60%)'; 
                context.fill();
                context.lineWidth = 2;
                context.strokeStyle = '#444';
                context.stroke()
                context.closePath()
              }
             
        }
    
        const drawGameNames = (games) => {
            const canvas = ref.current
            const context = canvas.getContext('2d')
            const radius = canvas.width /2
            const x = radius
            const y = radius
            
            context.font = radius / 10 + 'px Helvetica'
            if (games.length >= 12) {
                context.font = radius / 16 + 'px Helvetica'
            }
            context.textAlign = "left"
            context.strokeStyle = 'black';
            context.fillStyle = 'white';
            context.lineWidth = 4;
            context.save();
            context.translate(x , y)
            let angle = 360 / games.length;
            context.rotate(-angle/2* Math.PI / 180 );
            
            for (let i=0; i<games.length; i++){
                let game = games[i].name
                if (game.length > 15){
                  game = game.slice(0, 12) + '...'
                }

                context.strokeText( game, 0 + radius/4 , 5, (radius ) - radius/4 );
                context.fillText( game , 0 + radius/4 , 5, (radius )  - radius/4 );
                context.rotate(-angle * Math.PI / 180);
            }     
            context.restore();    
        }
        drawCircle(games.length)
        drawGameNames(games)

    }, [games])


    return (
        <>
            <canvas 
                id='wheel-canvas'
                className={`m-auto d-block ${styles.wheel}`}
                height={1000}
                width={1000}
                ref={ref} 
                style={{ 
                    transition: `all cubic-bezier(0.23, 0.64, 0.36, 1) ${spinningTime}`
                }}
            />
            <div className={styles.winnerArrow}></div>
        </>
    )
}

export default Wheel;