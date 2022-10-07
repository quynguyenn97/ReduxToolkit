import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchAllUsers } from "./redux/slices/userSlice";

function App() {
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.user.listUsers);
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);

    console.log("check res", listUsers);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* <h1>Hello world with React and Hoi Dan IT!</h1>
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
                            {listUsers &&
                                listUsers.length > 0 &&
                                listUsers.map((item, index) => {
                                    return (
                                        <tr key={`user-${index}`}>
                                            <td>{item.id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.username}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </header>
        </div>
    );
}

export default App;
