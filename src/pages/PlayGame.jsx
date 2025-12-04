import { useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/Hangman";

function PlayGame() {
    // const [searchParams] = useSearchParams();
    // console.log(searchParams);
    // console.log(searchParams.toString());
    // console.log(searchParams.get("text"));

    // const { text } =  useParams();
    // console.log(text);

    const { state } = useLocation();
    console.log(state);

    const [guessedLetters, setGuessedLetters] = useState([]);

    const [step, setStep] = useState(0);

    function handleLetterClick(event) {
        if(state?.wordSelected?.toUpperCase().includes(event.target.value)) {
            console.log("correct guess");
        } else {
            console.log("Wrong guess");
            setStep(step + 1);
        }
        console.log("Event:", event.target.value);
        setGuessedLetters([...guessedLetters, event.target.value])
    }

    return (
        <>
            {state?.wordSelected && (
                <>
                    <h1>Play Game</h1>

                    <MaskedText text={state?.wordSelected} guessedLetters={guessedLetters}></MaskedText>
                    
                    <div>
                        <LetterButtons text={state?.wordSelected} 
                            guessedLetters={guessedLetters} 
                            onLetterClick={handleLetterClick}>
                        </LetterButtons>
                    </div>

                    <div>
                        <HangMan step={step}></HangMan>
                    </div>
                    
                    <p>Passed word is: {state?.wordSelected}</p>
                </>
            )}
        </>
    );
}

export default PlayGame;