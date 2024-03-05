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
            <Container className="socialMedia">
                <a href="https://instagram.com" target="_blank" className='social-icon'>
                    <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
                </a>
                <a href="https://tiktok.com" target="_blank" className='social-icon'>
                    <FontAwesomeIcon icon={faTiktok} size="3x" />
                </a>
                <a href="https://twitter.com" target="_blank" className='social-icon'>
                    <FontAwesomeIcon icon={faXTwitter}  size="3x"/>
                </a>
            </Container>
            <p className='feedback'>Got Feedback? Let us know!</p>
            <Container className="contacts">
                    <a href="https://wa.me/whatsappphonenumber" target="_blank" className='social-icon'>
                        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                    </a>
                    <a href="tel:+1234567890" className='social-icon'>
                        <FontAwesomeIcon icon={faPhone} size="3x" />
                    </a>
                    <a href="mailto:contact@moodtracks.com" className='social-icon'>
                        <FontAwesomeIcon icon={faEnvelope} size="3x"/>
                    </a>
            </Container>
        </>
    );
}

export default Socials;
