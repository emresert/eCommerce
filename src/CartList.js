import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

export default class CartList extends Component {

    renderEmptyCart (){
        return(
            <Table striped>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
             <tr>
                 <td> Your Cart is empty now.</td>
             </tr>
            </tbody>
    </Table>
        )
    }
    renderCart (){

        return (
            <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Category Id</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Unit In Stock</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem =>(
                            <tr key= {cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                                <td>{cartItem.quantity}</td>
                                <td><Button onClick={()=> this.props.removeItemFromCart(cartItem.product)} color="danger">Remove</Button></td>
                            </tr>
                        ) )}
                    </tbody>
            </Table>
        )
    } 

    render() {
        return (
            <div>
                {this.props.cart.length<=0?this.renderEmptyCart():this.renderCart()}
            </div>
        )
    }
}
