import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
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
                <div>Count = 10</div>
            </header>
        </div>
    );
}

export default App;
