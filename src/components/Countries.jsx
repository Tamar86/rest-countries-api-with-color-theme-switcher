import { useCountries } from '../context/CountriesContext';
import { fetchAllCountries } from '../services/countriesApi';
import styles from './Countries.module.css';
import { useEffect } from 'react';
import CountryItem from './CountryItem';
import Loader from './Loader';

function Countries() {
	const { countries, countriesData, dispatch, loading } = useCountries();

	useEffect(() => {
		async function getData() {
			dispatch({ type: 'loading', payload: true });
			const data = await fetchAllCountries(countries);

			if (!data) return;
			dispatch({ type: 'fetch/countries', payload: data });
			dispatch({ type: 'loading', payload: false });
		}
		getData();
	}, [countries, dispatch]);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className={styles.countries}>
			{countriesData.map(item => (
				<CountryItem item={item} key={item.cca3} />
			))}
		</div>
	);
}

export default Countries;
