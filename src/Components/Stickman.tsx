interface StickmanProps {
    wrongGuesses: number;
}

import stickman0 from '../assets/stickman0.svg';
import stickman1 from '../assets/stickman1.svg';
import stickman2 from '../assets/stickman2.svg';
import stickman3 from '../assets/stickman3.svg';
import stickman4 from '../assets/stickman4.svg';
import stickman5 from '../assets/stickman5.svg';

const Stickman = ({ wrongGuesses }: StickmanProps) => {
    const stickmanImages = [stickman0, stickman1, stickman2, stickman3, stickman4, stickman5];

    return <img src={stickmanImages[wrongGuesses]} alt="Stickman" />;
};

export default Stickman;