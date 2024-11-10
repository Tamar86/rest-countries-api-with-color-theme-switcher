import { Route, Routes } from 'react-router-dom';
import styles from './Main.module.css';
import HomePage from './HomePage';
import CountryDetails from './CountryDetails';

import Country from './Country';
import { useCountries } from '../context/CountriesContext';

function Main() {
	const { isDarkMode } = useCountries();

	return (
		<div className={isDarkMode ? styles.mainDark : styles.main}>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/country/:countryCode' element={<CountryDetails />} />
				<Route path='/country' element={<Country />} />
			</Routes>
		</div>
	);
}

export default Main;
