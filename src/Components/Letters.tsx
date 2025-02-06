interface LettersProps {
    guessedLetters: string[];
    onLetterClick: (letter: string) => void;
}

const Letters = ({ guessedLetters, onLetterClick }: LettersProps): JSX.Element => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-8 px-4">
            {alphabet.map((letter) => (
                <button 
                    key={letter} 
                    className={`letters border border-white rounded-xl py-2 px-4 text-white text-lg sm:text-xl md:text-2xl font-bold uppercase transition 
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
