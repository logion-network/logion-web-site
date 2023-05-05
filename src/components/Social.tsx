import { Linkedin, Twitter, Discord, Github, Medium } from 'react-bootstrap-icons';
import ExternalLink from './ExternalLink';
import { DISCORD_URL, GITHUB_URL, LINKEDIN_URL, MEDIUM_URL, TWITTER_URL } from '../Content';
import "./Social.css";

const ICONS_COLOR = "var(--color1-color)";
const ICONS_SIZE = 20;

export interface Props {
    smaller: boolean;
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
                        color={ ICONS_COLOR }
                        size={ ICONS_SIZE }
                    />
                </ExternalLink>
            }
            {
                TWITTER_URL !== undefined &&
                <ExternalLink
                    href={ TWITTER_URL }
                >
                    <Twitter
                        color={ ICONS_COLOR }
                        size={ ICONS_SIZE }
                    />
                </ExternalLink>
            }
            {
                DISCORD_URL !== undefined &&
                <ExternalLink
                    href={ DISCORD_URL }
                >
                    <Discord
                        color={ ICONS_COLOR }
                        size={ ICONS_SIZE }
                    />
                </ExternalLink>
            }
            {
                GITHUB_URL !== undefined &&
                <ExternalLink
                    href={ GITHUB_URL }
                >
                    <Github
                        color={ ICONS_COLOR }
                        size={ ICONS_SIZE }
                    />
                </ExternalLink>
            }
            {
                MEDIUM_URL !== undefined &&
                <ExternalLink
                    href={ MEDIUM_URL }
                >
                    <Medium
                        color={ ICONS_COLOR }
                        size={ ICONS_SIZE }
                    />
                </ExternalLink>
            }
        </div>
    );
}
