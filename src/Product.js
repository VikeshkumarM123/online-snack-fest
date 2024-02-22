import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
export const ProductDetails=[
  {
    id:1,
    img:"./Images/Image1.png",
    title:"Jilaebi",
    desc:"Jilebis are Indian desserts made by deep-frying a wheat flour (maida flour) batter in pretzel or circular shapes, which are  soaked in sugar syrup.",
  },
  {
    id:2,
    img:"./Images/Image2.png",
    title:"Laddoo",
    desc:"Jilebis are Indian desserts made by deep-frying a wheat flour (maida flour) batter in pretzel or circular shapes, which are  soaked in sugar syrup.",
  },
  {
    id:3,
    img:"./Images/Image3.png",
    title:"Palkova",
    desc:"Jilebis are Indian desserts made by deep-frying a wheat flour (maida flour) batter in pretzel or circular shapes, which are  soaked in sugar syrup.",
  },
  {
    id:4,
    img:"./Images/Image4.png",
    title:"Halwa",
    desc:"This Indian Halwa recipe tests the many meanings of the word 'simple'. This wheat flour pudding is simple in the sense that it uses only 4 basic ingredients. ",
  },
  {
    id:5,
    img:"./Images/Image5.png",
    title:"Mysore Pak",
    desc:"Mysore pak is an Indian sweet prepared in ghee. It originated in the city of Mysore, one of the major cities in the Indian state of Karnataka. ",
  },
  {
    id:6,
    img:"./Images/Image6.png",
    title:"GulabJamun",
    desc:"There are Ladduus",
  },
  {
    id:7,
    img:"./Images/Image7.png",
    title:"Rasagulla",
    desc:"There are Ladduus",
  },
  {
    id:8,
    img:"./Images/Image8.png",
    title:"Adhirasam",
    desc:"There are Ladduus",
  },
  {
    id:9,
    img:"./Images/Image9.png",
    title:"Mixture",
    desc:"There are Ladduus",
  },
  {
    id:10,
    img:"./Images/Image10.png",
    title:"Karasev",
    desc:"There are Ladduus",
  }
];
export default function Product() {
  return (
    <div className='Product' style={{marginTop:'80px',marginBottom:'20px'}}>
        <Row xs={1} md={5}>
      {ProductDetails.map(card => (
        <Col key={card.id}>
          <Card style={{boxShadow:'2px 2px 2px 2px red'}} className='g-5 mt-5'>
            <img src={card.img} alt='Card' style={{height:'160',width:'306'}}/>
            <Card.Body>
              <Card.Title style={{backgroundColor:'lightgreen',textAlign:'center'}}>{card.title}</Card.Title>
              {/* <Card.Text style={{backgroundColor:'palegreen'}}>{card.desc}</Card.Text> */}
              <div className='text-center'>
              <Link to={'/ProductPage'}><button type="button" class="btn btn-danger">View</button></Link>
              </div>
            </Card.Body>
            <style>
              {`
              .card:hover{
                box-shadow: 4px 4px 4px 4px red;
                transform:scale(1.03);
                transition:all 0.2s;
              }
              `}
            </style>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};
