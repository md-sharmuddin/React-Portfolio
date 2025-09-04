import React, { useState } from 'react'
import '../Styles/Contact.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'


export default function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [message, setMessage] = useState("");

  let data = { name, email, phone, message };

  function AddData(e) {
    e.preventDefault(); // ✅ prevent page refresh

    axios.post('http://localhost:3100/Data', data)
      .then((res) => {
        console.log(res);
        toast.success(" Data Added Successfully!");
        // Clear form fields after success
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        toast.error("  Failed to submit. Try again!");
      });
  }

  return (
    <div className='contact' id='contact'>
      <h1 id='z1'>Contact </h1>
      <h2 id='c1'>Feel free to reach out to me for any questions or opportunities!</h2>
      <div className="contact1">
        <div className="c10">

          <form onSubmit={AddData} id='cont'>
            <label>Name :</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter The Name' required /> <br />
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter The Email' required /> <br />
            <label>Phone :</label>
            <input pattern="[0-9]{10}" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter The Phone' required /> <br />
            <label>Message :</label>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter Text' required /><br />
            <button id='b20' type="submit">Submit</button>
          </form>

        </div>
      </div>
      {/* ✅ Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  )
}
