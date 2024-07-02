import './App.css';
import CountDown from './components/CountDown';

function App() {
  return (
    <div className="App">
      <CountDown timer = {3600}/>
    </div>
  );
}

export default App;
