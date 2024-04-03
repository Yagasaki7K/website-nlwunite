import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import HeaderDetails from './HeaderDetails'
import NavLink from './NavLink'

const Header = () => {
    return (
        <HeaderDetails>
            <img src={nlwUniteIcon} alt="Nlw Unite Icon" />

            <nav>
                <NavLink href="/eventos">Eventos</NavLink>
                <NavLink href="/participantes">Participantes</NavLink>
            </nav>
        </HeaderDetails>
    )
}

export default Header