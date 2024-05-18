import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('adres@email.pl');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message;
    if (email.length < 10) {
        message = <div>Hello shorty!</div>;
    } else if (email.length < 15) {
        message = <div>You're a charm</div>;
    } else {
        message = <div>I feel asleep reading that</div>;
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}.</h2>
            {message}
            <input type="text" value={email} onChange={handleChange}/>
        </div>
    );
}

export default App;
