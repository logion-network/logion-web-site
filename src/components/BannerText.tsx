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
            <p className="first">All projects built with the logion infrastructure<br/><em>protect their digital asset holders</em></p>
            <p className="second">Logion sets a vital market standard to <em>uniquely bind proterty</em>, <em>rights</em> and <em>obligations</em> to any digital asset on any chain.</p>
            <p className="third">Everything that is processed by the logion infrastructure is <strong>legally existing</strong> and <strong>secured overtime</strong> by design.</p>
        </div>
    );
}
