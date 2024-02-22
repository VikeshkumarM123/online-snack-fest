import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
export default function About() {
  return (
    <>
    <div class="bg-Image" style={{backgroundImage:'url("background.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
    <Navigationbar/>
    <div className='About' style={{marginTop:'115px'}}>
    <Container className="mt-4" style={{color:'white'}}>
      <Row>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Welcome to our online store! We are dedicated to providing you with the best shopping experience.
          </p>
          <p>
            Our mission is to offer high-quality products and excellent customer service.
          </p>
        </Col>
        <Col md={6}>
          <img src="AboutPage.jpg" alt="About Us" className="img-fluid" />
        </Col>
      </Row>
    </Container>
    </div>
    </div>
    <Footer/>
    </>
  );
};
