import React from 'react';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import { Container, Row, Col, Image, Button, Carousel, ListGroup, Card } from 'react-bootstrap';
export default function ProductPage() {
  const reviews = [
    { id: 1, user: 'Customer 1', comment: 'Great product! Highly recommended.',rating:'3.5' },
    { id: 2, user: 'Customer 2', comment: 'Awesome quality and fast shipping.',rating:'4.5' },
    // Add more reviews as needed
  ];

  const relatedProducts = [
    { id: 101, name: 'Related Product 1', price: 79.99, image: 'PP.jpg' },
    { id: 102, name: 'Related Product 2', price: 129.99, image: 'PP.jpg' },
    { id: 103, name: 'Related Product 2', price: 1009.23, image: 'PP.jpg' },
    { id: 104, name: 'Related Product 2', price: 555.44, image: 'PP.jpg' },
    // Add more related products as needed
  ];
  return (
    <>
    <Navigationbar/>
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="PP.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="PP.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            {/* Add more Carousel.Items for additional images */}
          </Carousel>
        </Col>
        <Col md={6}>
          <h2>Product Name</h2>
          <p>Product description goes here.</p>
          <p>Price: Rs.499.00</p>
          <p>Availability: In Stock</p>
          <p>Current Rating: 4.5/5</p>
          <Button variant="danger" className="mb-3">
           Buy Now
          </Button>
          <Button variant="danger" className="mb-3" style={{marginLeft:'4px'}}>
            Add to Cart
          </Button>
          <p>
            <strong>Features:</strong>
          </p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            {/* Add more features as needed */}
          </ul>
        </Col>
      </Row>

      {/* Product Specifications */}
      <Row className="mt-4">
        <Col>
          <h3>Specifications</h3>
          <ListGroup>
            <ListGroup.Item>Spec 1: Value</ListGroup.Item>
            <ListGroup.Item>Spec 2: Value</ListGroup.Item>
            <ListGroup.Item>Spec 3: Value</ListGroup.Item>
            {/* Add more specifications as needed */}
          </ListGroup>
        </Col>
      </Row>
      {/* Product Description */}
      <Row className="mt-4">
        <Col>
          <h3>Description</h3>
          <p>
           This is the area used for describing the ProductDetails like that.
          </p>
        </Col>
      </Row>

      {/* Customer Reviews */}
      <Row className="mt-4">
        <Col>
          <h3>Customer Reviews</h3>
          <ListGroup>
            {reviews.map((review) => (
              <ListGroup.Item key={review.id}>
                <strong>{review.user}:</strong> {review.comment} (Rating: {review.rating}/5)
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      {/* Related Products */}
      <Row className="mt-4">
        <Col>
          <h3>Related Products</h3>
          <Row>
            {relatedProducts.map((product) => (
              <Col key={product.id} sm={6} md={4} lg={3} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: Rs:{product.price}</Card.Text>
                    <Button variant="danger">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};