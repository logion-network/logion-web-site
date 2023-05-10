import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import "./TextImageCols.css";

export interface Props {
    title: ReactNode;
    paragraphs: ReactNode;
    images: ReactNode;
    theme: "bright" | "dark";
}

export function TextImageCols(props: Props) {
    return (
        <div className={ `TextImageCols ${props.theme}` }>
            <Container>
                <Row>
                    <Col>
                        <div className="text-container">
                            <div>
                                <SectionTitle text={ props.title } barColor={ props.theme === "bright" ? "var(--color2-color)" : "white" }/>
                                <>
                                    { props.paragraphs }
                                </>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            { props.images }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
