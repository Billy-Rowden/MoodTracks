import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faSadTear, faAngry, faMehBlank} from '@fortawesome/free-regular-svg-icons';
import './index.css'

function EmojiBar() {
    return (
        <Card className="emojiContainer">
            <Card.Body>
                <p> Good <br></br><FontAwesomeIcon icon={faSmile} /> </p>
                <p> Neutral <br></br><FontAwesomeIcon icon={faMehBlank} /></p>
                <p>Low <br></br><FontAwesomeIcon icon={faSadTear} /></p>
                <p>Frustrated <br></br><FontAwesomeIcon icon={faAngry} /></p>
            </Card.Body>
        </Card>
    )
}

export default EmojiBar;