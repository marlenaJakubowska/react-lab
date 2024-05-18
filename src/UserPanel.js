import React from "react";

function UserPanel({ username, onLogout }) {
    return (
        <div>
            <h2>Witaj {username}</h2>
            <button onClick={onLogout}>Wyloguj</button>
        </div>
    );
}

export default UserPanel;
