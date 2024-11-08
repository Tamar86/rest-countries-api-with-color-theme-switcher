import styles from './Country.module.css';
import { useCountries } from '../context/CountriesContext';
import CountryItem from './CountryItem';
import Loader from './Loader';

function Country() {
	const { countryData, loading } = useCountries();

	if (loading === true) {
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
