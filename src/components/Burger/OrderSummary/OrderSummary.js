import React, { Component } from "react"
// import Aux from "../../../hoc/Aux"
import Button from "../../UI/Button/Button"
import Support from "../../../Support/Support"



class OrderSummary extends Component {
    // this should be a functional component, doesn't have to be a class component
    componentWillUpdate() {
        console.log("[OrderSummary] willUpdate")
    }

    render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                        <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>)
        })
    // <li>Salad: 1</li>
    return (
        <Support>
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled} >CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue} >CONTINUE</Button>
        </Support>
    )
}
}

export default OrderSummary