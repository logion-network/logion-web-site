import { Col, Container, Row } from "react-bootstrap";
import FooterText, { Props } from "./FooterText";
import "./Footer.css";

export default function Footer(props: Props) {
    return (
        <div className="Footer">
            <Container>
                <Row>
                    <Col>
                        <FooterText
                            { ...props }
                        />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
