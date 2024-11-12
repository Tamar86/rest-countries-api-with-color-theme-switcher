import styles from './CountriesFlag.module.css';
import { useCountries } from '../../context/CountriesContext';
function CountriesFlag({ item }) {
	const { isDarkMode } = useCountries();
	return (
		<div className={styles.image}>
			<img
				className={isDarkMode ? styles.flagsDark : styles.flags}
				src={item.flags.png}
				alt={`${item.name.common}'s flag`}
			/>
		</div>
	);
}

export default CountriesFlag;
