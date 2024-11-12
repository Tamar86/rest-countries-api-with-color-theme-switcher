import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useCountries } from '../../context/CountriesContext';
import Button from '../Button';
import styles from './btnBack.module.css';
function BtnBack() {
	const navigate = useNavigate();
	const { isDarkMode } = useCountries();
	return (
		<Button
			className={isDarkMode ? styles.btnBackDark : styles.btnBack}
			onClick={() => navigate(-1)}
		>
			<FontAwesomeIcon icon={faArrowLeftLong} />
			<span>Back</span>
		</Button>
	);
}

export default BtnBack;
