import React, { Component } from 'react';

// context nesnesi oluşturuldu 
const TestContext = React.createContext();

// provider kapsulleme yapacak component
// ve bu componentin altında child component'ler
// tanımlanmalıdır. Ayrıca provider çağırılacağı
// component'te import edilmelidir.
// export keyword'u dışarıdan erişilebileceği için
// olmak zorundadır. 
export class TestProvider extends Component {

    // test state  tanımlama
    state = {
        userName:"Emre",
        userSurname:"Sert",
        age:"27"
    }
    
    render() {
        return (
            /* state değerlerimiz prop olarak value prop'u
               ismi ile gönderdik
               Oluşturduğumuz context'in provider metoduna
               prop olarak state ataması yapılmalıdır.
            */
            <TestContext.Provider value={this.state}>

                {/* React tarafından otomatik olarak altındaki
                    componentleri tanıyan yapı. Provider kapsül
                    amacıyla kullanılacağı için aşağıdaki kod
                    kapsadığı bütün componentleri temsil eder.
                */}
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