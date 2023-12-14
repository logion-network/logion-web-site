import { MENU } from "../Content";
import ExternalLink from "./ExternalLink";
import "./Menu.css";

export interface MenuItem {
    text: string;
    link: string;
    external: boolean;
}

export interface Props {
    smaller: boolean;
}

export default function Menu(props: Props) {
    return (
        <div className={`Menu${ props.smaller ? " smaller" : "" }`}>
            { MENU.map((item, index) => item.external ? <ExternalLink key={ index } href={ item.link }>{ item.text }</ExternalLink> : <a href={ item.link }>{ item.text }</a>) }
        </div>
    );
}
