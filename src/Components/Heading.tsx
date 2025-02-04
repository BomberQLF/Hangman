import Play from "./Play";

interface HeadingProps {
    title: string;
    subtitle: string;
}

const Heading = ({ title, subtitle }: HeadingProps): JSX.Element => {
    return (
        <div className="flex items-center flex-col justify-center mt-24">
            <h1 className="text-white text-[12rem] uppercase">{title}</h1>
            <h2 className="text-white text-4xl uppercase">{subtitle}</h2>
            < Play />
        </div>
    )
}

export default Heading;