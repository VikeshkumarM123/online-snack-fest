// import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import Navigationbar from './Navigationbar';
import './Login.css';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  // let credentials='';
  // let setCredentials='';
  // const Login = () => {
  //   const [credentials, setCredentials] = useState({
  //     username: '',
  //     password: '',
  //   });
  // }
    // const handleInputChange = (e) => {
    //   const { name, value } = e.target;
    //   setCredentials((prevCredentials) => ({
    //     ...prevCredentials,
    //     [name]: value,
    //   }));
    // };
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log('Submitted:', credentials);
    //   // Add your authentication logic here
    // };
     const navigate=useNavigate();
     const sign=(e)=>{
      navigate('/SignIn');
     }
    return (
      <>
      <div class="image" style={{backgroundImage:'url("background.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
      <Navigationbar/>
      <div className='text-center' style={{marginTop:'165px'}}>
      <div className="container">
        <h1 style={{color:'white'}}>Login Form</h1>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <Form style={{backgroundImage:'url("./Images/LoginPageImage.jpg")',border:'3px solid darkBlue',borderRadius:'20px',boxShadow:'4px 4px 4px 4px skyblue',height:'15rem',color:'darkblue'}}>
              <Form.Group controlId="formUsername" className='mb-3'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text" className='w-50'style={{margin:'auto'}}
                  placeholder="Enter your username"
                  name="username"
                  // value={credentials.username}
                  // onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formPassword" className='mb-2'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                 className='w-50'
                  type="password"
                  placeholder="Enter your password"
                  name="password"style={{margin:'auto'}}
                  // value={credentials.password}
                  // onChange={handleInputChange}
                />
              </Form.Group>
              <div class="text-center">
              {/* <Button variant="outline-success">Success</Button>{' '} */}
                  <button type="button" class="btn btn-success">Login</button>
                  <button type="button" class="btn btn-success" style={{marginLeft:'4px'}} onClick={()=>sign()}>SignIn</button>
                </div>
            </Form>
          </div>
        </div>
      </div>
      </div>
      </div>
      </>
    );
  };