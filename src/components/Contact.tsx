import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import Social from "./Social";
import "./Contact.css";

export interface Props {
    title: ReactNode;
    content: ReactNode;
}

export default function Contact(props: Props) {
    return (
        <div className="Contact">
            <Container>
                <h2>{ props.title }</h2>
                { props.content }
                <Social smaller={ false } color="white" iconSize={ 32 } />
            </Container>
        </div>
    );
}
