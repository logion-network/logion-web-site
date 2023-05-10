export interface Props {
    fileName: string;
    alt: string;
    height?: string;
    width?: string;
    className?: string;
}

export default function Image(props: Props) {
    return (
        <img
            src={ `${process.env.PUBLIC_URL}/${props.fileName}` }
            alt={ props.alt }
            height={ props.height }
            width={ props.width }
            className={ props.className }
        />
    );
}
