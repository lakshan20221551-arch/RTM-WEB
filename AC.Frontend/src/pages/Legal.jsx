import React from 'react';
import { Container } from 'react-bootstrap';

const Legal = () => {
    return (
        <div className="legal-page">
            <header className="bg-navy text-white py-5 text-center">
                <Container>
                    <h1 className="display-4 fw-bold">Legal Information</h1>
                    <p className="lead">Privacy Policy and Terms & Conditions</p>
                </Container>
            </header>

            <section className="section-padding">
                <Container>
                    <div className="mb-5">
                        <h2 className="fw-bold mb-4">Privacy Policy</h2>
                        <p className="text-muted">
                            At Ratna Technical Maintainance, we are committed to protecting your privacy. This policy outlines how we collect, use, and protect your personal information when you use our website.
                        </p>
                        <p className="text-muted">
                            We collect information you provide directly to us through contact forms and booking requests. This information is used solely to provide and improve our services to you. We do not sell or share your personal data with third parties.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h2 className="fw-bold mb-4">Terms & Conditions</h2>
                        <p className="text-muted">
                            By accessing this website, you agree to be bound by these Terms and Conditions. Our services are subject to availability and region-specific licensing requirements.
                        </p>
                        <p className="text-muted">
                            All content on this website is the property of Ratna Technical Maintainance. Unauthorized use or reproduction is strictly prohibited.
                        </p>
                    </div>

                    <div>
                        <h2 className="fw-bold mb-4">Cookie Policy</h2>
                        <p className="text-muted">
                            We use basic cookies to ensure the best possible experience on our website. By continuing to use our site, you consent to the use of cookies.
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Legal;
