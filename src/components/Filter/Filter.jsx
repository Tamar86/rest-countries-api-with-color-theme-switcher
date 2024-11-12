import styles from './Filter.module.css';
import { useEffect, useRef, useState } from 'react';
import { fetchCountriesByRegion } from '../../services/countriesApi';
import { useCountries } from '../../context/CountriesContext';
import BtnFilter from './BtnFilter';
import FilterRegions from './FilterRegions';

function Filter() {
	const { dispatch } = useCountries();
	const [regionsShow, setRegionsShow] = useState(false);

	//Tracks the filter dropdown container
	const filterRef = useRef(null);

	//Checks if the clicked element is outside the dropdown, then closes it.
	function handleClickOutside(event) {
		if (filterRef.current && !filterRef.current.contains(event.target)) {
			setRegionsShow(false);
		}
	}
	//Sets up the event listener on mount and removes it on unmount for cleanup
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

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
			<BtnFilter handleShow={handleShow} regionsShow={regionsShow} />
			<FilterRegions
				filterRef={filterRef}
				handleGetByRegion={handleGetByRegion}
				regionsShow={regionsShow}
			/>
		</div>
	);
}

export default Filter;
