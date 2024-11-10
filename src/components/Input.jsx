import styles from './Input.module.css';
import { useNavigate } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCountries } from '../context/CountriesContext';
import { fetchCountriesByName } from '../services/countriesApi';

function Input() {
	const { dispatch, country, errors, isDarkMode } = useCountries();
	const navigate = useNavigate();

	function handleInput(userInput) {
		localStorage.setItem('country', JSON.stringify(userInput));
		dispatch({ type: 'get/value', payload: userInput });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		dispatch({ type: 'loading', payload: true });
		const data = await fetchCountriesByName(country);

		if (data.status === 404 || data.message === 'Page Not Found') {
			dispatch({ type: 'error/fetching' });
			dispatch({ type: 'loading', payload: false });

			return;
		}
		if (data) {
			dispatch({ type: 'fetch/country', payload: data });
			dispatch({ type: 'loading', payload: false });
			navigate(`/country`);
		}
	}
	return (
		<div className={styles.form}>
			<form
				className={
					isDarkMode ? styles.inputContainerDark : styles.inputContainer
				}
				onSubmit={handleSubmit}
			>
				<button
					className={isDarkMode ? styles.iconDark : styles.icon}
					onClick={handleSubmit}
				>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
				<input
					className={isDarkMode ? styles.inputDark : styles.input}
					type='text'
					placeholder='Search for a country'
					value={country}
					onChange={e => handleInput(e.target.value)}
				/>
			</form>
			<p className={errors ? styles.show : styles.hidden}>Country not found</p>
		</div>
	);
}

export default Input;
