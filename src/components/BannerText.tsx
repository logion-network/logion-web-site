import { ReactNode } from "react";
import "./BannerText.css";

export interface Props {
    firstText: ReactNode;
    secondText: ReactNode;
    thirdText: ReactNode;
}

export default function BannerText(props: Props) {
    return (
        <div className="BannerText">
            <p className="first">{ props.firstText }</p>
            <p className="second">{ props.secondText }</p>
            <p className="third">{ props.thirdText }</p>
        </div>
    );
}
