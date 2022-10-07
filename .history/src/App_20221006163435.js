import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello world with React and Hoi Dan IT!</h1>
                <div className="btn-actions">
                    <button>Increase</button>
                    <button>Decrease</button>
                </div>

                <br />
            </header>
        </div>
    );
}

export default App;
