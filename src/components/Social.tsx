import { Linkedin, Twitter, Discord, Github, Medium } from 'react-bootstrap-icons';
import ExternalLink from './ExternalLink';
import { DISCORD_URL, GITHUB_URL, LINKEDIN_URL, MEDIUM_URL, TWITTER_URL } from '../Content';
import "./Social.css";

export interface Props {
    smaller: boolean;
    color: string;
    iconSize: number;
}

export default function Social(props: Props) {

    return (
        <div className={`Social${ props.smaller ? " smaller" : "" }`}>
            {
                LINKEDIN_URL !== undefined &&
                <ExternalLink
                    href={ LINKEDIN_URL }
                >
                    <Linkedin
                        color={ props.color }
                        size={ props.iconSize }
                    />
                </ExternalLink>
            }
            {
                TWITTER_URL !== undefined &&
                <ExternalLink
                    href={ TWITTER_URL }
                >
                    <Twitter
                        color={ props.color }
                        size={ props.iconSize }
                    />
                </ExternalLink>
            }
            {
                DISCORD_URL !== undefined &&
                <ExternalLink
                    href={ DISCORD_URL }
                >
                    <Discord
                        color={ props.color }
                        size={ props.iconSize }
                    />
                </ExternalLink>
            }
            {
                GITHUB_URL !== undefined &&
                <ExternalLink
                    href={ GITHUB_URL }
                >
                    <Github
                        color={ props.color }
                        size={ props.iconSize }
                    />
                </ExternalLink>
            }
            {
                MEDIUM_URL !== undefined &&
                <ExternalLink
                    href={ MEDIUM_URL }
                >
                    <Medium
                        color={ props.color }
                        size={ props.iconSize }
                    />
                </ExternalLink>
            }
        </div>
    );
}
