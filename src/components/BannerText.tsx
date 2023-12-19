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
            <div className="first">{ props.firstText }</div>
            <div className="second">{ props.secondText }</div>
            <div className="third">{ props.thirdText }</div>
        </div>
    );
}
