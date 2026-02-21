import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const Services = () => {
    const services = [
        {
            title: 'AC Installation',
            icon: 'bi-box-seam',
            desc: 'Expert installation of central air, split systems, and smart thermostats for maximum efficiency.',
            img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80'
        },
        {
            title: 'Rapid Repair',
            icon: 'bi-tools',
            desc: 'Fast diagnosis and repair for all brands. We fix leaks, compressor issues, and fan problems.',
            img: 'https://img.freepik.com/free-photo/young-worker-pointing-alarm-clock-uniform_176474-36060.jpg?semt=ais_user_personalization&w=740&q=80'
        },
        {
            title: 'Maintenance Plans',
            icon: 'bi-shield-check',
            desc: 'Regular scheduled maintenance to extend the life of your unit and prevent costly breakdowns.',
            img: 'data:image/jpeg;base64,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'
        },
        {
            title: 'Duct Cleaning',
            icon: 'bi-wind',
            desc: 'Improve your indoor air quality by removing dust, allergens, and debris from your ventilation system.',
            img: 'https://images.unsplash.com/photo-1599700403969-f77b3aa74837?w=800&q=80'
        },
        {
            title: 'Emergency Services',
            icon: 'bi-clock-history',
            desc: 'Available 24/7 for those unexpected breakdowns during the hottest summer days and nights.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkMyhkDwKIRtBk9LKvHn9ah-bxj7_Pc-BTQ&s'
        },
        {
            title: 'Smart Home Integration',
            icon: 'bi-phone',
            desc: 'Upgrade your home with smart thermostats and zoning systems for ultimate comfort control.',
            img: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&q=80'
        }
    ];

    return (
        <div className="services-page">
            <header className="services-hero hero-section text-white d-flex align-items-center justify-content-center">
                <div className="hero-overlay"></div>
                <Container className="position-relative z-index-1 text-center">
                    <FadeIn direction="up">
                        <span className="d-inline-block py-1 px-3 rounded-pill bg-white text-navy fw-bold mb-3 shadow">
                            <i className="bi bi-gear-fill text-danger me-2"></i> Professional Solutions
                        </span>
                        <h1 className="display-3 fw-bold mb-4"><span className="text-gradient">Our Services</span></h1>
                        <p className="lead fs-4 opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
                            Comprehensive cooling solutions tailored for your space. From installation to maintenance, we handle it all.
                        </p>
                    </FadeIn>
                </Container>
            </header>

            <section className="section-padding">
                <Container>
                    <Row className="g-4">
                        {services.map((s, i) => (
                            <Col lg={4} md={6} key={i}>
                                <FadeIn delay={i * 100}>
                                    <div className="card-custom h-100 border-0 shadow-sm overflow-hidden d-flex flex-column">
                                        <div className="position-relative" style={{ height: '220px' }}>
                                            <img src={s.img} alt={s.title} className="w-100 h-100 object-fit-cover" />
                                            <div className="position-absolute bottom-0 start-0 w-100 h-50" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>
                                            <div className="position-absolute bottom-0 start-0 m-3 card-icon" style={{ width: '60px', height: '60px', fontSize: '1.25rem' }}>
                                                <i className={`bi ${s.icon}`}></i>
                                            </div>
                                        </div>
                                        <div className="p-4 pt-4 flex-grow-1 d-flex flex-column">
                                            <h3 className="fw-bold h4 mb-3 mt-2">{s.title}</h3>
                                            <p className="text-muted mb-4">{s.desc}</p>
                                            <div className="mt-auto">
                                                <Link to="/contact" className="text-red fw-bold text-decoration-none d-inline-flex align-items-center stretched-link">
                                                    Book Now <i className="bi bi-arrow-right ms-2"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* How We Work Section */}
            <section className="section-padding bg-grey">
                <Container>
                    <FadeIn direction="up">
                        <div className="text-center mb-5">
                            <h6 className="text-red fw-bold text-uppercase letter-spacing-2">Simple Process</h6>
                            <h2 className="display-5 fw-bold text-navy">How We Work</h2>
                        </div>
                    </FadeIn>
                    <Row className="g-4 text-center">
                        {[
                            { step: '01', title: 'Schedule', text: 'Book online or call us. We offer flexible slots to fit your busy life.', icon: 'bi-calendar-check' },
                            { step: '02', title: 'Diagnosis', text: 'Our certified experts arrive on time, inspect the issue, and explain the fix.', icon: 'bi-search' },
                            { step: '03', title: 'Comfort', text: 'We complete the job efficiently so you can get back to enjoying your cool home.', icon: 'bi-emoji-smile' }
                        ].map((item, i) => (
                            <Col md={4} key={i}>
                                <FadeIn delay={i * 100}>
                                    <div className="position-relative p-4">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-white text-red rounded-circle shadow-sm mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                            <i className={`bi ${item.icon}`}></i>
                                        </div>
                                        <h3 className="h4 fw-bold mb-3">{item.title}</h3>
                                        <p className="text-muted opacity-75 mx-auto" style={{ maxWidth: '300px' }}>{item.text}</p>
                                        <div className="position-absolute top-0 start-50 translate-middle-x fw-bold text-light opacity-20" style={{ fontSize: '6rem', zIndex: -1 }}>
                                            {item.step}
                                        </div>
                                    </div>
                                </FadeIn>
                            </Col>
                        ))}
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
                                <h2 className="fw-bold mb-3 text-white">Need Help with Your Air Conditioner?</h2>
                                <p className="fs-5 opacity-75 mb-4 text-white">Our experts are ready to help you find the perfect solution for your home.</p>
                                <Button as={Link} to="/contact" className="btn btn-light rounded-pill px-5 py-3 fw-bold text-navy shadow-lg">Get a Free Estimate</Button>
                            </Col>
                        </Row>
                    </FadeIn>
                </Container>
            </section>
        </div>
    );
};

export default Services;
