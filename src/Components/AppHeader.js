import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Components/AppHeader.css'

export default function AppHeader({showAddTask,showToday,hideToday,showUpcoming,hideUpcoming,showSearch,closeAddTask,hideSearch,showOpacity,hideOpacity}) {
  const fName="Oshith";
  const lName="Roshantha";
    const userName= `${fName} ${lName}`;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div class="HeaderContainer">
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary-dark" bg="dark">
      <Container className='containerHeader'>
        <Navbar.Brand onClick={handleShow}><i class="bi bi-layout-sidebar-inset primary"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto">
            <div className="iconCo"><img className='headerIcon' src='../headerIcon.png'/></div>
          </Nav>
          <Nav className='headerRight'>
              <NavDropdown title={<i className="bi bi-gear gearIcon"></i>} id="basic-nav-dropdown" menuVariant="dark">
              <div className="dropdownText">
                 <i class="bi bi-person-circle userIcon"></i><br/>{userName}
              </div>
              <br/>
              <NavDropdown.Item className='logOut px-6' href='/'><i class="bi bi-box-arrow-left"></i> Log Out</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Offcanvas show={show} onHide={handleClose} className="bg-dark" style={{width: '18%'}}>
        <Offcanvas.Header >
          <Offcanvas.Title className='text-info userWelcome'><br/><i class="bi bi-person-fill-check"></i> Hi,<br/>{userName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <br/>
          <Button onClick={() => { showAddTask(); handleClose();hideSearch();showOpacity() }} variant='dark' className='text' style={{width: '100%',textAlign: 'left'}}><i class="bi bi-plus-circle-fill canavaIconAdd"></i>Add Task</Button>
          <br/>
          <Button onClick={() => { showSearch(); handleClose();closeAddTask();showOpacity() }} className='canavaBtn' variant='dark'style={{width: '100%',textAlign: 'left'}}><i class="bi bi-search canavaIcon"></i>Search</Button>
          <Button onClick={() => {showToday() ; handleClose(); hideUpcoming();}} className='canavaBtn' variant='dark'style={{width: '100%',textAlign: 'left'}}><i class="bi bi-calendar-day canavaIcon"></i>Today</Button>
          <Button onClick={() => {showUpcoming() ; handleClose(); hideToday();}} className='canavaBtn' variant='dark'style={{width: '100%',textAlign: 'left'}}><i class="bi bi-calendar-plus canavaIcon"></i>Upcoming</Button>
        </Offcanvas.Body>
    </Offcanvas>
    </div>
  )
}
