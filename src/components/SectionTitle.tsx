import { ReactNode } from "react";
import Bar from "./Bar";
import "./SectionTitle.css";

export interface Props {
    text: ReactNode;
    barColor: string;
}

export default function SectionTitle(props: Props) {
    return <h2 className="SectionTitle">{ props.text }<br/><Bar color={ props.barColor }/></h2>;
}
