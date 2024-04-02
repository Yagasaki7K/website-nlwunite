import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import HeaderDetails from './HeaderDetails'

const Header = () => {
    return (
        <HeaderDetails>
            <img src={nlwUniteIcon} alt="Nlw Unite Icon" />

            <nav>
                <a href="" className="event">Eventos</a>
                <a href="">Participantes</a>
            </nav>
        </HeaderDetails>
    )
}

export default Header