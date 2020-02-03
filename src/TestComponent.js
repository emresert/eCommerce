import React, { Component } from 'react'
import { Button } from 'reactstrap'
import TestConsumer from './Context'



export default class TestComponent extends Component {

    render() {
     
        return <TestConsumer>
            {
               
                value => {
                    
                 
                    console.log(value)

                    return (
                        <div>
                        
                        <Button onClick={value.method}>Tıkla</Button>
                        
                            {value.state.map(data => (
                             <h3 key={data.id} >
                                 {data.userName}
                             </h3>
                            ))}

                        </div>
                    )

                }
            }
        </TestConsumer>

    }
}
