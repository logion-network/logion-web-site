import { ReactNode } from "react";
import "./Title2.css";

export interface Props {
    children: ReactNode;
    hide?: boolean;
}

export default function Title2(props: Props) {
    return <h2 className={ "Title2" + (props.hide ? " hide" : "") }>{ props.children }</h2>;
}
