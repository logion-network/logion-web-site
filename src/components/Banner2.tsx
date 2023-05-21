import { Col, Container, Row } from "react-bootstrap";
import BannerText, { Props as BannerTextProps } from "./BannerText";
import { ReactNode } from "react";
import "./Banner.css";

export interface Props extends BannerTextProps {
    image: ReactNode;
}

export default function Banner2(props: Props) {
    return (
        <Container className="Banner2">
            <Row>
                <Col md={6}>
                    <div className="text-container">
                        <BannerText
                            { ...props }
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="image-container">
                        { props.image }
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
