import logo from './logo.svg';
import './App.css';
import { Login } from "./components/login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true, 
    }
  }

  render() {
    const { isLoginActive } = this.state;
    return (
      <div className="App">
        <div className="login">
          <div className="container">

          </div>
        </div>
      </div>
    )
  }
}

export default App;
