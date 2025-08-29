import React,{useState} from 'react'
import '../Styles/Contact.css'
import axios from 'axios'
export default function Contact() {
  let [name,setName]=useState("");
  let[email,setEmail]=useState("");
  let[phone,setPhone]=useState("");
  let[message,setMessage]=useState("");

  let data={name,email,phone,message};

  function AddData(){
    axios.post('http://localhost:3100/Data',data)
    .then((res)=>{
       console.log(res);
       alert("Data Added Sucessfull")
    })
    .catch((err)=>{
      console.log(err);
      alert("Page not found ")
      
    })
       
    }
  
  
  return (
    <div className='contact' id='contact'>
        <h1 id='z1'>Contact </h1>
        <h2 id='c1'>Feel free to reach out to me for any questions or opportunities!</h2>
        <div className="contact1">
        <div className="c10">

        <form onSubmit={AddData} action="" id='cont'>
            <label htmlFor="">Name :</label> 
            <input type="text"  value={name}  onChange={(e)=>{setName(e.target.value)}}  placeholder='Enter The Name'  required/> <br />
            <label htmlFor="">Email:</label> 
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter The Email'  required/> <br /> 
            <label htmlFor="">Phone :</label>
            <input pattern="[0-9]{10}" type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter The Phone'  required/> <br />
          
            <label htmlFor="">Message :</label> 
            <input type="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder=' Enter Text'  required/><br />
            <button id='b20'>Sumbit</button>
            </form>
    
          </div>
         
        </div>
         
    </div>
  )
}

