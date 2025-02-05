import stickman0 from "../assets/stickman0.svg";
import stickman1 from "../assets/stickman1.svg";
import stickman2 from "../assets/stickman2.svg";
import stickman3 from "../assets/stickman3.svg";
import stickman4 from "../assets/stickman4.svg";
import stickman5 from "../assets/stickman5.svg";

interface StickmanProps {
    wrongGuesses: number;
}

const Stickman = ({ wrongGuesses }: StickmanProps) => {
    const hangmanImages = [stickman0, stickman1, stickman2, stickman3, stickman4, stickman5];

    return (
        <div className="stickman-container">
            {hangmanImages.slice(0, wrongGuesses).map((img, index) => (
                <img key={index} src={img} alt="" className={`part-${index}`} />
            ))}
        </div>
    );
}

export default Stickman;
