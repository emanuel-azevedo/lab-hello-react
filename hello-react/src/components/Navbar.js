import logoImg from "../images/logo.png"
import topIcon from "../images/menu-top-xs.png"


function Navbar() {
    return (
        <div className=' d-flex justify-content-between'>            
            <img id='logo' src={logoImg} alt='logo ironhack'/>
            <img id='iconTop' src={topIcon} alt='icone menu topo'/>                               
        </div>
    )
}

export default Navbar;