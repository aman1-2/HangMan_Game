import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate(); //This useNavigate function returns a Navigator function to us.

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted with the value: ",value);

        //Making a check
        if(value) {
            //If we have something valid in value then we redirect to play-game page.
            setTimeout(() => {
                navigate('/game');
            }, 5000);
        }
    }

    function handleTextInputChange(event) {
        console.log("Text Input Change");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick() {
        console.log("Handle Show Hide Click.");
        if(inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }
    }

    return (
        <TextInputForm 
            inputType = {inputType}
            handleFormSubmit = {handleFormSubmit} 
            handleTextInputChange = {handleTextInputChange}
            handleShowHideClick = {handleShowHideClick} 
        />
    );
}

export default TextInputFormContainer;