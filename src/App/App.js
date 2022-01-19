import '../Assets/App.css';
import { useNavigate } from "react-router-dom";
import Navigation from "../Components/Navigation"
import Router from './Router';

function App() {

  const navigate = useNavigate();

  return (
    <div className='App'>
      {navigate === "/landing" ? null : <Navigation />}
      <div className="Routing">
        <Router />
      </div>

    </div>
  );
}


export default App;
