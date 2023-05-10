import { Col, Container, Row } from "react-bootstrap";
import BannerText, { Props as BannerTextProps } from "./BannerText";
import { ReactNode } from "react";
import "./Banner.css";

export interface Props extends BannerTextProps {
    image: ReactNode;
}

export default function Banner(props: Props) {
    return (
        <Container className="Banner">
            <Row>
                <Col>
                    <div className="text-container">
                        <BannerText
                            { ...props }
                        />
                    </div>
                </Col>
                <Col>
                    <div className="image-container">
                        { props.image }
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
