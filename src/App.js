import './App.css';
import { RecoilRoot } from 'recoil';
import LanguageProvider from './components/LanguageProvider/LanguageProvider';
import MainScreen from './components/MainScreen/MainScreen';

function App() {
	return (
		<RecoilRoot>
			<LanguageProvider>
				<MainScreen />
			</LanguageProvider>
		</RecoilRoot>
	);
}

export default App;
