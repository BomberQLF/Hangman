interface DisplayProps {
    guessedLetters: string[];
    wordToGuess: string;
}

const WordDisplay = ({ guessedLetters, wordToGuess }: DisplayProps): JSX.Element => {
    return (
        <div className="flex justify-center text-4xl text-white gap-4 mt-16">
            {wordToGuess.split("").map((letter, index) => (
                <span key={index} className="uppercase font-bold">
                    {guessedLetters.includes(letter) || letter === " " ? letter : "_"}
                </span>
            ))}
        </div>
    );
};

export default WordDisplay;
