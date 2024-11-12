import styles from './CountryItem.module.css';
import { Link } from 'react-router-dom';
import { useCountries } from '../../context/CountriesContext';
import { formatNumber } from '../../services/formatNumber';

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
		<span
			onClick={handleClick}
			className={isDarkMode ? styles.countryItemDark : styles.countryItem}
		>
			<Link to={`/country/${item.cca3}`}>
				<div className={styles.image}>
					<img
						className={isDarkMode ? styles.flagsDark : styles.flags}
						src={item.flags.png}
						alt={`${item.name.common}'s flag`}
					/>
				</div>
				<div className={styles.listContainer}>
					<h1>{item.name.common}</h1>
					<div className={styles.itemDescription}>
						<p>
							<span className={styles.heading}> Population:</span>
							<span>{formatNumber(item.population)}</span>
						</p>
						<p>
							<span className={styles.heading}>Region:</span>
							<span>{item.region}</span>
						</p>
						<p>
							<span className={styles.heading}>Capital:</span>
							<span className={styles.description}>{item.capital}</span>
						</p>
					</div>
				</div>
			</Link>
		</span>
	);
}

export default CountryItem;
