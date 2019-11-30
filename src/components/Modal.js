import React, { Component } from 'react'

class Modal extends Component{
    constructor(props){
        super(props);
        this.closeModal = false;
        this.modalClasses = 'mymodal hide'
    }
    handleModalView = () => {
        if(this.props.isModalShow){
            this.modalClasses = "mymodal show"
            document.body.style.overflow = "hidden";
        }
        else{
            this.modalClasses ="mymodal hide";        
            document.body.style.overflow = "unset";
        }
    }
    
    render(){
        this.handleModalView();
    return (
        <div className={this.modalClasses}>
            <span className="close-button" onClick={this.props.modalHandler}>    
            </span>
            {this.props.children}
        </div>
    );
}
}

export default Modal;
