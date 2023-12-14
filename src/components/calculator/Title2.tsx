import { ReactNode } from "react";
import "./Title2.css";

export interface Props {
    children: ReactNode;
}

export default function Title2(props: Props) {
    return <h2 className="Title2">{ props.children }</h2>;
}
