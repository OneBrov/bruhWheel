import React from 'react'

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
    
            context.font = 20 + 'px Helvetica'

            context.textAlign = "left"
            context.fillStyle = "white"
            context.save();
            context.translate(x , y)
            let angle = 360 / games.length;
            context.rotate(-angle/2* Math.PI / 180 );
 
            for (let i=0; i<games.length; i++){
                let game = games[i].name
                if (game.length > 18){
                  game = game.slice(0, 15) + '...'
                }
                context.strokeText( game, 0 + 50 , 5, (radius ) - 50 );
                context.fillText( game , 0 + 50 , 5, (radius )  - 50 );
                context.rotate(-angle * Math.PI / 180);
            }     
            context.restore();    
        }
        drawCircle(games.length)
        drawGameNames(games)

    }, [games])


   


    return (
        
            <canvas 
               
                id='wheel-canvas'
                className='m-auto d-block '
                width={500}
                height={500}
                ref={ref} 
                style={{ 
                    transition: `all cubic-bezier(0.23, 0.64, 0.36, 1) ${spinningTime}`
                }}
            />
        
        
    )
}

export default Wheel;