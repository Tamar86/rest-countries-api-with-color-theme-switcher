import styles from './Heading.module.css';
import { useNavigate } from 'react-router-dom';
import { useCountries } from '../../context/CountriesContext';

function Heading() {
	const { isDarkMode } = useCountries();
	const navigation = useNavigate();
	function homePage() {
		navigation('/');
	}
	return (
		<h1
			tabIndex='0'
			className={isDarkMode ? styles.headingDark : styles.headingLight}
			onClick={homePage}
		>
			Where in the world ?
		</h1>
	);
}

export default Heading;
