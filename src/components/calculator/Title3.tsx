import { ReactNode } from "react";
import "./Title3.css";

export interface Props {
    children: ReactNode;
}

export default function Title3(props: Props) {
    return <h3 className="Title3">{ props.children }</h3>;
}
