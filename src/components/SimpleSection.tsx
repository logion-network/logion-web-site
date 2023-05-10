import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SimpleSection.css";

export interface Props {
    paragraphs: ReactNode;
}

export default function SimpleSection(props: Props) {
    return (
        <div className="SimpleSection">
            <Container>
                <Row>
                    <Col>
                        { props.paragraphs }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
