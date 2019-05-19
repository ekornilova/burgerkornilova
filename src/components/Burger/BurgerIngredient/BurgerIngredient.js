import React, { Component } from 'react'
import Aux from '../../../hoc/AuxHoc/AuxHoc'
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component{
    render(){
        let ingredient = null
        let y = 0
        switch (this.props.type){
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                )
                break;
            case ('meat'):
                    ingredient = <div className={classes.Meat}></div>
                    break;
            case ('cheese'):
                    ingredient = <div className={classes.Cheese}></div>
                    break;
            case ('salad'):
                    ingredient = <div className={classes.Salad}></div>
                    break;
            case ('bacon'):
                    ingredient = <div className={classes.Bacon}></div>
                    break;
            default:
                ingredient=null
        }
        return ingredient
    }

}
BurgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
}
export default BurgerIngredient