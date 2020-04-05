import React, { Component } from "react"
// import Aux from "../../../hoc/Aux"
import Support from "../../../Support/Support"
import Backdrop from "../Backdrop/Backdrop"

// import "./Modal.css"
import classes from "./Modal.module.css"

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    componentWillMount() {
        console.log("[Modal] will update")
    }

    render () {
        return (
            <Support >
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div 
            className={classes.Modal}
            style={{
                transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity: this.props.show ? "1" : "0"
            }}>
            {this.props.children}
        </div>

    </Support>
        )
    }
    
}

export default Modal