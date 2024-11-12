import styles from './BorderCountries.module.css';
import { useEffect, useState } from 'react';
import { fetchCountriesByCode } from '../../services/countriesApi';
import { useCountries } from '../../context/CountriesContext';
import { useNavigate } from 'react-router-dom';

function BorderCountries({ code }) {
	const [countryName, setCountryName] = useState('');
	const navigate = useNavigate();
	const { isDarkMode, countryDetails } = useCountries();

	//useEffect is used to fetch the country name whenever the code prop changes.
	useEffect(() => {
		async function fetchCountryName() {
			try {
				const data = await fetchCountriesByCode(code);
				setCountryName(data[0].name.common); // Set the country name
			} catch (error) {
				console.error('Failed to fetch border country:', error);
			}
		}

		fetchCountryName();
	}, [code]);

	function handleClick() {
		async function fetchByCode() {
			try {
				const data = await fetchCountriesByCode(code);
				if (!data) return;
				const countryData = data[0];
				console.log('data', countryData);
				navigate(`/country/${countryData.cca3}`);
			} catch (error) {
				console.error('Failed to fetch border country:', error);
			}
		}

		if (!countryDetails || countryDetails.cca3 !== code) {
			fetchByCode();
		}
	}

	return (
		<button
			className={isDarkMode ? styles.btnBordersDark : styles.btnBorders}
			onClick={handleClick}
		>
			{countryName}
		</button>
	);
}

export default BorderCountries;
