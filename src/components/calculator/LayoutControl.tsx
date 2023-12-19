import { Button } from "react-bootstrap";
import "./LayoutControl.css";

export interface  Props {
    allAccodionKeys: string[];
    setActiveKey: (keys: string[]) => void;
}

export default function LayoutControl(props: Props) {

    return (
        <div className="LayoutControl">
            <Button onClick={ () => props.setActiveKey([]) }>Collapse all</Button>
            <Button onClick={ () => props.setActiveKey(props.allAccodionKeys) }>Uncollapse all</Button>
            <Button onClick={ () => window.print() }>Print</Button>
        </div>
    );
}
