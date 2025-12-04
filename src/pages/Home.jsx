import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
 
function Home() {
    const [word, setWord] = useState("");

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words'); //And the words we will recieve will be a custom object which we will need to convert to JSON.
        const data = await response.json();
        console.log(data); //And this contnet will be downloaded on the first load of the HomePage component in the DOM.

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log("Data of RandomIndex:",data[randomIndex]); //if we are able to select a word randomly then we can call setWords function.

        setWord(data[randomIndex].wordValue);

    }

    useEffect(() => {
        fetchWords();
    }, []);

    return(
        <>
            <Link to={'/game'} state={{wordSelected: word}}>
                <Button text={"Single Player Game"} ></Button>
            </Link>
            <br />
            <Link to={'/start'}>
                <div className="mt-3">
                    <Button text={"Multi Player Game"} styleType="Warning" ></Button>
                </div>
            </Link>
        </>
    );
}

export default Home; 