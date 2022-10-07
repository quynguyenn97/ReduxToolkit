import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello world with React and Hoi Dan IT!</h1>
                <div className="btn-actions">
                    <button onClick={() => dispatch(increment())}>
                        Increase
                    </button>
                    <button onClick={() => dispatch(decrement())}>
                        Decrease
                    </button>
                </div>
                <br />
                <div>Count = {count}</div> */}
                <div>
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Username</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </header>
        </div>
    );
}

export default App;
