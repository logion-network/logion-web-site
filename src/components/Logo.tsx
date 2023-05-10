import Image from "./Image";
import "./Logo.css";

export interface Props {
    smaller: boolean;
}

export default function Logo(props: Props) {
    return (
        <div className={`Logo${ props.smaller ? " smaller" : "" }`}>
            <Image className="vertical" fileName="logo.png" alt="logion logo" />
            <Image className="horizontal" fileName="logo-horizontal.png" alt="logion logo" />
        </div>
    );
}
