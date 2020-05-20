import React from 'react';
import '../styles/ContactPage.css'   
import {Prompt} from 'react-router-dom'

class ContactPage extends React.Component {

state ={

    value:"",
}

handleTextAreaChange =(e)=>{

const value = e.target.value
console.log(value);
this.setState ({

    value
})

}

handleFormSubmit =(e)=>{

e.preventDefault()
console.log('wyslij');

this.setState ({

    value:""
})

}


render(){
    return ( 
        
<div className="contact">


<form action="" onSubmit={this.handleFormSubmit}>
<div>Napisz do nas</div>
<textarea placeholder="napisz wiadomość"  name="textarea" id="" value={this.state.value} onChange={this.handleTextAreaChange}></textarea> <br/>
<button >Wyslij</button>
</form>
<Prompt
when={this.state.value!=""}
message='Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę'

/>
</div>



    );}
}
 
export default ContactPage;


// cols="30" rows="10" 