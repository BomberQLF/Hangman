import { Link } from "react-router-dom";
import Stickman from '../assets/stickman.svg';

const Play = (): JSX.Element => {
    return (
        <div>
            <Link to="/game">
                <div className="flex justify-center mt-32 text-4xl border border-white rounded-xl py-[.5rem] px-[5rem]">
                    <h3 className="text-white">Play Now!</h3>
                </div>
            </Link>
            <img src={Stickman} alt="Stickman" className="relative right-[-6rem]" />
        </div>
    )
}

export default Play;