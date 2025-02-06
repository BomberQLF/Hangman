import Play from "./Play";

interface HeadingProps {
    title: string;
    subtitle: string;
}

const Heading = ({ title, subtitle }: HeadingProps): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-center mt-12 px-4 text-center">
            <h1 className="text-white uppercase text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none">
                {title}
            </h1>
            <h2 className="text-white uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl">
                {subtitle}
            </h2>
            <Play />
        </div>
    );
};

export default Heading;