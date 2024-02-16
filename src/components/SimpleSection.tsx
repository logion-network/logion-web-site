import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SimpleSection.css";
import SectionTitle from "./SectionTitle";

export interface Props {
    paragraphs: ReactNode;
    title?: ReactNode;
}

export default function SimpleSection(props: Props) {
    return (
        <div className="SimpleSection">
            <Container>
                <Row>
                    <Col>
                        {
                            props.title !== undefined &&
                            <SectionTitle
                                text={ props.title }
                                barColor={ "var(--color2-color)" }
                            />
                        }
                        { props.paragraphs }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
