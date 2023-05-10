import { Linkedin } from 'react-bootstrap-icons';
import Image from "./Image";
import ExternalLink from "./ExternalLink";
import "./LegalOfficer.css";

export interface Props {
    image: string;
    name: string;
    location: string;
    linkedIn?: string;
}

export default function LegalOfficer(props: Props) {
    return (
        <div className="LegalOfficer">
            <div className="image-container">
                <Image fileName={ props.image } alt={ props.name }/>
            </div>
            <div className="name">{ props.name }</div>
            <div className="location">{ props.location }</div>
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
