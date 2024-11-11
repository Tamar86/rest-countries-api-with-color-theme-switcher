import { HashRouter } from 'react-router-dom';
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
