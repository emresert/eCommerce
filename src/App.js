import React from 'react';
import './App.css';
import { Component } from 'react'
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import NotFound from './NotFound'
import CartList from './CartList'
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import alertify from "alertifyjs";

export default class App extends Component {

  state = {
    currentCategory: "",
    categories: [],
    products: [],
    apiUrl: "http://localhost:3000/",
    cart: []
  }


  changeCurrentCategory = dataForChange => {
    this.setState({ currentCategory: dataForChange.categoryName });
  }

  getCategories = () => {
    fetch(this.state.apiUrl + "categories")
      .then(res => res.json())
      .then(data => this.setState({ categories: data }));
  }

  getCategoryId = (catId) => {
    this.getProducts(catId);
  }

  getProducts = (categoryId) => {
    if (categoryId) {
      fetch(this.state.apiUrl + "products/?categoryId=" + categoryId).then(res => res.json()).then(
        data => this.setState({ products: data }))
    }
    else {

      fetch(this.state.apiUrl + "products").then(res => res.json()).then(
        data => this.setState({ products: data }))
    }
  }

  addToCart = (_product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find(p => p.product.id === _product.id)

    if (addedItem) {
      addedItem.quantity = addedItem.quantity + 1;
    }
    else {
      newCart.push({ product: _product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(_product.productName + " is added to cart")
  }

  removeItemFromCart = (_product) => {
    let newCart = this.state.cart.filter(p => p.product.id !== _product.id);
    this.setState({ cart: newCart });
  }

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  render() {
    return (
      <div className="App">
        <Container>

          <Navi removeItemFromCart={this.removeItemFromCart} cartItems={this.state.cart}></Navi>

          <Row>

            <Col xs="3">
              <CategoryList
                categories={this.state.categories}
                getCategoryId={this.getCategoryId}
                currentCategory={this.state.currentCategory}
                changeCurrentCategory={this.changeCurrentCategory} >
              </CategoryList>
            </Col>

            <Col xs="9">


              <Switch>
                <Route exact path="/" render={props => (

                  <ProductList
                    {...props}
                    products={this.state.products}
                    addToCart={this.addToCart} >
                  </ProductList>)}>

                </Route>

                <Route exact path="/cart" 
                render= {
                  props => (
                    <CartList
                    {...props}
                     cart={this.state.cart}
                     removeItemFromCart={this.removeItemFromCart}
                    ></CartList>
                    
                  )}>

                  </Route>

                <Route component={NotFound}></Route>

              </Switch>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


