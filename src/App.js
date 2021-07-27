import { BrowserRouter as Router } from 'react-router-dom';
import CeoList from './components/CeoList';
import Title from './components/Title';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title>Apple CEOs v4</Title>
      <Router>
        <CeoList />
      </Router>
    </div>
  );
}

export default App;
