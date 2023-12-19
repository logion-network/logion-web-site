import { Col, Container, Row } from "react-bootstrap";
import { ReactNode } from "react";
import "./Team.css";

export interface Props {
    title: ReactNode;
    members: ReactNode[];
}

export default function Team(props: Props) {
    return (
        <div className="Team">
            <Container>
                <h2>{ props.title }</h2>
                <Row md={4} className="g-5">
                    {
                        props.members.map((member, index) => <Col key={ index }>{ member }</Col>)
                    }
                </Row>
            </Container>
        </div>
    );
}
