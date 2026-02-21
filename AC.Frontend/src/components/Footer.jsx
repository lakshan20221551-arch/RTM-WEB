import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-navy text-white py-5 mt-5">
            <Container>
                <Row className="g-4">
                    <Col lg={4} md={6}>
                        <div className="d-flex align-items-center mb-4">
                            <img src="/logo.jpg" alt="Ratna Technical Logo" className="me-2 rounded-circle" style={{ height: '40px', opacity: 0.9 }} />
                            <h4 className="text-red">Ratna <span className="text-red">Technical</span></h4>
                        </div>
                        <p className="opacity-75">
                            Providing expert AC installation, repair, and maintenance services. Your comfort is our priority.
                        </p>
                        <div className="d-flex gap-3 mt-4">
                            <a href="#" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-white fs-4"><i className="bi bi-twitter-x"></i></a>
                            <a href="#" className="text-white fs-4"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </Col>
                    <Col lg={2} md={6}>
                        <h5 className="fw-bold mb-4">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/">Home</Link></li>
                            <li className="mb-2"><Link to="/services">Services</Link></li>
                            <li className="mb-2"><Link to="/about">About Us</Link></li>
                            <li className="mb-2"><Link to="/testimonials">Reviews</Link></li>
                            <li className="mb-2"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5 className="fw-bold mb-4">Our Services</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/services">AC Installation</Link></li>
                            <li className="mb-2"><Link to="/services">AC Repair</Link></li>
                            <li className="mb-2"><Link to="/services">Maintenance</Link></li>
                            <li className="mb-2"><Link to="/services">Duct Cleaning</Link></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5 className="fw-bold mb-4">Contact Info</h5>
                        <ul className="list-unstyled opacity-75">
                            <li className="mb-2"><i className="bi bi-geo-alt-fill me-2 text-red"></i> 123 Cooling St, Winter Green, CA</li>
                            <li className="mb-2"><i className="bi bi-telephone-fill me-2 text-red"></i> +1 (234) 567-890</li>
                            <li className="mb-2"><i className="bi bi-envelope-fill me-2 text-red"></i> hello@ratnatechnical.com</li>
                            <li className="mb-2"><i className="bi bi-clock-fill me-2 text-red"></i> Mon - Fri: 8am - 10pm</li>
                        </ul>
                    </Col>
                </Row>
                <hr className="my-4 border-secondary" />
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start small">
                        &copy; {new Date().getFullYear()} Ratna Technical Maintainance. All rights reserved.
                    </Col>
                    <Col md={6} className="text-center text-md-end small">
                        <Link to="/legal" className="mx-2">Privacy Policy</Link>
                        <Link to="/legal" className="mx-2">Terms & Conditions</Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
