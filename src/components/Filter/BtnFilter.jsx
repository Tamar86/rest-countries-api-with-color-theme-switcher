import styles from './BtnFilter.module.css';
import Button from '../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useCountries } from '../../context/CountriesContext';
function BtnFilter({ handleShow, regionsShow }) {
	const { isDarkMode } = useCountries();
	return (
		<Button
			className={isDarkMode ? styles.buttonFilterDark : styles.buttonFilter}
			onClick={handleShow}
		>
			<span>Filter by Region</span>{' '}
			{regionsShow ? (
				<span className={styles.icon}>
					<FontAwesomeIcon icon={faCaretDown} />
				</span>
			) : (
				<span className={styles.icon}>
					<FontAwesomeIcon icon={faCaretUp} />
				</span>
			)}
		</Button>
	);
}

export default BtnFilter;
