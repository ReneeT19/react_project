import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import {Helmet} from 'react-helmet';
import { Card, Accordion, NavItem, Form, FormControl, Button, NavDropdown, MenuItem } from 'react-bootstrap';
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import {
    MDBContainer,
    MDBCol,
    MDBCollapse,
    MDBCard,
    MDBCardBody,
    MDBCollapseHeader,
    MDBCardImage,
    MDBRow,
    MDBView
  } from 'mdbreact';

class FAQ extends Component {
    // state={
    //     collapseID: "collapse3"
    //   }
      
    //   toggleCollapse = collapseID => () =>
    //   this.setState(prevState => ({
    //     collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    //   }));
      
      render() {
          return (
              <div className="list-books-title">
                   <h1>Frequently Asked Questions</h1>
              <MDBContainer>
            <MDBContainer className='md-accordion mt-5'>
            <MDBCard style={{ backgroundColor: 'transparent' }}>
        
            <Accordion defaultActiveKey="0">
            <Card className='mt-3'>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                What are the bestsellers?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Professional JavaScript for Web Developers; A Poetry Handbook</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                How do I check out books?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Add books to your shopping cart and click on check out button and click place the order button on the next page</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          </MDBCard>
          </MDBContainer>
          </MDBContainer>
          </div>
          );
        }
      }
export default FAQ