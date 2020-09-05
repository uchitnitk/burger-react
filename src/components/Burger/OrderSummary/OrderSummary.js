import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
import classes from './OrderSummary.module.css'

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey=>{
            return  <li key={igKey}>
                        <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
                    </li>
        })
    return(
        <Aux>
            <h3>YOur order</h3>
            <p>A burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
            <button className={`${classes.Button} ${classes.Danger}`} onClick={props.purchaseCancelled}>CANCEL</button>
            <button className={`${classes.Button} ${classes.Success}`} onClick={props.purchaseContinued}>CONTINUE</button>
        </Aux>
    )
}

export default orderSummary;