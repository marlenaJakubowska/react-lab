import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
    const [email, setEmail] = useState('adres@email.pl');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin(email) {
        setIsLoggedIn(true);
        setEmail(email);
    }

    function handleLogout() {
        setIsLoggedIn(false);
        setEmail('');
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {isLoggedIn ? (
                <UserPanel username={email} onLogout={handleLogout} />
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
