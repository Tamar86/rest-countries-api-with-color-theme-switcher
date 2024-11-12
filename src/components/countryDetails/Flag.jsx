import { useCountries } from '../../context/CountriesContext';
import styles from './Flag.module.css';
function Flag() {
	const { isDarkMode, countryDetails } = useCountries();
	return (
		<div className={styles.image}>
			<img
				className={isDarkMode ? styles.flagDark : styles.flag}
				src={countryDetails.flags.png}
				alt={`${countryDetails.name.common}'s flag`}
			/>
		</div>
	);
}

export default Flag;
