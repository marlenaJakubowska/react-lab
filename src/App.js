import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import MeetingsPage from "./meetings/MeetingsPage";

function App() {
    const [authenticatedUserName, setAuthenticatedUsername] = useState("")

    function handleLogout() {
        setAuthenticatedUsername("");
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {authenticatedUserName ? (
                <div>
                    <UserPanel username={authenticatedUserName} onLogout={handleLogout} />
                    <h1>Zajęcia</h1>
                    <MeetingsPage />
                </div>
            ) : (
                <LoginForm onLogin={(email) => setAuthenticatedUsername(email)} />

            )}
        </div>
    );
}

export default App;