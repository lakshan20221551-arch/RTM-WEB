import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FadeIn from '../components/FadeIn';

const About = () => {
    return (
        <div className="about-page">
            <header className="about-hero hero-section text-white d-flex align-items-center justify-content-center">
                <div className="hero-overlay"></div>
                <Container className="position-relative z-index-1 text-center">
                    <FadeIn direction="up">
                        <h1 className="display-3 fw-bold mb-3">About Ratna Technical</h1>
                        <p className="lead fs-4 opacity-75">Reliable cooling solutions since 2008.</p>
                    </FadeIn>
                </Container>
            </header>

            <section className="section-padding overflow-hidden">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6}>
                            <FadeIn direction="right">
                                <h6 className="text-red fw-bold text-uppercase letter-spacing-2">Our Story</h6>
                                <h2 className="display-5 fw-bold mb-4"><span className="text-gradient">Our History & Commitment</span></h2>
                                <p className="text-muted fs-5 mb-4">
                                    Ratna Technical Maintainance started as a small family-owned business with a single technician. Today, we are proud to be one of the region's most trusted HVAC partners, operating from our state-of-the-art workshop.
                                </p>
                                <p className="text-muted mb-4">
                                    Our mission is simple: to provide high-quality, energy-efficient cooling solutions that keep our customers comfortable and happy. We believe in honest pricing, meticulous workmanship, and a customer-first approach.
                                </p>
                                <div className="d-flex gap-4 mt-5">
                                    <div className="text-center">
                                        <h3 className="fw-bold text-red mb-0">15+</h3>
                                        <small className="text-muted fw-bold">Years Experience</small>
                                    </div>
                                    <div className="text-center border-start ps-4">
                                        <h3 className="fw-bold text-red mb-0">5k+</h3>
                                        <small className="text-muted fw-bold">Happy Clients</small>
                                    </div>
                                    <div className="text-center border-start ps-4">
                                        <h3 className="fw-bold text-red mb-0">20+</h3>
                                        <small className="text-muted fw-bold">Experts</small>
                                    </div>
                                </div>
                            </FadeIn>
                        </Col>
                        <Col lg={6} className="position-relative">
                            <FadeIn direction="left">
                                <div className="position-absolute top-0 end-0 bg-navy opacity-10 rounded-4" style={{ width: '100%', height: '100%', transform: 'translate(20px, 20px)', zIndex: -1 }}></div>
                                <img src="https://images.unsplash.com/photo-1581092921461-7d1568202301?w=1200&q=80" alt="Our Modern Workshop" className="img-fluid rounded-4 shadow-lg position-relative z-index-1" />
                                <div className="position-absolute bottom-0 start-0 bg-white p-3 rounded-top-end-4 shadow-sm z-index-2 ms-4 mb-n2 d-none d-md-block">
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="bi bi-geo-alt-fill text-red fs-3"></i>
                                        <div>
                                            <p className="fw-bold mb-0 text-navy">Central Workshop</p>
                                            <small className="text-muted">Fully Equipped Facility</small>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section-padding bg-navy text-white text-center">
                <Container>
                    <h2 className="display-5 mb-5">Our Core Certifications</h2>
                    <Row className="g-4 justify-content-center">
                        {['HVAC Licensed', 'Safety First Certified', 'Energy Star Partner', 'NATE Certified'].map((c, i) => (
                            <Col md={3} key={i}>
                                <div className="p-4 border border-light border-opacity-10 rounded-3 bg-white bg-opacity-10">
                                    <i className="bi bi-patch-check-fill fs-1 text-red mb-3 d-block"></i>
                                    <span className="fw-bold">{c}</span>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="section-padding">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold">Meet Our Team</h2>
                        <div className="title-underline mx-auto"></div>
                    </div>
                    <Row className="g-4">
                        {[
                            { name: 'John Doe', role: 'Chief Engineer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop' },
                            { name: 'Sarah Smith', role: 'Operations', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop' },
                            { name: 'Mike Ross', role: 'Support Lead', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' }
                        ].map((m, i) => (
                            <Col md={4} key={i}>
                                <Card className="card-custom border-0 h-100 p-3">
                                    <img src={m.img} alt={m.name} className="img-fluid rounded-3 mb-3" style={{ height: '300px', objectFit: 'cover' }} />
                                    <h4 className="fw-bold mb-1">{m.name}</h4>
                                    <p className="text-red fw-bold small">{m.role}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default About;
