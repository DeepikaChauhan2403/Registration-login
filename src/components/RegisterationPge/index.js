import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";
import { useEffect } from 'react';



function RegisterationPge() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [coName, setcotName] = useState("");
  const [error, setError] = useState("");
  const [btn1, setBtn1] = useState(true);
  let allUsers = [];

  useEffect(() => {
    if (localStorage.getItem('totalUser')) {

      allUsers = JSON.parse(localStorage.getItem('totalUser'));
      console.log("use effect")
      console.log(allUsers);
    }
  },[]);

  let user;

  function registration() {
    if (!(name && phone && email && password && coName)) {
      setError("Please enter all the fields")
    }
    else {
      user = {
        name: name,
        phone: phone,
        email: email,
        password: password,
        coName: coName,
      }

      let flag=false;
      if (localStorage.getItem('totalUser')) {

        allUsers = JSON.parse(localStorage.getItem('totalUser'));
        allUsers.forEach((user) => {
          if (user.email == email) {
            flag=true;
            setError("Email already exits")
            setBtn1(true);
          }
        })
      }

      if(flag==false){
        allUsers.push(user);
        console.log(allUsers);
        localStorage.setItem('totalUser', JSON.stringify(allUsers))
        localStorage.setItem('currUser', JSON.stringify(user))

        setError("")
        setBtn1(false);
      }
    }



    console.log("hi")
  }

  return (
    <div className='registerationPge'>
      <h1 className='headind1'>Create your Popx account</h1>
      <br />
      <p className='headind2'>Create your </p>
      <p className='headind2'>Popx account</p>
      <form>
        <lable for='name'>Full Name<span>*</span></lable>
        <input id='name' type='text' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} required />

        <lable for='phone'>Phone No.<span>*</span></lable>
        <input id='phone' type='number' placeholder='Enter Your Phone Number' onChange={(e) => setPhone(e.target.value)} required />

        <lable for='email'>Email <span> *</span></lable>
        <input id='email' type='text' placeholder='Enter Your Email Adderess' onChange={(e) => setEmail(e.target.value)} required />

        <lable for='password'>Password<span>*</span></lable>
        <input id='password' type='password' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} required />

        <lable for='co_name'>Co. Name<span>*</span></lable>
        <input id='co_name' type='text' placeholder='Enter Your Company Name' onChange={(e) => setcotName(e.target.value)} required />

        <div className='agency'>
          <div className='agency-tittle'>Are you an Agency?<span>*</span></div>
          <br />

          <div className='checkbox'>
            <input type="radio" className='input_radio' name="gender" value="male" />
            <label className='lable_radio'> Yes </label>

            <input type="radio" className='input_radio' name="gender" value="male" />
            <label className='lable_radio' > No </label>
          </div>
          <br />
          {
            btn1 ? (
              <button className='regBtn' onClick={registration}>Create Account </button>
            ) : (
              <Link to="/profile"> <button className='regBtn'> Confirm Create Account </button></Link>
            )
          }


        </div>
      </form>

      {
        error && <div className='para'><p> {error} </p></div>
      }
    </div>
  );
}

export default RegisterationPge;

{/* <Link to="/profile">Go to Profile</Link> */ }