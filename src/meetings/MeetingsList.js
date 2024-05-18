export default function MeetingsList({meetings}) {

    if (meetings.length === 0) {
        return null;
    }
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                </tr>)
            }
            </tbody>
        </table>
    );
}