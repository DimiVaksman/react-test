import React from "react";
import { Component } from "react";
import { Backdrop,Content } from "./modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');



export class Modal extends Component {
    componentDidMount(){
        console.log('Modal componentDidMount')
        window.addEventListener('keydown', this.hendleKeyDown)
    }

    componentWillUnmount(){
        console.log('Modal componentWillUnmount')
        window.removeEventListener('keydown', this.hendleKeyDown)
    }

    hendleKeyDown = e => {
        if(e.code === 'Escape'){
            console.log('esc')
            this.props.onClose()
    }}

    hendleBackDropClick = e => {
if( e.currentTarget === e.target){
    this.props.onClose()
}
    }
    render(){
        return createPortal(<Backdrop onClick={this.hendleBackDropClick}>
            <Content>{this.props.children}</Content>
            </Backdrop>, modalRoot)
    }
}
