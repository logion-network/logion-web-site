import { ReactNode } from "react";
import { Linkedin } from 'react-bootstrap-icons';
import Image from "./Image";
import ExternalLink from "./ExternalLink";
import "./Member.css";
import Bar from "./Bar";

export interface Props {
    image: string;
    name: string;
    title: ReactNode;
    description: ReactNode;
    linkedIn?: string;
    border?: boolean;
}

export default function Member(props: Props) {
    return (
        <div className="Member">
            <div className="image-container">
                <Image className={ props.border ? " with-border" : ""} fileName={ props.image } alt={ props.name }/>
            </div>
            <div className="name">{ props.name }</div>
            <div className="title">{ props.title }</div>
            <Bar color="var(--color2-color)"/>
            <div className="description">{ props.description }</div>
            {
                props.linkedIn &&
                <div className="linkedIn">
                    <ExternalLink href={ props.linkedIn }>
                        <Linkedin
                            color="var(--color1-color)"
                            size="32px"
                        />
                    </ExternalLink>
                </div>
            }
        </div>
    );
}
