import "./Logo.css";

export default function Logo() {
    return (
        <div className="Logo">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logion logo" />
        </div>
    );
}
