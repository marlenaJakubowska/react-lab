import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState([]);
    const [showForm, setShowForm] = useState(false);

    function handleNewMeeting(meeting) {
        const nextMeetings = [...meetings, meeting];
        setMeetings(nextMeetings);
        setShowForm(false);
    }

    function toggleFormVisibility() {
        setShowForm(!showForm);
    }

    return (
        <div>
            <h2>Zajęcia ({meetings.length})</h2>
            <button onClick={toggleFormVisibility}>
                {showForm ? 'Ukryj formularz' : 'Dodaj nowe zajęcia'}
            </button>
            {showForm && (
                <NewMeetingForm onSubmit={handleNewMeeting}/>
            )}
            <MeetingsList meetings={meetings}/>
        </div>
    )
}