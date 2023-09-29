import { ReactNode } from "react";

import "./Announcement.css";

export interface Props {
    children: ReactNode;
}

export default function Announcement(props: Props) {
    return (
        <div className="Announcement">
            { props.children }
        </div>
    );
}
