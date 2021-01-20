import './App.css';
import logo from './assets/images/logo.svg';
import Routes from './routes';

// ctrl + shift + d = copy line down

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
