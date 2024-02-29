import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'

function JournalFooter() {
    return (
        <Card className="customFooter">
            <Card.Body>
                <Card.Text> ©  MoodTracks, 2024</Card.Text>
                <Button className="footerButton" variant="primary">Top</Button>
            </Card.Body>
        </Card>
    );
}

export default JournalFooter;