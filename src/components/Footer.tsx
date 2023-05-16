import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "./Image";
import "./Footer.css";

export interface Props {
    summary: ReactNode;
    legal: ReactNode;
}

export default function Footer(props: Props) {
    return (
        <div className="Footer">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="logo-container">
                            <Image fileName="logo-horizontal.png" alt="logion logo" width="80%"/>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="summary-container">
                            <div className="summary">
                                { props.summary }
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="legal">
                            { props.legal }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
