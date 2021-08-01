import React from "react";
import styles from "./GameCard.module.scss";



function GameCard({game, picHeight=100, descriptionCollapse=false}) {

    return (
        <div  className={`flex-column p-2 ${styles.gameDesc}`}>
            <img className="mx-auto d-block my-3 " height={picHeight} src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg`} alt="Rolled game"/>
            <h3>{game.name}</h3>
            {descriptionCollapse &&  
                <button 
                    className="btn btn-light d-block p-1 w-100 mx-auto mb-2" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#gameDesc${game.appid}`}
                    aria-expanded="false" 
                    aria-controls={`gameDesc${game.appid}`}> 
                    Toggle description
                </button>}
            <div 
                className={descriptionCollapse ? "collapse" : ""}
                id={descriptionCollapse ? `gameDesc${game.appid}` : ""}
            >
                <p> BruhPoints: {game.bruh_points}</p>
                <p> Positive reviews: {game.possitive_count} </p>
				<p> Negative reviews: {game.negative_count} </p>
				<p> Metascore: {game.metascore} </p>
				<p> Sold copies: {game.owners_count} </p>
				<p> Price: {game.ru_price} Rub</p>
				<p> Developer: {game.developer} </p>
				<p> Publisher: {game.publisher} </p>
				<p> Duration: {game.duration} {game.time_unit} {game.label}</p>
				<p> HLTB: <a className="link-light"  rel="noreferrer" href={game.hltb_link} target="_blank"> {game.name}</a>  </p>
				<p> Steam: <a className='link-light' rel="noreferrer" href={`https://store.steampowered.com/app/${game.appid}`}  target="_blank"> {game.name} </a></p>
				<p> Languages: {game.languages.join(', ')} </p>
				<p> Genres: {game.genres.join(', ')} </p>
				<p> Tags: {game.tags.join(', ')} </p>
            </div>
        </div>
    )
}

export default GameCard;