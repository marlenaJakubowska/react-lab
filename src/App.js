import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('adres@email.pl');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleLogout() {
        setIsLoggedIn(false);
        setEmail('');
    }

    if (isLoggedIn) {
        return (
            <div>
                <h1>Witaj w systemie zapisów na zajęcia</h1>
                <h2>Witaj {email}</h2>
                <button onClick={handleLogout}>Wyloguj</button>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Witaj w systemie zapisów na zajęcia</h1>
                <label>Zaloguj się emailem</label>
                <input type="text" value={email} onChange={handleChange} />
                <button type="button" onClick={() => setIsLoggedIn(true)}>
                    Wchodzę
                </button>
            </div>
        );
    }
}

export default App;
