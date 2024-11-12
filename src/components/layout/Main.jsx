import styles from './Main.module.css';
import { Route, Routes } from 'react-router-dom';
import { useCountries } from '../../context/CountriesContext';
import HomePage from './HomePage';
import CountryDetails from '../countries/CountryDetails';
import Country from '../countries/Country';

function Main() {
	const { isDarkMode } = useCountries();

	return (
		<main className={isDarkMode ? styles.mainDark : styles.main}>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/country/:countryCode' element={<CountryDetails />} />
				<Route path='/country' element={<Country />} />
			</Routes>
		</main>
	);
}

export default Main;
