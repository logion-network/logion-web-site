import { ReactNode } from "react";

export interface Props {
    href: string;
    children: ReactNode;
}

export default function ExternalLink(props: Props) {
    return (
        <a
            href={ props.href }
            target="_blank"
            rel="noreferrer"
        >
            { props.children }
        </a>
    );
}
