import Countries from './Countries';
import Filter from './Filter';
import styles from './HomePage.module.css';
import Input from './Input';
function HomePage() {
	return (
		<div className={styles.homePage}>
			<div className={styles.container}>
				<Input />
				<Filter />
			</div>
			<div className={styles.countries}>
				<Countries />
			</div>
		</div>
	);
}

export default HomePage;
