import { useCountries } from '../../context/CountriesContext';
import BorderCountries from '../pages/BorderCountries';
import styles from './Borders.module.css';

function Borders() {
	const { countryDetails, isDarkMode } = useCountries();
	const borderCountriesCode = countryDetails?.borders;
	return (
		<div className={styles.bordersContainer}>
			{borderCountriesCode && (
				<>
					<p
						className={
							isDarkMode ? styles.borderCountriesDark : styles.borderCountries
						}
					>
						Border Countries:
					</p>
					<span className={styles.btnBorders}>
						{borderCountriesCode?.map((code, i) => (
							<BorderCountries code={code} key={i} />
						))}
					</span>
				</>
			)}
		</div>
	);
}

export default Borders;
