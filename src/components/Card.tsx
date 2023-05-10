import Image, { Props as ImageProps } from "./Image";
import "./Card.css";
import { ReactNode } from "react";

export interface PropsWithoutHeight {
    image: ImageProps;
    title: string;
    text: ReactNode;
}

export interface Props extends PropsWithoutHeight {
    minHeight: string;
}

export default function Card(props: Props) {
    return (
        <div className="Card" style={{ minHeight: props.minHeight }}>
            <div className="image">
                <Image { ...props.image } />
            </div>
            <div className="title">{ props.title }</div>
            <div className="text">{ props.text }</div>
        </div>
    );
}
