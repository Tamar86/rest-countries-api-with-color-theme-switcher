export async function fetchAllCountries(filter) {
	try {
		const res = await fetch(`https://restcountries.com/v3.1/${filter}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchCountriesByRegion(region) {
	try {
		const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchCountriesByName(name) {
	try {
		const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(
			`Country name doesn't exist. Please enter valid country name! ${error}`
		);
	}
}

export async function fetchCountriesByCode(code) {
	try {
		const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
