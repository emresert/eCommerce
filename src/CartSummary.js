import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Badge, NavItem, NavLink
} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary() {
        return (
            <div>

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Your Cart
                </DropdownToggle >
                    <DropdownMenu right>
       
                        {this.props.cartItemsFromApp.map(item => (
                            <DropdownItem key={item.product.id}>

                                <Badge onClick={() => this.props.removeItemsFromCart(item.product)} className="mr-2" color="danger" pill>X</Badge>
                                {item.product.productName}
                                <Badge className="ml-2" color="success" pill>{item.quantity}</Badge>

                            </DropdownItem>
                        ))}

                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
    renderEmpty() {
        return (
            <div>
                <NavItem>
                    <NavLink>Empty Cart</NavLink>
                </NavItem>
            </div>
        )
    }
    render() {

        return (
            <div>
                {console.log(this.props.cartItemsFromApp.length)}
                {this.props.cartItemsFromApp.length > 0 ? this.renderSummary() : this.renderEmpty()}
            </div>

        )
    }
}
