import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({inputType, handleFormSubmit, handleTextInputChange , handleShowHideClick}) {
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput 
                    type= { inputType }
                    label="Enter a Word or a Phrase"
                    placeholder="Enter Your Word or Phrase Here...."
                    onChangeHandler={handleTextInputChange}
                />
            </div>

            <div>
                <Button styleType="Warning" 
                text= { inputType === "password" ? "Show" : "Hide"} 
                onClickHandler={handleShowHideClick}/>
            </div>

            <div>
                <Button type="submit" 
                styleType="Primary" 
                text="Submit" 
                onClickHandler={handleFormSubmit}/>
            </div>
        </form>
    );
}

export default TextInputForm;