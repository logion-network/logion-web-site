import { ReactNode } from "react";
import "./FooterText.css";

export interface Props {
    title: ReactNode;
    text: ReactNode;
}

export default function FooterText(props: Props) {
    return (
        <div className="FooterText">
            <p className="title">{ props.title }</p>
            <div className="text">{ props.text }</div>
        </div>
    );
}
