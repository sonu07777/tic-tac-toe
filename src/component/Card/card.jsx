import Icon from "../Icon/icon.jsx"
import "./card.css"
function Card({players,gameEnd,onPlay,index}) {
    let icon = <Icon/>
    if(players == "x"){
       icon= <Icon name="cross"/>
    }else if(players=="o"){
       icon=<Icon name="circle"/>
    }
    
    return (
        <div className="card" onClick={()=> !gameEnd && players=="" && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card