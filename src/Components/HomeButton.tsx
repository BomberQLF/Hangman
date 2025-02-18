import { Link } from "react-router-dom";

const HomeButton = () => {
    return (
        <div className="p-8 uppercase text-[3rem] text-white">
            <Link to="/">
                <span className="spn">Home</span>
            </Link>
        </div>
    )
}

export default HomeButton;