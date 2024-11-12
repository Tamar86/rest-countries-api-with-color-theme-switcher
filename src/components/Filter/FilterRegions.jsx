import styles from './FilterRegions.module.css';
import { useCountries } from '../../context/CountriesContext';
import Button from '../ui/Button';

function FilterRegions({ regionsShow, handleGetByRegion, filterRef }) {
	const { isDarkMode } = useCountries();
	return (
		<div
			ref={filterRef}
			className={
				regionsShow
					? isDarkMode
						? styles.regionsDropDownContainerDark
						: styles.regionsDropDownContainerLight
					: styles.regionsHidden
			}
		>
			<Button onClick={() => handleGetByRegion('africa')}>Africa</Button>
			<Button onClick={() => handleGetByRegion('america')}>America</Button>
			<Button onClick={() => handleGetByRegion('asia')}>Asia</Button>
			<Button onClick={() => handleGetByRegion('europe')}>Europe</Button>
			<Button onClick={() => handleGetByRegion('oceania')}>Oceania</Button>
		</div>
	);
}

export default FilterRegions;
