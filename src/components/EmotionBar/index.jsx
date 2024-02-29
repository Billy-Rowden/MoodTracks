import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faSadTear, faAngry, faMehBlank} from '@fortawesome/free-regular-svg-icons';
import './index.css'

function EmojiBar() {
    return (
        <Card className="emojiContainer">
            <Card.Body className="emojis">
                <div className="mood"> Good <br></br><FontAwesomeIcon icon={faSmile} /> </div>
                <div className="mood"> Neutral <br></br><FontAwesomeIcon icon={faMehBlank} /></div>
                <div className="mood">Low <br></br><FontAwesomeIcon icon={faSadTear} /></div>
                <div className="mood">Frustrated <br></br><FontAwesomeIcon icon={faAngry} /></div>
            </Card.Body>
        </Card>
    )
}

export default EmojiBar;