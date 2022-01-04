import '../Assets/App.css';
import { HashRouter } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;
