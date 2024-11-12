import styles from './CountryDetails.module.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useCountries } from '../../context/CountriesContext';
import { fetchCountriesByCode } from '../../services/countriesApi';
import Loader from '../Loader';

import BtnBack from '../countryDetails/btnBack';
import Details from '../countryDetails/Details';

function CountryDetails() {
	const { countryDetails, dispatch, loading } = useCountries();

	const { countryCode } = useParams();
	console.log('countryCode', countryCode);

	useEffect(() => {
		async function fetchByCode() {
			console.log('countryCode2', countryCode);
			dispatch({ type: 'loading', payload: true });
			const data = await fetchCountriesByCode(countryCode);
			if (!data) return;
			const countryData = data[0];
			dispatch({ type: 'country/detail', payload: countryData });
			dispatch({ type: 'loading', payload: false });
		}
		if (!countryDetails || countryDetails.cca3 !== countryCode) {
			fetchByCode();
		}
	}, [countryCode, countryDetails, dispatch]);

	if (loading || !countryDetails) {
		return <Loader />;
	}

	if (loading) {
		return <Loader />;
	}

	return (
		<div className={styles.countryDetails}>
			<BtnBack />
			<Details />
		</div>
	);
}

export default CountryDetails;
