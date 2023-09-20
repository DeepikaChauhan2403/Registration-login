import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn1, setBtn1] = useState(true);
  const [err, setErr] = useState("");

  var allUsers = [];

  function login() {
    if (!(email && password )) {
      setErr("Please enter all the fields")
      return;
    }

    let flag=false;
    let currUser;

    if(localStorage.getItem('totalUser')){
      allUsers=JSON.parse(localStorage.getItem('totalUser'));


      allUsers.forEach((user)=>{
            if(user.email==email){
                flag=true;
                currUser=user;
                localStorage.setItem('currUser',JSON.stringify(user));
            }
        })

        if(flag==true && password!=currUser.password){
          setErr("Wrong Password!")
          return;
        }

        if(flag==false){
          setErr("User does not Exist!")
          return;
        }

        setErr("")
        setBtn1(false);

    }
  }

  return (
    <div className='loginPge'>
      <h1 className='headind1'>Signin to your PopX account</h1>
      <br />
      <p className='headind2'>Signin to your </p>
      <p className='headind2'>PopX account</p>


      <div className='para'>
        <p>Lorem ipsum dolor sit amet,</p>
        <p>consectetur adipiscing elit,</p>
      </div>

      <lable for='email'>Email <span> *</span></lable>
      <input id='email' type='text' placeholder='Enter Your Email Adderess' onChange={(e)=>setEmail(e.target.value)}/>

      <lable for='password'>Password<span>*</span></lable>
      <input id='password' type='password' placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} />

      <br />
      <br/>
      {
            btn1 ? (
              <button className='loginBtn' onClick={login}>Login </button>
            ) : (
              <Link to="/profile"> <button className='loginBtn'> Confirm Login </button></Link>
            )
          }
<br/>
{
        err && <div className='para'><p> {err} </p></div>
      }
    </div>
  );
}

export default Login;

{/* <Link to="/profile">Go to Profile</Link> */ }