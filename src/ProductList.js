import React, { Component } from 'react'
import { Table,Button } from 'reactstrap';

export default class ProductList extends Component {
    render() {
        return (
            <div>

                <Table className="productsTable ">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity Per Unit</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.products.map(product =>
                            (
                                <tr key={product.id}>
                                    <td>{product.productName}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>  <Button onClick={()=>this.props.addToCart(product)} color="primary">Add</Button></td>                                
                                </tr>
                            ))}
                    </tbody>
                </Table>


            </div>
        )
    }
}
