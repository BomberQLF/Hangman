import { Link } from "react-router-dom";
import Stickman from '../assets/stickman.svg';

const Play = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center mt-16">
            <Link to="/game">
                <div className="flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl border border-white rounded-xl py-3 px-8 sm:px-12 md:px-16 lg:px-20 transition hover:bg-white hover:text-black">
                    <h3 className="text-white font-bold">Play Now!</h3>
                </div>
            </Link>
            <img
                src={Stickman}
                alt="Stickman"
                className="w-8 sm:w-12 md:w-16 lg:w-24 m-0 block"
            />
        </div>
    );
};

export default Play;