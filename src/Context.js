import React, { Component } from 'react';
const TestContext = React.createContext();


export class TestProvider extends Component {


    state =
        [{
            id:1,
            userName: "TestName",
            userSurname: "TestSurname",
            age: "20"
        }, 
        {
            id:2,
            userName: "Test2Name",
            userSurname: "Test2SurName",
            age: "30"
        }]
     
  
    onClickTest = ()=>{
      alert("hello")
    }

    render() {
        return (
            
            <TestContext.Provider value={{state:this.state,method:this.onClickTest}} >

                {this.props.children}

            </TestContext.Provider>
        )
    }
}

/* dışarıdan erişilecek consumer nesnesi tanımlandı */
const TestConsumer = TestContext.Consumer;


// dışarıdan state'lere erişilebilmesi için 
// child component tarafından consumer import  edilmelidir.
export default TestConsumer;