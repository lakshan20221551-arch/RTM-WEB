import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const BeforeAfter = ({ beforeImg, afterImg, title, beforeLabel = "Before", afterLabel = "After" }) => {
    return (
        <Card className="card-custom border-0 shadow-sm overflow-hidden mb-4">
            <Row className="g-0">
                <Col md={6} className="position-relative">
                    <div className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-white rounded-pill shadow-sm fw-bold text-danger z-index-1" style={{ fontSize: '0.8rem' }}>
                        {beforeLabel}
                    </div>
                    {typeof beforeImg === 'string' ? (
                        <img src={beforeImg} className="img-fluid h-100 w-100 object-fit-cover" style={{ minHeight: '250px' }} alt={beforeLabel} />
                    ) : (
                        beforeImg
                    )}
                </Col>
                <Col md={6} className="position-relative">
                    <div className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-navy text-white rounded-pill shadow-sm fw-bold z-index-1" style={{ fontSize: '0.8rem' }}>
                        {afterLabel}
                    </div>
                    {typeof afterImg === 'string' ? (
                        <img src={afterImg} className="img-fluid h-100 w-100 object-fit-cover" style={{ minHeight: '250px' }} alt={afterLabel} />
                    ) : (
                        afterImg
                    )}
                </Col>
            </Row>
            <Card.Body className="text-center bg-white border-top">
                <h5 className="fw-bold mb-0 text-navy">{title}</h5>
            </Card.Body>
        </Card>
    );
};

export default BeforeAfter;
