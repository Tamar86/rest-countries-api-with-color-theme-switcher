import { BrowserRouter, HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { CountriesProvider } from './context/CountriesContext';

function App() {
	return (
		<CountriesProvider>
			<HashRouter>
				<Layout />
			</HashRouter>
		</CountriesProvider>
	);
}

export default App;

//basename='/rest-countries-api-with-color-theme-switcher'
