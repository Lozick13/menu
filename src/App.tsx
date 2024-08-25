import { Route, Routes } from 'react-router-dom';
import './App.css';
import DriftPage from './components/DriftPage/DriftPage';
import ForzaPage from './components/ForzaPage/ForzaPage';
import HomePage from './components/HomePage/HomePage';
import Menu from './components/Menu/Menu';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';

function App() {
	return (
		<>
			<Menu />
			<div className='page'>
				<Routes>
					<Route path='/' index element={<HomePage />} />
					<Route path='/drift' element={<DriftPage />} />
					<Route path='/timeattack' element={<TimeAttackPage />} />
					<Route path='/forza' element={<ForzaPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
