import getButtonStyling from "./getButtonStyling";

function Button({ type, text, onClickHandler, styleType="Primary"}) {
    
    return (
        <button
            type={type} 
            onClick={onClickHandler}
            className={`px-4 py-2 text-white ${getButtonStyling(styleType)}`}
        >
            {text}
        </button> 
    );
}

export default Button;