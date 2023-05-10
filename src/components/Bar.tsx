import "./Bar.css";

export interface Props {
    color: string;
}

export default function Bar(props: Props) {
    return (<span className="Bar" style={{ backgroundColor: props.color }}/>);
}
