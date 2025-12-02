import { useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame() {
    // const [searchParams] = useSearchParams();
    // console.log(searchParams);
    // console.log(searchParams.toString());
    // console.log(searchParams.get("text"));

    // const { text } =  useParams();
    // console.log(text);

    const { state } = useLocation();
    console.log(state);

    return (
        <>
            <h1>Play Game</h1>
            <MaskedText text={state.wordSelected} guessedLetters={['h','m','e']}></MaskedText>
            <p>Passed word is: {state.wordSelected}</p>
        </>
    );
}

export default PlayGame;