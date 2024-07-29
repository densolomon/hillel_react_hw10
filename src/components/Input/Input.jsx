const Input = ({handleChange, handlePlaceholder, handleType, value}) => {
	return (
		<>
			<input
				type={handleType}
				onChange={handleChange}
				placeholder={handlePlaceholder}
				value={value}
			/>
		</>
	);
};

export default Input;