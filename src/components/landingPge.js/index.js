import {Routes, Route, Link } from 'react-router-dom'
import "./styles.css";
import Button from '../Button';


function LandingPage() {
    return (
      <div className='landingPage'>
      <div className='main'>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>consectetur adipiscing elit..</p>
        <br/>
        <Link to="/create-account"><Button text={'Create Account'} darlcolor={true}/></Link>
        <br/>
        <Link to="/login"><Button text={'Already Registered? Login'} darlcolor={false}/></Link>
      </div>
      </div>
    )
}

export default LandingPage;

{/* <nav>
          <ul>
            <li>
              <Link to="/create-account">Create Account</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}