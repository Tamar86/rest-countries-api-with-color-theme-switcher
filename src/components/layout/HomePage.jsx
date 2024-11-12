import styles from './HomePage.module.css';
import Countries from '../countries/Countries';
import Filter from '../Filter';
import FormWrapper from '../searchBar/FormWrapper';
function HomePage() {
	return (
		<div className={styles.homePage}>
			<div className={styles.container}>
				<FormWrapper />
				<Filter />
			</div>
			<div className={styles.countries}>
				<Countries />
			</div>
		</div>
	);
}

export default HomePage;
