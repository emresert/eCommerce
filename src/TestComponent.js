import React, { Component } from 'react'

import TestConsumer from './Context'


export default class TestComponent extends Component {
 
   // Tıkladığımızda değişecek state değeri tanımlandı 
    state = {
        isVisible : true
    }
   // Tıkladığımızda set edicek setstate fonksiyonu için metod oluşturuldu
   onClickTest = (e) => {
    this.setState({isVisible : !this.state.isVisible})
    console.log(this.state.isVisible)
   }
 
   // Test style datası tanımlandı 
   testStyle={
       display:"none"
   }

   render() {
    return <TestConsumer>
         {
             value =>  {
                 // value'nin içindeki cart state dizisini al
                console.log(value)

                 return (
                   <div>

       
                   </div>
               )

             }
         }
     </TestConsumer>



     
   }
}
