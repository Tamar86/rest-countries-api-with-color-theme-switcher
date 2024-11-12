import styles from './Header.module.css';
import { useCountries } from '../../context/CountriesContext';
import { useNavigate } from 'react-router-dom';
import Mode from './Mode';
import Heading from './Heading';

function Header() {
	const { isDarkMode, dispatch } = useCountries();

	function handleMode() {
		dispatch({ type: 'mode/toggle' });
	}

	return (
		<header
			className={
				isDarkMode ? styles.headerContainerDark : styles.headerContainer
			}
		>
			<Heading />
			<Mode handleMode={handleMode} />
		</header>
	);
}

export default Header;
