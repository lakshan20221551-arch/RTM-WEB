import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const Home = () => {
    return (
        <div className="home-page overflow-hidden">
            {/* Hero Section */}
            <section className="hero-section home-hero text-center">
                <div className="hero-overlay"></div>
                <Container className="position-relative z-index-1">
                    <Row className="justify-content-center">
                        <Col lg={10} xl={8}>
                            <div className="glass-card floating">
                                <h1 className="display-3 text-white fw-bold mb-4 animate-up">
                                    Mastering <span className="text-gradient fw-bolder">Cooling</span> Comfort
                                </h1>
                                <p className="lead fs-4 mb-5 animate-up text-white opacity-75">
                                    Elite air conditioning solutions for modern living.
                                    <br className="d-none d-md-block" />
                                    Experience silence, efficiency, and perfect climate control.
                                </p>
                                <div className="d-flex justify-content-center gap-3 animate-up flex-wrap">
                                    <Button as={Link} to="/contact" className="btn-primary-custom px-5">Get Started</Button>
                                    <Button as={Link} to="/services" className="btn-secondary-custom px-5">Explore Services</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Float Stats Strip */}
            <FadeIn delay={200}>
                <div className="bg-navy py-4 position-relative" style={{ marginTop: '-40px', zIndex: 10 }}>
                    <Container>
                        <Row className="text-center text-white g-4 justify-content-center">
                            {[
                                { label: 'Emergency Service', value: '24/7' },
                                { label: 'Happy Clients', value: '5k+' },
                                { label: 'Experience', value: '15 Years' },
                                { label: 'Warranty', value: '100%' }
                            ].map((stat, i) => (
                                <Col xs={6} md={3} key={i}>
                                    <h3 className="fw-bold mb-0 text-red">{stat.value}</h3>
                                    <small className="text-uppercase text-white opacity-50 fw-bold">{stat.label}</small>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </FadeIn>

            {/* Creative Services */}
            <section className="section-padding bg-grey position-relative">
                <Container>
                    <FadeIn direction="up">
                        <div className="text-center mb-5">
                            <h6 className="text-red fw-bold text-uppercase letter-spacing-2">What We Do</h6>
                            <h2 className="display-5 fw-bold text-navy">Premium Cooling Services</h2>
                        </div>
                    </FadeIn>
                    <Row className="g-4">
                        {[
                            { title: 'Smart Installation', icon: 'bi-cpu', text: 'Next-gen systems installed with precision for maximum efficiency.' },
                            { title: 'Rapid Repair', icon: 'bi-speedometer2', text: 'Diagnosis and repair in record time, available round the clock.' },
                            { title: 'Eco Maintenance', icon: 'bi-tree', text: 'Sustainable tuning to lower your carbon footprint and bills.' }
                        ].map((s, i) => (
                            <Col md={4} key={i}>
                                <FadeIn delay={i * 150} direction="up">
                                    <Card className="h-100 card-custom p-4 border-0">
                                        <div className="card-icon mb-4"><i className={`bi ${s.icon}`}></i></div>
                                        <h3 className="h4 fw-bold mb-3">{s.title}</h3>
                                        <p className="text-muted mb-4">{s.text}</p>
                                        <Link to="/services" className="stretched-link text-decoration-none fw-bold d-flex align-items-center">
                                            Discover <i className="bi bi-arrow-right ms-2"></i>
                                        </Link>
                                    </Card>
                                </FadeIn>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Modern Feature Section */}
            <section className="section-padding overflow-hidden">
                <Container>
                    <Row className="align-items-center g-5">
                        <Col lg={6} className="position-relative">
                            <FadeIn direction="right">
                                <div className="d-none d-lg-block position-absolute rounded-circle" style={{ width: '450px', height: '450px', top: '-15%', left: '-15%', zIndex: -1, background: 'radial-gradient(circle, rgba(220, 53, 69, 0.08) 0%, rgba(220, 53, 69, 0) 70%)' }}></div>
                                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Professional Technician" className="img-fluid rounded-4 shadow-lg position-relative z-index-1" />
                                <div className="bg-white p-4 rounded-4 shadow-lg position-relative mt-n5 ms-4 ms-lg-5 floating" style={{ maxWidth: '300px', zIndex: 2 }}>
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="bi bi-star-fill text-warning fs-4 me-2"></i>
                                        <span className="fw-bold fs-5">4.9/5 Rating</span>
                                    </div>
                                    <p className="mb-0 small text-muted">"Best service I've ever had. Truly professional!" - <span className="fw-bold text-navy">Jane D.</span></p>
                                </div>
                            </FadeIn>
                        </Col>
                        <Col lg={6}>
                            <FadeIn direction="left">
                                <h2 className="display-5 fw-bold mb-4">Why Ratna Technical?</h2>
                                <p className="lead text-muted mb-5">
                                    We combine old-school workmanship with cutting-edge technology to deliver the best HVAC experience in the city.
                                </p>

                                <div className="d-flex flex-column gap-4">
                                    {[
                                        { head: 'Certified Experts', sub: 'Our team is NATE certified and constantly trained on new tech.', icon: 'bi-award' },
                                        { head: 'Transparent Pricing', sub: 'No hidden fees. You approve the price before we start.', icon: 'bi-tag' },
                                        { head: 'Satisfaction Guaranteed', sub: 'If you are not 100% happy, we make it right.', icon: 'bi-emoji-smile' }
                                    ].map((item, i) => (
                                        <div className="d-flex align-items-start" key={i}>
                                            <div className="flex-shrink-0 bg-navy-light text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                                                <i className={`bi ${item.icon} fs-5`}></i>
                                            </div>
                                            <div>
                                                <h5 className="fw-bold mb-1">{item.head}</h5>
                                                <p className="text-muted mb-0">{item.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Button as={Link} to="/about" className="btn-primary-custom mt-5">Meet The Team</Button>
                            </FadeIn>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* CTA Banner */}
            <section className="py-5 bg-navy text-white text-center position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{ background: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
                <Container className="position-relative z-index-1">
                    <FadeIn direction="up">
                        <Row className="justify-content-center">
                            <Col lg={8}>
                                <h2 className="fw-bold mb-3 text-white">Ready for Perfect Comfort?</h2>
                                <p className="fs-5 opacity-75 mb-4 text-white">Schedule your service today and get 10% off your first repair.</p>
                                <Button as={Link} to="/contact" className="btn btn-light rounded-pill px-5 py-3 fw-bold text-navy shadow-lg">Book Appointment</Button>
                            </Col>
                        </Row>
                    </FadeIn>
                </Container>
            </section>
        </div>
    );
};

export default Home;
