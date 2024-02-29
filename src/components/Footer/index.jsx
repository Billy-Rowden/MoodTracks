import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'

function JournalFooter() {
    return (
        <Card className="customFooter">
            <Card.Header>Footer Header</Card.Header>
            <Card.Body>
                <Card.Text>
                    Footer text?
                </Card.Text>
                <Button variant="primary">Button to skip to top of page?</Button>
            </Card.Body>
        </Card>
    );
}

export default JournalFooter;