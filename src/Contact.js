import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
export default function Contact() {
// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement your form submission logic here
//     console.log('Form submitted:', formData);
//     // You may want to send the data to your server or perform other actions
//   };

  return (
    <>
     <div className='bg-Image'style={{backgroundImage:'url("background.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
    <Navigationbar/>
    <div className='Contact' style={{marginTop:'180px'}}>
    <Container className="mt-4" style={{color:'white'}}>
      <Row>
        <Col md={6}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns, feel free to contact us using the form below.
          </p>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                className='mb-3'
                // value={formData.message}
                // onChange={handleChange}
                required
              />
            </Form.Group>
             <div className='text-center'>
            <Button variant="success" type="submit">
              Submit
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
    <Footer/>
    </>
  );
};
