import { ReactNode } from "react";
import Image, { Props as ImageProps } from "./Image";
import "./SmallCard.css";

export interface PropsWithoutHeight {
    image: ImageProps;
    text: ReactNode;
}

export interface Props extends PropsWithoutHeight {
    minHeight: string;
}

export default function SmallCard(props: Props) {
    return (
        <div className="SmallCard" style={{ minHeight: props.minHeight }}>
            <div className="image">
                <Image { ...props.image } />
            </div>
            <div className="text">{ props.text }</div>
        </div>
    );
}
