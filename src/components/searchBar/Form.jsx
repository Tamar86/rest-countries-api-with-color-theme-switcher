import { useCountries } from '../../context/CountriesContext';
import styles from './Form.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './Input';

function Form({ handleSubmit, handleInput }) {
	const { isDarkMode } = useCountries();
	return (
		<form
			className={isDarkMode ? styles.inputContainerDark : styles.inputContainer}
			onSubmit={handleSubmit}
		>
			<div
				className={isDarkMode ? styles.iconDark : styles.icon}
				onClick={handleSubmit}
			>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</div>

			<Input handleInput={handleInput} />
		</form>
	);
}

export default Form;
