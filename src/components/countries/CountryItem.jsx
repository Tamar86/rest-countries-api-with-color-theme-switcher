import styles from './CountryItem.module.css';
import { Link } from 'react-router-dom';
import { useCountries } from '../../context/CountriesContext';
import CountriesFlag from './CountriesFlag';
import CountriesInfo from './CountriesInfo';

function CountryItem({ item }) {
	const { dispatch, isDarkMode } = useCountries();

	function handleClick() {
		dispatch({ type: 'loading', payload: true });

		setTimeout(() => {
			dispatch({ type: 'country/detail', payload: item });

			dispatch({ type: 'loading', payload: false });
		}, 1000 / 2);
	}

	return (
		<div
			onClick={handleClick}
			className={isDarkMode ? styles.countryItemDark : styles.countryItem}
		>
			<Link to={`/country/${item.cca3}`}>
				<CountriesFlag item={item} />
				<CountriesInfo item={item} />
			</Link>
		</div>
	);
}

export default CountryItem;
