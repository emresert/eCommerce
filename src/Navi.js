import React, { Component } from 'react'
import CartSummary from './CartSummary'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
export default class Navi extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem >
                                <NavLink >Sepette - {this.props.cartItems.length}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">GitHub</NavLink>
                            </NavItem>
                              <CartSummary removeItemsFromCart={this.props.removeItemFromCart} cartItemsFromApp={this.props.cartItems}></CartSummary>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
