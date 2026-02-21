import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="contact-page">
            <header className="contact-hero hero-section text-white text-center">
                <div className="hero-overlay"></div>
                <Container className="position-relative z-index-1">
                    <h1 className="display-4 fw-bold">Contact Us</h1>
                    <p className="lead">Get your free quote or book a service today.</p>
                </Container>
            </header>

            <section className="section-padding">
                <Container>
                    <Row className="g-5">
                        <Col lg={4}>
                            <h3 className="fw-bold mb-4">Get In Touch</h3>
                            <div className="mb-4 d-flex align-items-start">
                                <i className="bi bi-geo-alt-fill text-red fs-3 me-3"></i>
                                <div>
                                    <h5 className="fw-bold mb-1">Our Address</h5>
                                    <p className="text-muted">123 Cooling St, Winter Green, CA 90210</p>
                                </div>
                            </div>
                            <div className="mb-4 d-flex align-items-start">
                                <i className="bi bi-telephone-fill text-red fs-3 me-3"></i>
                                <div>
                                    <h5 className="fw-bold mb-1">Phone</h5>
                                    <p className="text-muted">+1 (234) 567-890</p>
                                </div>
                            </div>
                            <div className="mb-4 d-flex align-items-start">
                                <i className="bi bi-envelope-fill text-red fs-3 me-3"></i>
                                <div>
                                    <h5 className="fw-bold mb-1">Email</h5>
                                    <p className="text-muted">hello@ratnatechnical.com</p>
                                </div>
                            </div>
                            <hr className="my-5" />
                            <h5 className="fw-bold mb-3">Service Hours</h5>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2">Monday - Friday: 8:00 AM - 10:00 PM</li>
                                <li className="mb-2">Saturday: 9:00 AM - 6:00 PM</li>
                                <li className="mb-2 text-red fw-bold">Emergency Service: 24/7</li>
                            </ul>
                        </Col>

                        <Col lg={8}>
                            <Card className="p-5 border-0 shadow-lg rounded-4">
                                <h3 className="fw-bold mb-4">Send a Message</h3>
                                <Form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                                    <Row className="g-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="small fw-bold">Name</Form.Label>
                                                <Form.Control type="text" placeholder="John Doe" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="small fw-bold">Email</Form.Label>
                                                <Form.Control type="email" placeholder="john@example.com" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="small fw-bold">Phone</Form.Label>
                                                <Form.Control type="tel" placeholder="+1..." required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="small fw-bold">Service Type</Form.Label>
                                                <Form.Select required>
                                                    <option>Installation</option>
                                                    <option>Repair</option>
                                                    <option>Maintenance</option>
                                                    <option>Other</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group>
                                                <Form.Label className="small fw-bold">Message</Form.Label>
                                                <Form.Control as="textarea" rows={5} placeholder="How can we help you?" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Button type="submit" className="btn-primary-custom w-100 py-3 mt-2">Send Message Now</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Map Section */}
            <section className="bg-grey py-0">
                <div style={{ width: '100%', height: '450px', overflow: 'hidden' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.579464522432!2d79.8808!3d6.8208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a666666666b%3A0x6666666666666666!2s42%20Jayasumanarama%20Rd%2C%20Dehiwala-Mount%20Lavinia!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk&q=42+Jayasumanarama+Rd,+Rathmalana,+Sri+Lanka"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ratna Technical Maintenance Location"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
