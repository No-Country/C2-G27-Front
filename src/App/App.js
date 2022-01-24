/* eslint-disable no-console */
/* eslint-disable no-unused-var */
import '../Assets/App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
const API = process.env.REACT_APP_API;


function App() {

  console.log(API)
  return (
    <div className='App'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
