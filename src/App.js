
import './App.css';
import CryptoDataProvider from './Components/CryptoDataProvider/CryptoDataProvider';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <CryptoDataProvider>
      <Dashboard />
    </CryptoDataProvider>
  );
}

export default App;
