import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagramSquare, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MTLogoVar5 from '../../assets/images/MTLogoVar5.png'

function Socials() {
    return (
        <>
        <img src={MTLogoVar5} />
            <h1>Social Media</h1>
            <Container class="socialMedia">
            <Card>
                <a href="https://instagram.com" target="_blank">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
                <a href="https://tiktok.com" target="_blank">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="https://twitter.com" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
            </Card>
            </Container>
            <Container className="contacts">
                Got Feedback? Let us know!
                <Card>
                    <a href="https://wa.me/whatsappphonenumber" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="tel:+1234567890">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <a href="mailto:contact@moodtracks.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </Card>
            </Container>
        </>
    );
}

export default Socials;
