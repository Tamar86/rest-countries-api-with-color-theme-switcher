import styles from './Mode.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { useCountries } from '../../context/CountriesContext';

function Mode({ handleMode }) {
	const { isDarkMode } = useCountries();
	return (
		<div
			tabIndex='0'
			className={isDarkMode ? styles.darkMode : styles.lightMode}
			onClick={handleMode}
		>
			<span className={styles.icon}>
				{isDarkMode ? (
					<FontAwesomeIcon icon={faSun} />
				) : (
					<FontAwesomeIcon icon={faMoon} transform={{ rotate: -20 }} />
				)}
			</span>
			<span className={styles.mode}>
				{isDarkMode ? 'Light Mode' : 'Dark Mode'}
			</span>
		</div>
	);
}

export default Mode;
