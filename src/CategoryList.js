import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {

 
    render() {
        return (
            <div className="catLeftList mt-4">

                 
                <ListGroup>
                    {this.props.categories.map(data => (
                        <ListGroupItem 
                            active={data.categoryName === this.props.currentCategory?true:false}
                            key={data.id}
                            onClick={() => {this.props.changeCurrentCategory(data);this.props.getCategoryId(data.id)}
                                }
                        >
                            {data.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>

                

            </div>
        )
    }
}
