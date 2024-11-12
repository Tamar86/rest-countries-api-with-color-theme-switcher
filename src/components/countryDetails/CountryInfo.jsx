import styles from './CountryInfo.module.css';
import { useCountries } from '../../context/CountriesContext';
function CountryInfo() {
	const { countryDetails, isDarkMode } = useCountries();

	const firstNativeLang =
		countryDetails.name.nativeName &&
		Object.keys(countryDetails.name.nativeName)[0];

	const nativeName = firstNativeLang
		? countryDetails.name.nativeName[firstNativeLang].official
		: 'N/A';
	const subregion = countryDetails.subregion ? countryDetails.subregion : 'N/A';

	const currencyCode =
		countryDetails.currencies && Object.keys(countryDetails.currencies)[0];
	const currency = currencyCode
		? countryDetails.currencies[currencyCode].name
		: 'N/A';
	const languages = countryDetails.languages
		? Object.values(countryDetails.languages).join(',')
		: 'N/A';
	<CountryInfo />;
	return (
		<div className={isDarkMode ? styles.detailsDark : styles.details}>
			<div>
				<p>
					<span>Native Name:</span>
					<span>{nativeName} </span>
				</p>

				<p>
					<span>Population:</span>
					<span>{countryDetails.population}</span>
				</p>
				<p>
					<span>Region:</span>
					<span>{countryDetails.region}</span>
				</p>
				<p>
					<span>Subregion:</span>
					<span>{subregion}</span>
				</p>
				<p>
					<span>Capital:</span>
					<span>{countryDetails.capital}</span>
				</p>
			</div>
			<div>
				<p>
					<span>Top Level Domain:</span>
					<span>{countryDetails.tld} </span>
				</p>
				<p>
					<span>Currencies:</span>
					<span>{currency}</span>
				</p>
				<p>
					<span>Languages:</span>
					<span>{languages}</span>
				</p>
			</div>
		</div>
	);
}

export default CountryInfo;
