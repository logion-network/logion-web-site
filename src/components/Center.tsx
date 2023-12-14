import { ReactNode } from "react"
import "./Center.css";

export interface Props {
    children: ReactNode;
}

export default function Center(props: Props) {
    return (
        <div className="Center">{ props.children }</div>
    )
}
