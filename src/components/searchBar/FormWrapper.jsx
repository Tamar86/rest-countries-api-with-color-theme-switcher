import styles from './FormWrapper.module.css';
import { useNavigate } from 'react-router-dom';
import { useCountries } from '../../context/CountriesContext';
import { fetchCountriesByName } from '../../services/countriesApi';
import Form from './Form';

function FormWrapper() {
	const { dispatch, country, errors } = useCountries();
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
			<Form handleSubmit={handleSubmit} handleInput={handleInput} />
			<p className={errors ? styles.show : styles.hidden}>Country not found</p>
		</div>
	);
}

export default FormWrapper;
