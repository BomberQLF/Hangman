interface LettersProps {
    guessedLetters: string[];
    onLetterClick: (letter: string) => void; 
}

const Letters = ({ guessedLetters, onLetterClick }: LettersProps): JSX.Element => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <div className="flex flex-wrap justify-center mt-8">
            {alphabet.map((letter) => (
                <button 
                    key={letter} 
                    className={`letters m-[1.5rem] border border-white rounded-xl py-[.4rem] px-[1.8rem] text-white text-2xl font-bold uppercase 
                    ${guessedLetters.includes(letter) ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black"}`}
                    onClick={() => {
                        if (!guessedLetters.includes(letter)) {
                            onLetterClick(letter); 
                        }
                    }}
                    disabled={guessedLetters.includes(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default Letters;
