
import {useState} from 'react';

export default function Contact(){
let [uname, setName]=useState('');
let [email, setEmail]=useState('');
let [message, setMessage]=useState('');
let [missing, setMissing]=useState('');
let [gate1, setGate1]=useState(0);
let [gate2, setGate2]=useState(0);
let [gate3, setGate3]=useState(0);


const handleInputChange = (e) => {

    const { name, value } = e.target;
    
    switch (name){
        case "uname":
            return setName(value);
        case "email":
            return setEmail(value);
        case "message":
           return setMessage(value);
    }

};

const handleMouseLeave= (e) =>{
    let errorMessage="";

    const {name,value}= e.target;
    if (name == "email"){
        if(!value.includes("@") || !value.includes(".com"||".gov"||".edu")){
            errorMessage="The Email entered is not valid";
            return setMissing(errorMessage);
        }
        else{
            return (setMissing(errorMessage),setGate1(1))
        }

    }
    else{
        if(value.length<=0){
            errorMessage="The box in "+name+" has not been filled";
            return setMissing(errorMessage)
        }
        else if(name=='uname'){
            return (setMissing(errorMessage),setGate2(1));
        }
        else{
             return (setMissing(errorMessage), setGate3(1));
        }
    }

   
}

const handleFormSubmit= (e) => {
    e.preventDefault();

    if (gate1==0 || gate2 ==0 || gate3==0){
        alert("one or more forms has not been filled");
    }
    else{
    alert("Message Submitted");
    setName('');
    setEmail('');
    setMessage('');
    setGate1(0);
    setGate2(0);
    setGate3(0);
    }
};

    return(
    <div class="container fs-4">
        <form className='form' onSubmit={handleFormSubmit}> 

        <div class= "row justify-content-center my-3">
            <label class="col-3" for="name">Name:</label>
            <input class="col-3" type="text" id="name" name="uname" 
            value={uname} onChange={handleInputChange} onMouseLeave={handleMouseLeave}></input>
        </div>

        <div class= "row justify-content-center my-3">
        <label class="col-3" for="email">Email:</label>
        <input class="col-3" type="text" id="email" name="email"
         value={email} onChange={handleInputChange} onMouseLeave={handleMouseLeave} ></input>
        </div>


        <div class= "row justify-content-center my-3">
        <label class="col-3" for="message">Message:</label>
        <textarea class="col-3" rows="5" cols="40" name="message" value={message} onChange={handleInputChange} onMouseLeave={handleMouseLeave}/>
        </div>

        <div class= "row justify-content-center my-3">
        <div class ="col-4"> {missing} </div>
        </div>

        <div class= "row justify-content-center my-3">
            <button class="col-1" type="submit"> Submit </button>
        </div>
        </form>
        
        
       
    </div>
    )
}