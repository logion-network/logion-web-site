import "./Logo.css";

export interface Props {
    smaller: boolean;
}

export default function Logo(props: Props) {
    return (
        <div className={`Logo${ props.smaller ? " smaller" : "" }`}>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logion logo" />
        </div>
    );
}
