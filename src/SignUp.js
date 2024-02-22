import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Navigationbar from './Navigationbar';
export default function SignUp() {
// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };
  return (
    <>
    <div className='Parent' style={{backgroundImage:'url("background.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
    <Navigationbar/>
    <div className="container mt-5 text-center">
      <h2 style={{color:'white'}}>Sign In</h2>
      <Form style={{backgroundImage:'url("./Images/LoginPageImage.jpg")',border:'3px solid darkBlue',borderRadius:'20px',boxShadow:'4px 4px 4px 4px skyblue',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'25rem',color:'darkblue'}}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
          className='w-25'
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            required style={{margin:'auto'}}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
          className='w-25'
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            required style={{margin:'auto'}}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          className='w-25'
            type="email"
            placeholder="Enter your email"
            name="email"
            required style={{margin:'auto'}}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
          className='w-25 mb-3'
            type="password"
            placeholder="Enter your password"
            name="password"
            required style={{margin:'auto'}}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
    </div>
    </>
  );
};
