import styles from './Details.module.css';
import { useCountries } from '../../context/CountriesContext';
import BorderCountries from '../pages/BorderCountries';
import Flag from './Flag';
import Borders from './Borders';
import CountryInfo from './CountryInfo';

function Details() {
	const { countryDetails, isDarkMode } = useCountries();

	return (
		<div className={styles.countryDetailsContainer}>
			<Flag />
			<div className={styles.detailsContainer}>
				<h1 className={isDarkMode ? styles.headingDark : styles.heading}>
					{countryDetails.name.common}
				</h1>
				<CountryInfo />

				<Borders />
			</div>
		</div>
	);
}

export default Details;
