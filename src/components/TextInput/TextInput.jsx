function TextInput({ 
    type="text", 
    label, 
    placeHolder="Enter your Input here...", 
    onChangeHandler 
}) {
    return (
        <label>
            <span className="text-grey-700">{label}</span>
            <input 
                className="px-4 py-2 border border-gray-500 rounded-md w-full"
                type={type}
                placeholder={placeHolder}
                onChange={onChangeHandler}
            />
        </label>
    );
}

export default TextInput;