import styles from './Country.module.css';
import { useCountries } from '../context/CountriesContext';
import CountryItem from './CountryItem';
import Loader from './Loader';
import { useEffect } from 'react';
import { fetchCountriesByName } from '../services/countriesApi';

function Country() {
	const { countryData, loading, dispatch, country } = useCountries();

	useEffect(() => {
		async function fetchByName() {
			dispatch({ type: 'loading', payload: true });
			const data = await fetchCountriesByName(country);

			if (!data) return;

			dispatch({ type: 'country', payload: data });
			dispatch({ type: 'loading', payload: false });
		}
		if (!countryData) {
			fetchByName();
		}
	}, [country, countryData, dispatch]);

	if (loading || !countryData) {
		return <Loader />;
	}

	return (
		<div className={styles.countries}>
			{countryData.map(item => (
				<CountryItem item={item} key={item.cca3} />
			))}
		</div>
	);
}

export default Country;
