import React, {useState} from 'react';
import Modal from './Modal';
import './Card.css'

function Card(props){
    const [dateOptions, _] = useState({year:"numeric", day:"numeric", month:"short" });
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="myCard">
                <div onMouseOver = {() => {
                        document.getElementById("learn" + props.id).style.visibility = "visible";
                        document.getElementById("smImg" + props.id).style.filter = "brightness(50%)";
                        document.getElementById("smImg" + props.id).style.cursor = "pointer";
                    }}
                    onMouseLeave = {() => {
                        document.getElementById("learn" + props.id).style.visibility = "hidden"
                        document.getElementById("smImg" + props.id).style.filter = "brightness(100%)";
                    }}
                    onClick = {() => {
                        setIsOpen(true);
                        document.getElementById("pageMask").style.display="block";
                    }}
                >
                    <img class="cardImageSmall" src={props.thumbnail.small} alt="" id={"smImg" + props.id}/>
                    <div id={"learn" + props.id} className="learnMore">Learn More</div>
                </div>
                
                <div className="cardContent">
                    <div className="dots">
                        <span class="blueDot"></span>
                        <span class="yellowDot"></span>
                    </div>
                    <h2 className="cardTitle">{props.title}</h2>
                    <p className="cardTextContent">{props.content}</p>
                    <div className="footer">
                        <div className="author">{props.author.name} - {props.author.role}</div>
                        <div className="date">{new Date(props.date).toLocaleDateString("en-US", dateOptions)}</div>
                    </div>
                </div>
            </div>
            <Modal open={isOpen} id={"modal" + props.id} onClose= {() => {
                setIsOpen(false);
                document.getElementById("pageMask").style.display="none";    
            }} props={props}/>
        </>
    );
}

export default Card;