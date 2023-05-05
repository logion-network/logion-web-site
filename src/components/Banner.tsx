import { Col, Container, Row } from "react-bootstrap";
import BannerText, { Props } from "./BannerText";
import "./Banner.css";

export default function Banner(props: Props) {
    return (
        <Container className="Banner">
            <Row>
                <Col>
                    <BannerText
                        { ...props }
                    />
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}
