import styles from './CountriesFlag.module.css';
import { useCountries } from '../../context/CountriesContext';
function CountriesFlag({ item }) {
	const { isDarkMode } = useCountries();
	return (
		<img
			className={isDarkMode ? styles.flagsDark : styles.flags}
			src={item.flags.png}
			alt={`${item.name.common}'s flag`}
		/>
	);
}

export default CountriesFlag;
