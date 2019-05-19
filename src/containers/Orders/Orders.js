import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/orders.json').then(response => {
            const fetchedOrders = []
            for (let key in response.data){
                fetchedOrders.push( {
                    ...response.data[key],
                    id: key
                })
            }
            this.setState({
                orders: fetchedOrders,
                loading: false

            })
        })
        .catch(errorr=>this.setState({ error: true, loading: false }))
    }
    render(){
        //const orders = this.state.
        return (
            <div>
                {this.state.orders.map(order => <Order key={order.id} price={order.price} ingredients={order.ingredients}/>)}
            </div>
        )
    }
}
export default withErrorHandler(Orders,axios)