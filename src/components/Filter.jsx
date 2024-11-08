import styles from './Filter.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { fetchCountriesByRegion } from '../services/countriesApi';
import { useCountries } from '../context/CountriesContext';

function Filter() {
	const { dispatch, isDarkMode } = useCountries();
	const [regionsShow, setRegionsShow] = useState(false);
	function handleShow() {
		setRegionsShow(show => !show);
	}

	async function handleGetByRegion(region) {
		const data = await fetchCountriesByRegion(region);
		if (!data) return;
		dispatch({ type: 'fetch/countries', payload: data });

		return data;
	}

	return (
		<div className={styles.filterContainer}>
			<button
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
			</button>

			<div
				className={
					regionsShow
						? isDarkMode
							? styles.regionsDark
							: styles.regions
						: styles.regionsHidden
				}
			>
				<button onClick={() => handleGetByRegion('africa')}>Africa</button>
				<button onClick={() => handleGetByRegion('america')}>America</button>
				<button onClick={() => handleGetByRegion('asia')}>Asia</button>
				<button onClick={() => handleGetByRegion('europe')}>Europe</button>
				<button onClick={() => handleGetByRegion('oceania')}>Oceania</button>
			</div>
		</div>
	);
}

export default Filter;
