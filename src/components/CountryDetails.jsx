import styles from './CountryDetails.module.css';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useCountries } from '../context/CountriesContext';
import { fetchCountriesByCode } from '../services/countriesApi';
import Loader from './Loader';
import BorderCountries from './BorderCountries';

function CountryDetails() {
	const { countryDetails, dispatch, loading, isDarkMode } = useCountries();
	const navigate = useNavigate();
	const { countryCode } = useParams();
	console.log('countryCode', countryCode);

	useEffect(() => {
		async function fetchByCode() {
			console.log('countryCode2', countryCode);
			dispatch({ type: 'loading', payload: true });
			const data = await fetchCountriesByCode(countryCode);
			if (!data) return;
			const countryData = data[0];
			dispatch({ type: 'country/detail', payload: countryData });
			dispatch({ type: 'loading', payload: false });
		}
		if (!countryDetails || countryDetails.cca3 !== countryCode) {
			fetchByCode();
		}
	}, [countryCode, countryDetails, dispatch]);

	if (loading || !countryDetails) {
		return <Loader />;
	}

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

	const borderCountriesCode = countryDetails?.borders;

	if (loading) {
		return <Loader />;
	}

	return (
		<div className={styles.countryDetails}>
			<button
				className={isDarkMode ? styles.btnBackDark : styles.btnBack}
				onClick={() => navigate('/')}
			>
				<FontAwesomeIcon icon={faArrowLeftLong} />
				<span>Back</span>
			</button>

			<div className={styles.countryDetailsContainer}>
				<div className={styles.image}>
					<img
						className={isDarkMode ? styles.flagDark : styles.flag}
						src={countryDetails.flags.png}
					/>
				</div>
				<div className={styles.detailsContainer}>
					<h1 className={isDarkMode ? styles.headingDark : styles.heading}>
						{countryDetails.name.common}
					</h1>
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

					<div className={styles.bordersContainer}>
						{borderCountriesCode && (
							<>
								<p
									className={
										isDarkMode
											? styles.borderCountriesDark
											: styles.borderCountries
									}
								>
									Border Countries:
								</p>
								<span className={styles.btnBorders}>
									{borderCountriesCode?.map((code, i) => (
										<BorderCountries code={code} key={i} />
									))}
								</span>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CountryDetails;
