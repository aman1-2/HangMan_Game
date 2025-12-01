import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContanier";

function StartGame() {
    return (
        <>
            <h1>Start Game</h1>
            <TextInputFormContainer></TextInputFormContainer>
            <Link to='/game' className="text-blue-400"> Play Game Link</Link>
        </>
    );
}

export default StartGame;