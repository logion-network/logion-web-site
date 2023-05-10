import { Col, Container, Row } from "react-bootstrap";
import SmallCard, { PropsWithoutHeight as CardProps } from "./SmallCard";

export interface Props {
    card1: CardProps;
    card2: CardProps;
    card3: CardProps;
    card4: CardProps;
    cardsHeight: string;
}

export default function OneByFourCards(props: Props) {
    return (
        <div className="OneByFourCards">
            <Container>
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <SmallCard { ...props.card1 } minHeight={ props.cardsHeight } />
                    </Col>
                    <Col>
                        <SmallCard { ...props.card2 } minHeight={ props.cardsHeight } />
                    </Col>
                    <Col>
                        <SmallCard { ...props.card3 } minHeight={ props.cardsHeight } />
                    </Col>
                    <Col>
                        <SmallCard { ...props.card4 } minHeight={ props.cardsHeight } />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
