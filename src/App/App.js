import '../Assets/App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <div className='App'>
      <div className='Routing'>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
