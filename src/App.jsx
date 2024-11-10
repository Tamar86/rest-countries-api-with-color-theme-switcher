import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { CountriesProvider } from './context/CountriesContext';

function App() {
	return (
		<CountriesProvider>
			<BrowserRouter basename='/rest-countries-api-with-color-theme-switcher'>
				<Layout />
			</BrowserRouter>
		</CountriesProvider>
	);
}

export default App;
