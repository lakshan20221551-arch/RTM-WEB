import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const FAQ = () => {
    const faqs = [
        { q: 'How often should I service my AC?', a: 'We recommend professional maintenance at least once a year, preferably in early spring before the peak cooling season.' },
        { q: 'Why is my AC making loud noises?', a: 'Loud noises can be caused by loose components, motor issues, or debris in the unit. It is best to have a technician inspect it immediately to prevent further damage.' },
        { q: 'What is the average lifespan of an AC unit?', a: 'With proper maintenance, a modern AC unit typically lasts between 15 to 20 years.' },
        { q: 'How can I lower my monthly energy bills?', a: 'Changing filters monthly, installing a programmable thermostat, and scheduling an annual tune-up are the best ways to improve efficiency and lower costs.' },
        { q: 'Do you offer emergency 24/7 services?', a: 'Yes! We have dedicated emergency technicians available 24/7 for critical cooling failures.' }
    ];

    return (
        <div className="faq-page">
            <header className="hero-section faq-hero text-white text-center">
                <div className="hero-overlay"></div>
                <Container className="position-relative z-index-1">
                    <h1 className="display-4 fw-bold">Frequently Asked Questions</h1>
                    <p className="lead">Find quick answers to common cooling concerns.</p>
                </Container>
            </header>

            <section className="section-padding">
                <Container>
                    <Accordion defaultActiveKey="0">
                        {faqs.map((f, i) => (
                            <Accordion.Item eventKey={i.toString()} key={i} className="mb-4 border-0 shadow-sm rounded-4 overflow-hidden">
                                <Accordion.Header>{f.q}</Accordion.Header>
                                <Accordion.Body className="opacity-75">
                                    {f.a}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Container>
            </section>
        </div>
    );
};

export default FAQ;
