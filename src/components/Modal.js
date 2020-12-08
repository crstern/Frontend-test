import React from 'react';
import './Modal.css'
import close from './close.png'


function Modal({open, id, onClose, props}){
    if (!open) return null;
    // sunt unele profile care nu au avatar
    if (props.author.avatar == null){
        props.author.avatar = "https://media.istockphoto.com/vectors/avatar-5-vector-id1131164548?b=1&k=6&m=1131164548&s=612x612&w=0&h=iSzm5anoLjH8-3DPyV6Aqfo9Lj4BV0wSNj9n4SnugcQ="
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="xButton" onClick={onClose}><img src={close} width="20px"/></button>
                <img className="lgImg" src={props.thumbnail.large} alt=""/>
                <h2>{props.title}</h2>
                <div className="modalContent">{props.content}</div>
                <div className="profileInfo">
                    <img className="avatarPic" src={props.author.avatar} alt="avatar"/>
                    <div className="avatarName">{props.author.name} - {props.author.role}</div>
                </div>
            </div>
        </div>
        )
}

export default Modal