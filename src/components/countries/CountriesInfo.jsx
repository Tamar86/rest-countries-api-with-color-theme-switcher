import { formatNumber } from '../../services/formatNumber';
import styles from './CountriesInfo.module.css';
function CountriesInfo({ item }) {
	return (
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
	);
}

export default CountriesInfo;
