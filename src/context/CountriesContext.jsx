import { createContext, useContext, useReducer } from 'react';

const countriesInitialState = {
	countriesData: [],
	countryDetails: null, // JSON.parse(localStorage.getItem('countryDetails')) ||
	countryData: null,
	countries: 'all',
	country: JSON.parse(localStorage.getItem('country')) || '',
	borderCountries: [],
	loading: false,
	isDarkMode: false,
	errors: false,
};

function countriesReducer(state, action) {
	switch (action.type) {
		case 'fetch/countries':
			return {
				...state,
				countriesData: action.payload,
				errors: false,
				country: '',
			};

		case 'fetch/country':
			return {
				...state,
				countryData: action.payload,
				errors: false,
				country: '',
			};

		case 'country':
			return {
				...state,
				countryData: action.payload,
				loading: false,
			};

		case 'get/value':
			return { ...state, country: action.payload };
		case 'country/detail':
			return { ...state, countryDetails: action.payload, loading: false };
		case 'loading':
			return { ...state, loading: action.payload };
		case 'countries/border':
			return {
				...state,
				borderCountries: [...state.borderCountries, action.payload],
			};
		case 'mode/toggle':
			return { ...state, isDarkMode: !state.isDarkMode };
		case 'error/fetching':
			return { ...state, country: '', errors: true };

		default:
			return state;
	}
}

const CountriesContext = createContext();

function CountriesProvider({ children }) {
	const [
		{
			countriesData,
			countryData,
			countries,
			country,
			countryDetails,
			borderCountries,
			loading,
			isDarkMode,
			errors,
		},
		dispatch,
	] = useReducer(countriesReducer, countriesInitialState);
	return (
		<CountriesContext.Provider
			value={{
				countriesData,
				countryData,
				countries,
				country,
				countryDetails,
				loading,
				borderCountries,
				isDarkMode,
				errors,
				dispatch,
			}}
		>
			{children}
		</CountriesContext.Provider>
	);
}
function useCountries() {
	const context = useContext(CountriesContext);
	if (context === undefined)
		throw new Error('CountriesContext was used outside CountriesProvider');
	return context;
}

export { CountriesProvider, useCountries, CountriesContext };
