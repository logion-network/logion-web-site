import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card, { PropsWithoutHeight as CardProps } from "./Card";
import "./TitleFourByFourCards.css";

export interface Props {
    title: ReactNode;
    card1: CardProps;
    card2: CardProps;
    card3: CardProps;
    card4: CardProps;
    cardsHeight: string;
}

export default function TitleFourByFourCards(props: Props) {
    return (
        <div className="TitleFourByFourCards">
            <Container>
                <Row>
                    <Col><h2>{ props.title }</h2></Col>
                </Row>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card { ...props.card1 } minHeight={ props.cardsHeight } />
                    </Col>
                    <Col>
                        <Card { ...props.card2 } minHeight={ props.cardsHeight } />
                    </Col>
                    <Col>
                        <Card { ...props.card3 } minHeight={ props.cardsHeight } />
                    </Col>
                    <Col>
                        <Card { ...props.card4 } minHeight={ props.cardsHeight } />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
