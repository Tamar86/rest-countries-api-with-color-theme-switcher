import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { useCountries } from '../context/CountriesContext';
import { useNavigate } from 'react-router-dom';

function Header() {
	const { isDarkMode, dispatch } = useCountries();
	const navigation = useNavigate();

	function handleMode() {
		dispatch({ type: 'mode/toggle' });
	}

	function homePage() {
		navigation('/');
	}
	return (
		<div
			className={
				isDarkMode ? styles.headerContainerDark : styles.headerContainer
			}
		>
			<button className={styles.btnHeading}>
				<h1
					className={isDarkMode ? styles.heading1Dark : styles.heading1}
					onClick={homePage}
				>
					Where in the world?
				</h1>
			</button>
			<button
				className={isDarkMode ? styles.buttonModeDark : styles.buttonMode}
				onClick={handleMode}
			>
				<span className={styles.icon}>
					{isDarkMode ? (
						<FontAwesomeIcon icon={faSun} />
					) : (
						<FontAwesomeIcon icon={faMoon} transform={{ rotate: -15 }} />
					)}
				</span>
				<span className={styles.mode}>
					{isDarkMode ? 'Light Mode' : 'Dark Mode'}
				</span>
			</button>
		</div>
	);
}

export default Header;
