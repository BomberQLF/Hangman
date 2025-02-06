// ICI ON MET TOUTE LA LOGIQUE + APPEL API MOTS + ICI ON ALIMENTE LES PROPS DES COMPOSANTS

import { useEffect, useState } from "react";
import Letters from "../Components/Letters";
import WordDisplay from "../Components/WordDisplay";
import famousLanguages from "../Data/Data";
import Stickman from "../Components/Stickman";
import HomeButton from "../Components/HomeButton";

const Game = () => {
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [wordToGuess, setWordToGuess] = useState<string>("");
    const [wrongGuesses, setWrongGuesses] = useState<number>(0);
    const maxErrors: number = 6;

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * famousLanguages.length);
        setWordToGuess(famousLanguages[randomIndex].toUpperCase());
    }, []);

    const handleGuesses = (letter: string): void => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (!wordToGuess.includes(letter)) {
                setWrongGuesses(prev => prev + 1);
            }
        }
    };

    const isGameOver = wrongGuesses >= maxErrors;
    const isGameWon = wordToGuess.split("").every((letter) => guessedLetters.includes(letter));


    return (
        <>
            < HomeButton />
            {isGameOver && (
                <h1 className="abs text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                    The word was {wordToGuess}
                </h1>
            )}
            {isGameWon && (
                <h1 className="abs text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                    Congrats!
                </h1>
            )}
            <Stickman wrongGuesses={wrongGuesses} />
            <WordDisplay guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
            <Letters guessedLetters={guessedLetters} onLetterClick={handleGuesses} />
        </>
    );
}

export default Game;
