import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagramSquare, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Socials() {
    return (
        <>
            <h1>Social Media</h1>
            <Card>
                <a href="https://instagram.com" target="_blank">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
            </Card>
            <Card>
                <a href="https://tiktok.com" target="_blank">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
            </Card>
            <Card>
                <a href="https://twitter.com" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
            </Card>
            <Container>
                Got Feedback? Let us know!
                <Card>
                    <a href="https://wa.me/whatsappphonenumber" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </Card>
                <Card>
                    <a href="tel:+1234567890">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                </Card>
                <Card>
                    <a href="mailto:contact@moodtracks.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </Card>
            </Container>
        </>
    );
}

export default Socials;
