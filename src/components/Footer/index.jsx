import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css';

function JournalFooter() {
    return (
        <Card className="footer">
            <Card.Body className="footer-body">
                <Card.Text className="footer-text">© MoodTracks, 2024</Card.Text>
                <Button variant="primary" className="footer-button">Top</Button>
            </Card.Body>
        </Card>
    );
}

export default JournalFooter;
