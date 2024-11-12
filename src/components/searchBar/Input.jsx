import { useCountries } from '../../context/CountriesContext';
import styles from './Input.module.css';

function Input({ handleInput }) {
	const { country, isDarkMode } = useCountries();
	return (
		<input
			className={isDarkMode ? styles.inputDark : styles.input}
			type='text'
			placeholder='Search for a country...'
			value={country}
			onChange={e => handleInput(e.target.value)}
		/>
	);
}

export default Input;
