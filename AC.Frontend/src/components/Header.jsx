import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [showBooking, setShowBooking] = useState(false);

    return (
        <>
            <Navbar expand="lg" variant="dark" sticky="top" className="navbar-custom">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 d-flex align-items-center">
                        <img src="/logo.jpg" alt="Ratna Technical Logo" className="me-2" style={{ height: '40px' }} />
                        Ratna Technical Maintainance
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={NavLink} to="/testimonials">Reviews</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/faq">FAQ</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                            <Button
                                className="ms-lg-3 px-4 btn-primary-custom"
                                onClick={() => setShowBooking(true)}
                            >
                                <i className="bi bi-calendar-check me-2"></i>Book Online
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Mock Booking Modal */}
            <Modal show={showBooking} onHide={() => setShowBooking(false)} centered>
                <Modal.Header closeButton className="bg-navy text-white">
                    <Modal.Title>Schedule an Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Form onSubmit={(e) => { e.preventDefault(); alert('Booking request sent!'); setShowBooking(false); }}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Select Service</Form.Label>
                            <Form.Select required>
                                <option value="">Choose...</option>
                                <option>AC Installation</option>
                                <option>AC Repair</option>
                                <option>Maintenance & Tune-up</option>
                                <option>Duct Cleaning</option>
                                <option>Gas Refill</option>
                                <option>Service</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Preferred Date</Form.Label>
                            <Form.Control type="date" required />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label className="fw-bold">Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="+94 70 234 5678" required />
                        </Form.Group>
                        <Button type="submit" className="w-100 btn-primary-custom py-3">Confirm Booking</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Header;
